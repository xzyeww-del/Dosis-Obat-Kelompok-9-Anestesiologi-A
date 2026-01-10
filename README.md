# 📋 Kalkulator Dosis Obat Anestesi

**Aplikasi web untuk perhitungan dosis obat anestesi berbasis algoritma yang aman, terstruktur, dan terbukti klinis.**

> Dikembangkan oleh **Kelompok 9 • Tugas Kewirausahaan — Anestesiologi Kelas A**

---

## 🎯 Tujuan

Menyediakan alat perhitungan dosis obat anestesi yang:
- ✅ Akurat berdasarkan berat badan, usia, dan kondisi pasien
- ✅ Aman dengan guardrails (hard-stop) dan warning peringatan
- ✅ Teraudit dengan log transparan dan dokumentasi formula
- ✅ User-friendly dengan UI live preview dan real-time feedback
- ✅ Terintegrasi dengan database obat yang terstruktur (JSON)

---

## 🚀 Fitur Utama

### 1. **Input Data Pasien**
- Usia, berat badan, tinggi badan
- Jenis kelamin dan status ASA (ASA I–V)
- Jenis prosedur (umum, sedasi, regional, ICU, lokal)
- Durasi prosedur
- Riwayat alergi dan komorbiditas
- Obat yang sedang dikonsumsi

### 2. **Pemilihan Obat Anestesi**
- 30+ obat dari 7 kategori
- Filter & search untuk mudah menemukan

### 3. **Live Preview & Guardrails**
- Real-time calculation: Geser volume → lihat mg langsung
- Hard-stop blocking: Tombol "Hitung" otomatis dinonaktifkan jika melebihi batas
- Soft warning: Peringatan kuning jika mendekati batas (90%)
- Visual feedback: Hijau (aman), Kuning (warning), Merah (hard-stop)

### 4. **Perhitungan Dosis Otomatis**
- Konversi konsentrasi: % → mg/mL
- Dosis maksimal pasien: Berat (kg) × mg/kg
- Volume maksimal: Dosis (mg) ÷ Konsentrasi (mg/mL)
- Faktor koreksi: Usia dan status ASA

### 5. **Deteksi Kontraindikasi & Interaksi**
- Alergi, komorbiditas, interaksi obat
- Hard block jika ada kontraindikasi serius

### 6. **Catatan Asuhan Keperawatan**
- Pre/intra/post-operatif
- Monitoring detail, komplikasi, rekomendasi obat

### 7. **Audit & Dokumentasi**
- Log transparan dengan formula terlihat
- Satuan jelas (mg, mL, mcg/kg/min)
- Sumber data dan versi database

### 8. **Export & Print**
- PDF export siap-audit
- Print langsung dari browser

---

## 📦 Instalasi & Setup

### Cara Membuka Aplikasi

1. **Langsung di Browser**
   ```bash
   # Buka file index.html dengan browser Anda
   # Double-click: index.html
   # Atau right-click → Open with → Browser
   ```

2. **Dari Terminal**
   ```bash
   # Windows (PowerShell)
   start "d:\Data Azmi\Kalkulator dosis\Kalkulator dosis\index.html"
   
   # Atau gunakan live server (jika ada VS Code + Live Server extension)
   ```

### Struktur File

```
Kalkulator dosis/
├── index.html              # Aplikasi utama
├── app.js                  # Logic aplikasi (event listeners)
├── style.css               # Styling
├── doseCalc.js             # Core algorithm module
├── drugs.json              # Database obat (30+ agents)
├── README.md               # Dokumentasi ini
└── tests/
    ├── browser-test-runner.html     # Unit tests (buka di browser)
    ├── doseCalc.test.js             # Node.js test file
    └── nodeDoseCalc.js              # Node.js helper
```

---

## 🧮 Algoritma & Formula

### 1. **Konversi Konsentrasi: % → mg/mL**

Rumus:
$$\text{mg/mL} = \frac{\text{Persentase} \times 1000}{100}$$

Contoh:
- 2% → (2 × 1000) / 100 = 20 mg/mL
- 0.5% → (0.5 × 1000) / 100 = 5 mg/mL

