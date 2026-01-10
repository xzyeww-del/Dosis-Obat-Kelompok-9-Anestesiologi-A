(function (global) {
  const DoseCalc = {
    // Konversi konsentrasi: % -> mg/mL
    percentToMgPerMl(percent) {
      // percent: number or string like "2%" -> returns mg/mL
      const p = typeof percent === 'string' ? parseFloat(percent.replace('%', '')) : parseFloat(percent);
      if (Number.isNaN(p)) return null;
      // % w/v -> g / 100 mL. 1% = 1 g/100 mL = 1000 mg/100 mL = 10 mg/mL
      return (p * 1000) / 100;
    },

    // Dosis maksimal pasien (mg) berdasarkan berat (kg) dan mg/kg
    calculateMaxDoseMg(weightKg, mgPerKg) {
      if (!weightKg || !mgPerKg) return null;
      return weightKg * mgPerKg;
    },

    // Volume maksimum (mL) = dosis_mg / konsentrasi(mg/mL)
    calculateMaxVolumeMl(maxDoseMg, concentrationMgPerMl) {
      if (!maxDoseMg || !concentrationMgPerMl) return null;
      return maxDoseMg / concentrationMgPerMl;
    },

    // IBW (Devine) - tinggi dalam cm
    calculateIBWKg(heightCm, gender) {
      if (!heightCm) return null;
      // convert cm to inches
      const inches = heightCm / 2.54;
      if (gender === 'male') return 50 + 2.3 * (inches - 60);
      if (gender === 'female') return 45.5 + 2.3 * (inches - 60);
      return null;
    },

    // Infusion rate: return mg/hour or mcg/kg/min etc.
    // mode: 'mg_per_hr' or 'mcg_per_kg_min'
    calculateInfusionRate({mode, dose, weightKg}) {
      // dose: if mode mg_per_hr -> mg/hr; if mcg_per_kg_min -> mcg/kg/min
      if (mode === 'mg_per_hr') return { mg_per_hr: dose };
      if (mode === 'mcg_per_kg_min' && weightKg) {
        // convert to mg/hr for pump programming
        const mcgPerKgMin = dose;
        const mgPerHr = (mcgPerKgMin * weightKg * 60) / 1000;
        return { mcg_per_kg_min: mcgPerKgMin, mg_per_hr: mgPerHr };
      }
      return null;
    },

    // Accumulator untuk dosis kumulatif sederhana
    createAccumulator() {
      const state = { entries: [], totalMg: 0 };
      return {
        add(entry) {
          // entry: { drugId, mg, time: ISO }
          state.entries.push(entry);
          state.totalMg += Number(entry.mg) || 0;
          return Object.assign({ totalMg: state.totalMg }, entry);
        },
        getTotal() { return state.totalMg; },
        getEntries() { return state.entries.slice(); },
        reset() { state.entries = []; state.totalMg = 0; }
      };
    },
    
    // Hitung mg dari volume (mL) dan konsentrasi (mg/mL)
    calculateMgFromVolume(volumeMl, concentrationMgPerMl) {
      if (volumeMl == null || concentrationMgPerMl == null) return null;
      return Number(volumeMl) * Number(concentrationMgPerMl);
    },

    // Guardrail checker: returns { hardStop: bool, warnings: [] }
    checkGuardrails({weightKg, ageYears, ibwKg, drug, cumulativeMg}) {
      // drug: { id, name, concentration_mg_per_ml, max_mg_per_kg, cumulative_limit_mg }
      const result = { hardStop: false, warnings: [], details: {} };
      if (!drug) return result;
      // compute patient-based max
      const maxByWeight = this.calculateMaxDoseMg(weightKg, drug.max_mg_per_kg);
      result.details.maxByWeightMg = maxByWeight;
      if (cumulativeMg && cumulativeMg > maxByWeight) {
        result.hardStop = true;
        result.warnings.push(`HARD STOP: total kumulatif ${cumulativeMg} mg melebihi batas ${maxByWeight} mg (${drug.max_mg_per_kg} mg/kg).`);
      }
      if (drug.cumulative_limit_mg && cumulativeMg && cumulativeMg > drug.cumulative_limit_mg) {
        result.hardStop = true;
        result.warnings.push(`HARD STOP: total kumulatif ${cumulativeMg} mg melebihi batas sediaan ${drug.cumulative_limit_mg} mg.`);
      }

      // soft warnings
      if (ageYears !== undefined) {
        if (ageYears < 1) result.warnings.push('Soft warning: pasien neonatus/bayi — perhitungan sensitif');
        if (ageYears > 65) result.warnings.push('Soft warning: pasien lansia — pertimbangkan penurunan clearance');
      }
      // hepatic/renal flags would be passed externally; here we just note absence
      result.details.concentrationMgPerMl = drug.concentration_mg_per_ml || null;
      return result;
    },

    // Audit formatter: returns object with transparent formulas
    formatAudit({weightKg, percentConcentration, mgPerKg, cumulativeMg, drug}) {
      const concentration = percentConcentration ? this.percentToMgPerMl(percentConcentration) : (drug && drug.concentration_mg_per_ml);
      const maxDoseMg = this.calculateMaxDoseMg(weightKg, mgPerKg);
      const maxVolumeMl = concentration ? this.calculateMaxVolumeMl(maxDoseMg, concentration) : null;
      return {
        inputs: { weightKg, percentConcentration, concentrationMgPerMl: concentration, mgPerKg, cumulativeMg },
        formulas: {
          percent_to_mg_per_ml: `(${percentConcentration} % -> ${concentration} mg/mL)`,
          maxDoseMg: `weightKg(${weightKg}) * mgPerKg(${mgPerKg}) = ${maxDoseMg} mg`,
          maxVolumeMl: concentration ? `maxDoseMg(${maxDoseMg}) / concentrationMgPerMl(${concentration}) = ${maxVolumeMl} mL` : 'N/A'
        },
        drug: drug ? { id: drug.id, name: drug.name, source: drug.version || drug.source || 'unknown' } : null
      };
    }
  };

  // expose to window for console/UI usage
  global.DoseCalc = DoseCalc;
})(window);
