# 🚀 QUICK START GUIDE — Kalkulator Dosis Anestesi

**Status**: ✅ Production Ready (v1.0.0)

---

## 📖 Dokumentasi

**3 file dokumentasi lengkap tersedia:**

1. **[README.md](README.md)** — Panduan utama (instalasi, fitur, algoritma, test)
2. **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** — Detail implementasi & testing checklist
3. **[HARD_STOP_CODE_REFERENCE.md](HARD_STOP_CODE_REFERENCE.md)** — Code reference untuk hard-stop guardrails

---

## 🎯 5 Menit Setup

### 1. Buka Aplikasi
```bash
# Windows Explorer
Double-click: index.html

# Atau di Browser
Ctrl+O → Navigate to index.html → Open
```

### 2. Input Data Pasien
- Usia, Berat (kg), Tinggi (cm)
- Jenis Kelamin, Status ASA
- Prosedur, Durasi

### 3. Pilih Obat
- Filter Tab atau Search
- Klik obat dari grid

### 4. Live Preview
- Geser Volume slider → lihat mg real-time
- Masukkan Konsentrasi (% atau mg/mL)
- Lihat guardrail color: Hijau (aman) → Kuning (warning) → Merah (hard-stop)

### 5. Klik "Hitung Dosis"
- Tombol HANYA aktif jika dosis aman
- Hasil: Detail per-obat + monitoring notes

---

## 🔒 Hard-Stop Guardrail System

**3 Level Keamanan**:

| Level | Kondisi | Tombol | Warna |
|-------|---------|--------|-------|
| 🟢 **SAFE** | Dosis ≤ 90% max | ✅ Aktif | Hijau |
| 🟡 **WARNING** | 90% < Dosis ≤ 100% | ✅ Aktif | Kuning |
| 🔴 **HARD-STOP** | Dosis > 100% max | ❌ Nonaktif | Merah |

### Contoh: Propofol 70 kg pasien
- Max Dosis: 70 × 2.5 mg/kg = 175 mg
- Volume 15 mL @ 10 mg/mL = 150 mg (85.7%) → **🟢 GREEN** ✅ Proceed
- Volume 17 mL @ 10 mg/mL = 170 mg (97.1%) → **🟡 YELLOW** ⚠️ Confirm
- Volume 20 mL @ 10 mg/mL = 200 mg (114.3%) → **🔴 RED** ❌ Blocked

---

## 🧪 Test Unit Tests

### Browser-Based Tests (Recommended)
```bash
# Buka di browser
tests/browser-test-runner.html

# Lihat hasil: 20+ test cases grouped by category
# Pass/Fail summary + detailed results
```

### Node.js Tests (Optional)
```bash
# Install Node.js jika belum
node -v

# Jalankan tests
node tests/doseCalc.test.js
```

---

## 📦 File Structure

```
├── 📄 index.html              ← BUKA INI untuk aplikasi
├── 📄 app.js                  ← Event handlers & logic
├── 📄 doseCalc.js             ← Core algorithm (5 functions)
├── 📄 drugs.json              ← Database 30+ obat
├── 📄 style.css               ← Styling (Tailwind)
│
├── 📋 README.md               ← Full documentation
├── 📋 IMPLEMENTATION_SUMMARY.md   ← Implementation details
├── 📋 HARD_STOP_CODE_REFERENCE.md ← Code reference
├── 📋 QUICKSTART.md (INI)    ← Quick start guide
│
└── 📁 tests/
    ├── browser-test-runner.html   ← BUKA INI untuk unit tests
    ├── doseCalc.test.js
    └── nodeDoseCalc.js
```

---

## 🎨 Features

✅ **Input Data**: Pasien (usia, berat, tinggi, gender, ASA, prosedur)  
✅ **Drug Selection**: 30+ obat dari 7 kategori  
✅ **Live Preview**: Real-time calculation dengan slider  
✅ **Hard-Stop Guardrails**: 3-level blocking system (safe/warning/hard-stop)  
✅ **Contraindication Checking**: Alergi, komorbiditas, interaksi obat  
✅ **Monitoring Notes**: Pre/intra/post-operative + danger signs  
✅ **Export/Print**: PDF & print-friendly output  
✅ **Unit Tests**: 20+ test cases verified  

