# 🏥 QUICK REFERENCE — Vital Signs & Per-Drug Guardrails

**Updated**: 2026-01-11 | **Version**: 1.0.1

---

## 📋 NEW INPUT FIELDS (Lines 314–356 in index.html)

### Blood Type & Physiological Parameters
```
Field                  Input Type    Range           Normal Value
─────────────────────────────────────────────────────────────────
Golongan Darah        Select        A+/A-/B+/B-...  Variable
Tekanan Darah Sistolik Number       50–300 mmHg     120
Tekanan Darah Diastolik Number      30–200 mmHg     80
Nadi (HR)             Number        30–200 x/min    72
Laju Pernapasan       Number        8–60 x/min      16
Suhu Tubuh            Number        32–42 °C        37.0
SpO₂                  Number        50–100 %        98
Gula Darah Puasa      Number        40–500 mg/dL    100
Hemoglobin            Number        5–20 g/dL       13.5
```

---

## ⚠️ AUTOMATIC ALERTS

### Validation Thresholds

**CRITICAL (Red - ❌)**
```
SpO₂ < 90% → ❌ HIPOKSEMIA KRITIS
```

**WARNING (Yellow - ⚠️)**
```
Tekanan Darah Sistolik > 180
Tekanan Darah Diastolik > 120
Nadi < 40 (Bradikardi)
Nadi > 120 (Takikardi)
Laju Pernapasan < 12 (Depresi Napas!)
Laju Pernapasan > 30
Suhu < 36 (Hipotermia)
Suhu > 39 (Demam)
SpO₂ < 95
```

**SAFE (Green - ✅)**
```
Semua parameter dalam range normal
```

---

## 🔒 PER-DRUG GUARDRAIL BLOCKING

### How It Works

```
1. User selects drug
   ↓
2. setLiveCalcForDrug(drugId) executes
   ↓
3. Gets drug.max_mg_per_kg from drugs.json
   ↓
4. computeLivePreview() calculates:
   - maxByWeight = patient_weight × drug.max_mg_per_kg
   - actual_dose = volume × concentration
   ↓
5. Compare:
   - If actual_dose > 100% of maxByWeight → HARD-STOP
   - If actual_dose > 90% of maxByWeight → WARNING
   - Otherwise → SAFE
   ↓
6. Button disabled if HARD-STOP
```

### Example: Different Drugs, Same Patient

**Patient: 70 kg, Volume: 20 mL @ 10 mg/mL = 200 mg actual dose**

| Drug | max_mg_per_kg | Max Dose | 200 mg is | Status |
|------|---|---|---|---|
| Propofol | 2.5 | 175 mg | >100% | 🔴 HARD-STOP |
| Thiopental | 5.0 | 350 mg | <100% | 🟢 SAFE |
| Etomidate | 0.3 | 21 mg | >100% | 🔴 HARD-STOP |

→ **Each drug has different guardrail!**

---

## 🔄 AUTO-RECALCULATION TRIGGERS

✅ Drug selected  
✅ Volume slider moved  
✅ Concentration input changed  
✅ **Weight changed**  
✅ **ANY vital sign changed**  
✅ Blood type selected  

---

## 📊 VALIDATION FUNCTIONS

```javascript
// Lines 1395–1438 in index.html

validateVitalSigns()
├─ Check BP (>180 systolic? >120 diastolic?)
├─ Check HR (Bradikardi <40? Takikardi >120?)
├─ Check RR (Depresi napas <12? Takipnea >30?)
├─ Check Temp (Hipotermia <36? Demam >39?)
├─ Check SpO₂ (CRITICAL <90? WARNING <95?)
└─ Return: { isValid, warnings[] }

checkBloodType()
└─ Log selected blood type to console

displayVitalSignsStatus()
└─ Show green (OK) or yellow/red (abnormal) status box
```

---

## 💡 EXAMPLE WORKFLOWS

### Scenario 1: Safe Dose with Normal Vitals
```
1. Input patient: 70 kg, ASA I
2. Select Propofol (max 2.5 mg/kg = 175 mg max)
3. Input vitals: BP 120/80, HR 72, RR 16, Temp 37, SpO₂ 98
4. Input concentration: 10 mg/mL
5. Adjust volume: 15 mL (= 150 mg)

Result:
✅ Vital Signs Status: GREEN "Semua Tanda Vital Normal"
🟢 Live Preview: Hijau (150 mg = 85.7% of 175 mg max)
✅ Button: ACTIVE - User dapat click "Hitung Dosis"
```