**Kode:**
```javascript
function percentToMgPerMl(percent) {
  return (percent * 1000) / 100;
}
```

### 2. **Dosis Maksimal: mg/kg → Total mg**

Rumus:
$$\text{Dosis Max (mg)} = \text{Berat Badan (kg)} \times \text{Dosis per kg (mg/kg)}$$

Contoh:
- Pasien 70 kg, propofol 2.5 mg/kg → 70 × 2.5 = 175 mg

**Kode:**
```javascript
function calculateMaxDoseMg(weightKg, mgPerKg) {
  return weightKg * mgPerKg;
}
```

### 3. **Volume Maksimal: Dosis ÷ Konsentrasi**

Rumus:
$$\text{Volume Max (mL)} = \frac{\text{Dosis Max (mg)}}{\text{Konsentrasi (mg/mL)}}$$

Contoh:
- Dosis 175 mg, konsentrasi 10 mg/mL → 175 ÷ 10 = 17.5 mL

**Kode:**
```javascript
function calculateMaxVolumeMl(maxDoseMg, concentrationMgPerMl) {
  return maxDoseMg / concentrationMgPerMl;
}
```

### 4. **Kalkulasi mg dari Volume yang Diambil**

Rumus:
$$\text{Dosis Actual (mg)} = \text{Volume Diambil (mL)} \times \text{Konsentrasi (mg/mL)}$$

Contoh:
- Ambil 5 mL dari larutan 20 mg/mL → 5 × 20 = 100 mg

**Kode:**
```javascript
function calculateMgFromVolume(volumeMl, concentrationMgPerMl) {
  return volumeMl * concentrationMgPerMl;
}
```

### 5. **Perhitungan IBW (Ideal Body Weight) Devine**

Rumus Laki-laki:
$$\text{IBW} = 50 + 2.3 \times (\text{Tinggi (inch)} - 60)$$

Rumus Perempuan:
$$\text{IBW} = 45.5 + 2.3 \times (\text{Tinggi (inch)} - 60)$$

Konversi dari cm: $\text{Tinggi (inch)} = \frac{\text{Tinggi (cm)}}{2.54}$

**Kode:**
```javascript
function calculateIBWKg(heightCm, gender) {
  const heightInch = heightCm / 2.54;
  const baseWeight = gender.toLowerCase() === 'M' ? 50 : 45.5;
  const ibw = baseWeight + 2.3 * (heightInch - 60);
  return Math.max(ibw, 0);
}
```

---

## 🔒 Hard-Stop Guardrails

Aplikasi ini menerapkan **3 level keamanan**:

### Level 1: ✅ SAFE (Hijau)
- Dosis actual ≤ 90% dari dosis maksimal
- **Status**: Tombol "Hitung Dosis" AKTIF (biru)
- **Feedback**: Preview hijau, pesan normal

### Level 2: ⚠️ WARNING (Kuning)
- Dosis actual > 90% tapi ≤ 100% dari dosis maksimal
- **Status**: Tombol "Hitung Dosis" AKTIF (kuning/warning)
- **Feedback**: Border kuning, pesan warning "Mendekati batas dosis maksimal!"

### Level 3: ❌ HARD-STOP (Merah)
- Dosis actual > 100% dari dosis maksimal
- **Status**: Tombol "Hitung Dosis" NONAKTIF (disabled/greyed out)
- **Feedback**: Border merah, pesan error "DOSIS MELEBIHI BATAS MAKSIMAL! Kontak dokter anestesi."
- **Action**: User TIDAK bisa submit form; harus kurangi volume atau ubah konsentrasi

