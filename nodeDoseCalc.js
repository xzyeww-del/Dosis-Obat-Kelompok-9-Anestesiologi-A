// Node-compatible reimplementation of core DoseCalc helpers for unit testing
module.exports = {
  percentToMgPerMl(percent) {
    const p = typeof percent === 'string' ? parseFloat(percent.replace('%','')) : parseFloat(percent);
    if (Number.isNaN(p)) return null;
    return (p * 1000) / 100;
  },
  calculateMaxDoseMg(weightKg, mgPerKg) {
    if (!weightKg || !mgPerKg) return null;
    return weightKg * mgPerKg;
  },
  calculateMaxVolumeMl(maxDoseMg, concentrationMgPerMl) {
    if (!maxDoseMg || !concentrationMgPerMl) return null;
    return maxDoseMg / concentrationMgPerMl;
  },
  calculateMgFromVolume(volumeMl, concentrationMgPerMl) {
    if (volumeMl == null || concentrationMgPerMl == null) return null;
    return Number(volumeMl) * Number(concentrationMgPerMl);
  }
};