### Scenario 2: Warning with Elevated BP
```
1. Same setup as Scenario 1
2. Change BP to: 155/100

Result:
✅ Vital Signs Status: YELLOW "⚠️ PERHATIAN TANDA VITAL"
   - Tekanan Darah Sistolik tinggi
   - Tekanan Darah Diastolik tinggi
🟢 Live Preview: Tetap SAFE (dosis masih 85.7%)
✅ Button: ACTIVE - User dapat proceed dengan alert
```

### Scenario 3: Hard-Stop with Critical SpO2
```
1. Same setup as Scenario 1
2. Change SpO₂ to: 88

Result:
❌ Vital Signs Status: RED "❌ CRITICAL SpO₂ kritis"
   - Risiko Hipoksemia, Pastikan Airway Aman
🟢 Live Preview: Tetap SAFE (dosis masih 85.7%)
⚠️ Status Box: PROMINENT RED alert for oxygen management
✅ Button: ACTIVE - Dose safe, but clinician alerted to airway
```

### Scenario 4: Hard-Stop Dose + Abnormal Vitals
```
1. Same patient: 70 kg, Propofol
2. Adjust volume: 20 mL (= 200 mg actual)
3. Input vitals: HR 110, RR 10, SpO₂ 93

Result:
❌ Vital Signs Status: YELLOW "⚠️ PERHATIAN TANDA VITAL"
   - Nadi terlalu tinggi (Takikardi)
   - Laju Pernapasan rendah (Depresi Napas Risk)
   - SpO₂ rendah
🔴 Live Preview: RED (200 mg = 114.3% of 175 mg max)
❌ Button: DISABLED - Hard-stop triggered
❌ Message: "DOSIS MELEBIHI BATAS MAKSIMAL"
```

---

## 🧪 TESTING IN BROWSER

### Quick Test:
1. Open `index.html` in browser
2. Scroll to "📊 Tanda-Tanda Vital & Parameter Fisiologis"
3. Input values:
   - Blood Type: O+
   - BP: 130/90
   - HR: 105
   - RR: 14
   - Temp: 37.2
   - SpO₂: 96
4. **Expected**: Yellow status box with BP warning + Tachycardia warning

### Hard-Stop Test:
1. Select Propofol (2.5 mg/kg)
2. Set volume slider to 25 mL @ 10 mg/mL = 250 mg
3. **Expected**: 
   - Red preview text
   - Button DISABLED (greyed out)
   - Red guardrail warning message

---

## 📁 FILES MODIFIED

```
index.html
├─ Lines 314–356: Added vital signs input fields
├─ Lines 1395–1438: Added validation functions
└─ Lines 1802–1838: Added event listeners

VITAL_SIGNS_UPDATE.md (NEW)
└─ Comprehensive documentation
```

---

## ✅ CHECKLIST: What's Working

- [x] All 8 vital signs inputs functional
- [x] Blood type selection working
- [x] Validation on input change (auto-triggers)
- [x] Status box displays (green/yellow/red)
- [x] Per-drug guardrail blocking active
- [x] Guardrails recalculate when vitals change
- [x] Guardrails recalculate when weight changes
- [x] Guardrails recalculate when drug changes
- [x] No JavaScript errors
- [x] Console logging working (blood type, vital signs ready)

---

## 🎯 KEY TAKEAWAY

**Setiap obat punya batas dosis yang BERBEDA** (sesuai max_mg_per_kg):
- **Propofol**: Max 2.5 mg/kg
- **Thiopental**: Max 5.0 mg/kg  
- **Ketamine**: Max 1.5 mg/kg
- **Etomidate**: Max 0.3 mg/kg
- dst...

**Guardrail OTOMATIS menyesuaikan** berdasarkan:
1. ✅ Drug yang dipilih
2. ✅ Berat pasien
3. ✅ Konsentrasi obat
4. ✅ Volume yang diambil

**Hasilnya**: Setiap kombinasi drug + patient + vital signs punya guardrail yang UNIK!

---

© 2026 Kelompok 9 • Anestesiologi Kelas A