**Implementasi di Code:**
```javascript
function computeLivePreview() {
  const weight = parseFloat(document.getElementById('weight').value) || 0;
  const vol = parseFloat(document.getElementById('volumeNumber').value) || 0;
  const concRaw = document.getElementById('concentrationInput').value;
  const concMgPerMl = parseConcentrationInput(concRaw);
  
  if (!concMgPerMl) {
    document.getElementById('livePreview').textContent = 'Masukkan konsentrasi yang valid.';
    return;
  }
  
  const mg = DoseCalc.calculateMgFromVolume(vol, concMgPerMl);
  const drug = drugs.find(d => d.id === selectedDrugs[0]);
  const calculateBtn = document.getElementById('calculateBtn');
  const guardrailWarning = document.getElementById('guardrailWarning');
  const guardrailMessage = document.getElementById('guardrailMessage');
  
  if (drug && weight && drug.max_mg_per_kg) {
    const maxByWeight = DoseCalc.calculateMaxDoseMg(weight, drug.max_mg_per_kg);
    const pct = ((mg / maxByWeight) * 100).toFixed(1);
    
    // Hard-stop check
    if (mg > maxByWeight) {
      // LEVEL 3: HARD-STOP
      calculateBtn.disabled = true;
      calculateBtn.style.opacity = '0.5';
      calculateBtn.style.cursor = 'not-allowed';
      guardrailWarning.style.display = 'block';
      guardrailMessage.textContent = `❌ DOSIS MELEBIHI BATAS! ${mg} mg > ${maxByWeight} mg. Kontak dokter anestesi.`;
      guardrailWarning.style.borderLeftColor = '#c0392b';
      document.getElementById('livePreview').style.color = '#c0392b';
    } else if (mg > 0.9 * maxByWeight) {
      // LEVEL 2: WARNING
      calculateBtn.disabled = false;
      calculateBtn.style.opacity = '1';
      calculateBtn.style.cursor = 'pointer';
      guardrailWarning.style.display = 'block';
      guardrailMessage.textContent = `⚠️ MENDEKATI BATAS DOSIS! ${pct}% dari maksimal.`;
      guardrailWarning.style.borderLeftColor = '#f39c12';
      document.getElementById('livePreview').style.color = '#f39c12';
    } else {
      // LEVEL 1: SAFE
      calculateBtn.disabled = false;
      calculateBtn.style.opacity = '1';
      calculateBtn.style.cursor = 'pointer';
      guardrailWarning.style.display = 'none';
      document.getElementById('livePreview').style.color = '#27ae60';
    }
  }
}
```

---

## 📊 Database Obat

File: `drugs.json`

Struktur setiap entry:
```json
{
  "id": "propofol",
  "name": "Propofol (Diprivan)",
  "dose": 2.5,
  "unit": "mg/kg",
  "route": "IV bolus/infus",
  "type": "iv-induction",
  "time": "30-60 detik",
  "rules": "Kurangi dosis pada usia > 60 tahun, ASA III-IV",
  "warning": "Bradikardi, hipotensi, apnea",
  "side": "Nyeri di tempat suntik, depresi napas, hipotensi",
  "kontra": "Alergi kacang/telur",
  "indication": "Induksi anestesi umum, sedasi",
  "image": "images/propofol.jpg",
  "max_mg_per_kg": 2.5,
  "allergyContra": ["egg", "soy"],
  "comorbidContra": ["liver", "cardiac"],
  "medContra": ["NSAIDs", "opioids"]
}
```

### 30+ Obat Tersedia

**IV-Induction (7):**
1. Propofol
2. Thiopental
3. Etomidate
4. Ketamine
5. Midazolam
6. Methohexital
7. Alfentanil

**Sedasi (4):**
1. Midazolam
2. Lorazepam
3. Diazepam
4. Buspirone

**Opioid (6):**
1. Fentanyl
2. Morphine
3. Codeine
4. Tramadol
5. Pethidine
6. Buprenorphine

**Inhalasi (6):**
1. Sevoflurane
2. Isoflurane
3. Desflurane
4. Nitrous Oxide
5. Halothane
6. Enflurane

**Pelumpuh Otot (4):**
1. Succinylcholine
2. Rocuronium
3. Vecuronium
4. Atracurium

**Anestesi Lokal (6):**
1. Lidocaine
2. Bupivacaine
3. Ropivacaine
4. Mepivacaine
5. Prilocaine
6. Procaine

**Reversing Agents (1):**
1. Sugammadex

---

## 🧪 Unit Tests

### Jalankan Tests di Browser

1. Buka: `tests/browser-test-runner.html`
2. Lihat hasil: Pass/Fail untuk setiap kategori
3. Cek detail: Expected vs Actual value