---

## 💡 Tips & Tricks

### Tip 1: Shortcut Concentration Input
```
Ketik "2%" atau "20"
Klik "Terapkan" → Otomatis convert
```

### Tip 2: Watch Live Preview
```
Saat geser slider volume:
- Lihat mg langsung berubah
- Warna preview berubah (hijau → kuning → merah)
- Tombol "Hitung" status berubah (aktif → nonaktif)
```

### Tip 3: Hard-Stop Check
```
Jika tombol "Hitung Dosis" grey out (disabled):
1. Lihat pesan merah: "DOSIS MELEBIHI BATAS"
2. Kurangi volume di slider, ATAU
3. Ubah konsentrasi, ATAU
4. Hubungi dokter anestesi
```

### Tip 4: Weight Change Recalculates Guardrails
```
Jika Anda ubah berat pasien:
- Live preview otomatis recalculate
- Tombol status bisa berubah (dari aktif → nonaktif jika dosis sekarang over-limit)
```

---

## ❓ FAQ

**Q1: Bagaimana jika tombol "Hitung" nonaktif?**  
A: Dosis Anda melebihi batas maksimal. Kurangi volume atau ubah konsentrasi, kemudian tombol akan aktif lagi.

**Q2: Apa perbedaan hijau, kuning, merah?**  
A: Hijau = aman; Kuning = warning (80–90% dari max); Merah = hard-stop (>100%).

**Q3: Apakah saya bisa force submit dosis yang nonaktif?**  
A: Tidak. Tombol dinonaktifkan di level JavaScript + click handler double-check. Tidak bisa dipaksa submit.

**Q4: Bagaimana jika ada alergi pasien terhadap obat?**  
A: Aplikasi akan mendeteksi & menunjukkan warning. Kontraindikasi serius akan block pemilihan obat.

**Q5: Bisakah saya export hasil ke PDF?**  
A: Ya. Klik "Export PDF" atau "Print" dari browser (Ctrl+P).

---

## 🔧 Troubleshooting

| Issue | Solusi |
|-------|--------|
| Tombol "Hitung" tidak respond | Refresh page (Ctrl+R) atau clear browser cache |
| Live preview tidak update | Pastikan konsentrasi input valid (% atau angka) |
| Drug list kosong | Check drugs.json loaded (F12 → Console → errors?) |
| Print tidak rapi | Gunakan "Print to PDF" untuk hasil terbaik |
| Test file tidak terbuka | Pastikan browser mendukung JavaScript (enable JS) |

---

## 📞 Support

**Issue Reporting**:
- Email: azmimubarok92@gmail.com
- WhatsApp: [contact via WhatsApp]

**Development Team**:
- Kelompok 9 • Anestesiologi Kelas A • Universitas Indonesia

---

## ✅ Checklist Sebelum Deploy

- [x] `index.html` bisa dibuka di browser
- [x] Drug list loaded (30+ obat tampil)
- [x] Live preview working (slider update real-time)
- [x] Hard-stop blocking working (tombol disabled saat over-limit)
- [x] Guardrail color feedback (hijau/kuning/merah)
- [x] "Hitung Dosis" button working
- [x] Results page showing
- [x] Export/Print working
- [x] Unit tests passing (20+ test cases)
- [x] No console errors (F12 → Console)

---

## 🎓 Learn More

| Topic | File |
|-------|------|
| Full Documentation | [README.md](README.md) |
| Implementation Details | [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) |
| Hard-Stop Code Details | [HARD_STOP_CODE_REFERENCE.md](HARD_STOP_CODE_REFERENCE.md) |
| Algorithms & Formulas | [README.md](README.md#-algoritma--formula) |
| Testing Guide | [README.md](README.md#-unit-tests) |

---

**🎉 SIAP DIGUNAKAN!**

Buka `index.html` sekarang dan mulai hitung dosis anestesi dengan aman.

---

© 2026 Kelompok 9 • Anestesiologi Kelas A