### 20+ Test Cases

#### Konversi Konsentrasi
- 2% → 20 mg/mL ✅
- 0.5% → 5 mg/mL ✅
- 1% → 10 mg/mL ✅

#### Perhitungan Dosis Maksimal
- 70 kg × 4.5 mg/kg = 315 mg ✅
- 50 kg × 2.5 mg/kg = 125 mg ✅

#### Perhitungan Volume Maksimal
- 315 mg ÷ 10 mg/mL = 31.5 mL ✅
- 125 mg ÷ 5 mg/mL = 25 mL ✅

#### Konversi Volume ke mg
- 5 mL × 20 mg/mL = 100 mg ✅
- 3 mL × 10 mg/mL = 30 mg ✅

#### IBW Devine
- Laki-laki 180 cm → 82.2 kg ✅
- Perempuan 165 cm → 60.8 kg ✅

---

## 📝 Cara Menggunakan Aplikasi

### Step 1: Input Data Pasien
1. Masukkan **Usia**, **Berat Badan (kg)**, **Tinggi Badan (cm)**
2. Pilih **Jenis Kelamin**
3. Pilih **Status ASA**
4. Pilih **Jenis Prosedur** (Umum, Sedasi, Regional, ICU, Lokal)
5. Masukkan **Durasi Prosedur** (menit)

### Step 2: Pilih Obat
1. Gunakan **Filter Tab** (All, IV-Induksi, Sedasi, Opioid, dll)
2. Gunakan **Search** untuk cari nama obat
3. Klik obat yang diinginkan

### Step 3: Live Preview & Guardrails
1. **Konsentrasi Input**: Masukkan "2%" atau "20" (otomatis ke-parse)
2. **Volume Slider**: Geser untuk adjust volume (0–max mL)
3. **Live Preview**: Lihat real-time:
   - `Volume X mL @ Y mg/mL = Z mg — P% dari batas M mg`
   - Warna hijau (aman) / kuning (warning) / merah (hard-stop)
4. **Hard-Stop Block**: Jika melebihi 100% batas → tombol nonaktif

### Step 4: Klik "Hitung Dosis"
1. Tombol **ONLY** aktif jika dosis aman
2. Hasilnya: Detail per-obat + monitoring notes

### Step 5: Export/Print
1. Klik **Export PDF** untuk laporan
2. Klik **Print** untuk cetak langsung dari browser

---

## ⚙️ Tech Stack

- **Frontend**: HTML5, vanilla JavaScript (ES6+), Tailwind CSS, Font Awesome
- **Backend**: Static JSON (drugs.json)
- **Algorithms**: Pure JavaScript (no dependencies)
- **Testing**: Browser-based test runner + Node.js helpers
- **Export**: HTML Canvas → PDF (via browser print)

---

## 👥 Tim Pengembang

**Kelompok 9 • Anestesiologi Kelas A**

Anggota:
- [Nama 1]
- [Nama 2]
- [Nama 3]
- [Nama 4]

---

## 📞 Kontak & Support

- **Email**: azmimubarok92@gmail.com
- **Issues**: Report bug di email atau WhatsApp

---

## 📜 Referensi Medis

1. **Devine Formula (IBW)**: Devine et al., 1974
2. **Dosing Guidelines**:
   - ASA Classification: ASA Physical Status Classification System
   - Drug Dosing: Stoelting's Pharmacology & Physiology in Anesthetic Practice
   - Guardrails: FDA Safety Alerts, UpToDate

3. **Safety Standards**:
   - Hard-stop blocking: ISMP (Institute for Safe Medication Practices)
   - Contraindication detection: Micromedex, Lexicomp

---

## 📋 Versi & Changelog

### v1.0.0 (Current)
- ✅ Core dose calculation algorithms
- ✅ 30+ drug database (JSON)
- ✅ Live preview with guardrails
- ✅ Hard-stop blocking (safety-critical)
- ✅ Unit tests (browser-based)
- ✅ Audit logging & documentation

---

© 2026 Kalkulator Dosis Anestesi - Kelompok 9 Anestesiologi Kelas A
