const drugs = [
  // ===== INTRAVENA (IV) =====
  {
    id: "propofol",
    name: "Propofol (Diprivan)",
    dose: 2.5,
    unit: "mg/kg",
    route: "IV bolus/infus",
    type: "iv-induction",
    time: "30-60 detik, durasi 5-10 menit",
    rules: "Induksi anestesi umum, bolus perlahan 1.5-2.5 mg/kg. Infus pemeliharaan 100-200 mcg/kg/menit.",
    warning: "Monitor tekanan darah, pernapasan, risiko hipotensi dan apnea.",
    side: "Hipotensi, apnea, nyeri injeksi, bradikardia, PRIS (infus lama)",
    kontra: "Alergi propofol, telur, kedelai, gangguan metabolisme lipid",
    indication: "Induksi dan pemeliharaan anestesi umum pada dewasa dan anak-anak.",
    image: "images/propofol_1.jpg",
    allergyContra: ["egg", "soy"],
    comorbidContra: ["liver"],
    medContra: []
  },
  {
    id: "ketamin",
    name: "Ketamin",
    dose: 1.0,
    unit: "mg/kg",
    route: "IV/IM",
    type: "iv-induction",
    time: "30 detik (IV), 3-4 menit (IM); durasi 5-15 menit",
    rules: "Induksi anestesi, bolus 1-2 mg/kg IV atau 4-6 mg/kg IM.",
    warning: "Monitor tekanan darah, psikosis, sekresi saliva.",
    side: "Halusinasi, hipertensi, peningkatan sekresi, mual",
    kontra: "Hipertensi berat, gangguan jantung, psikosis",
    indication: "Induksi anestesi, sedasi, analgesia, pasien syok.",
    image: "images/ketamin_1.jpg",
    allergyContra: [],
    comorbidContra: ["hypertension", "heart", "thyroid"],
    medContra: ["maoi"]
  },
  {
    id: "etomidat",
    name: "Etomidat",
    dose: 0.3,
    unit: "mg/kg",
    route: "IV bolus",
    type: "iv-induction",
    time: "30-60 detik, durasi 3-5 menit",
    rules: "Induksi anestesi pada pasien risiko kardiovaskular, bolus 0.2-0.3 mg/kg.",
    warning: "Risiko mioklonus, supresi adrenal, mual.",
    side: "Mioklonus, mual, supresi adrenal",
    kontra: "Insufisiensi adrenal, sepsis berat",
    indication: "Induksi anestesi pada pasien risiko kardiovaskular.",
    image: "images/etomidat_1.jpg",
    allergyContra: [],
    comorbidContra: [],
    medContra: ["steroid"]
  },
  {
    id: "midazolam",
    name: "Midazolam",
    dose: 0.1,
    unit: "mg/kg",
    route: "IV/IM/Oral",
    type: "sedasi",
    time: "1-5 menit, durasi 30-60 menit",
    rules: "Premedikasi, sedasi, induksi. Dosis titrasi sesuai respons.",
    warning: "Monitor depresi pernapasan, sedasi berlebihan.",
    side: "Sedasi berlebihan, depresi pernapasan, amnesia",
    kontra: "Alergi benzodiazepin, gangguan hati berat",
    indication: "Premedikasi, sedasi, induksi anestesi, prosedur diagnostik.",
    image: "images/midazolam_1.jpg",
    allergyContra: [],
    comorbidContra: ["liver", "kidney"],
    medContra: []
  },
  {
    id: "fentanil",
    name: "Fentanil",
    dose: 0.002,
    unit: "mg/kg",
    route: "IV bolus/infus/transdermal",
    type: "opioid",
    time: "1-2 menit, durasi 30-60 menit",
    rules: "Analgesik kuat, bolus 1-2 mcg/kg IV, infus 0.5-2 mcg/kg/jam.",
    warning: "Monitor depresi pernapasan, bradikardia.",
    side: "Depresi pernapasan, mual, bradikardia",
    kontra: "Gangguan pernapasan berat, miastenia gravis",
    indication: "Analgesik kuat, induksi dan pemeliharaan anestesi, sedasi ICU.",
    image: "images/fentanil_1.jpg",
    allergyContra: [],
    comorbidContra: ["asthma"],
    medContra: ["maoi", "beta-blocker"]
  },
  {
    id: "thiopental",
    name: "Thiopental",
    dose: 3.5,
    unit: "mg/kg",
    route: "IV bolus",
    type: "iv-induction",
    time: "30 detik, durasi 5-10 menit",
    rules: "Induksi anestesi, bolus 3-5 mg/kg.",
    warning: "Risiko hipotensi, depresi pernapasan, laringospasme.",
    side: "Hipotensi, apnea, laringospasme",
    kontra: "Porfiria, gangguan pernapasan berat",
    indication: "Induksi anestesi umum pada dewasa dan anak-anak.",
    image: "images/thiopental_1.png",
    allergyContra: [],
    comorbidContra: ["asthma", "heart"],
    medContra: []
  },
  {
    id: "methohexital",
    name: "Methohexital",
    dose: 1.5,
    unit: "mg/kg",
    route: "IV bolus",
    type: "iv-induction",
    time: "30 detik, durasi 5-7 menit",
    rules: "Induksi anestesi, bolus 1-2 mg/kg.",
    warning: "Risiko eksitasi, depresi pernapasan.",
    side: "Eksitasi, apnea, hipotensi",
    kontra: "Porfiria, gangguan pernapasan berat",
    indication: "Induksi anestesi umum, prosedur singkat.",
    image: "images/methohexital.jpg",
    allergyContra: [],
    comorbidContra: ["epilepsy"],
    medContra: []
  },
  {
    id: "dexmedetomidine",
    name: "Dexmedetomidine",
    dose: 1,
    unit: "mcg/kg",
    route: "IV infus",
    type: "sedasi",
    time: "5-10 menit, durasi 1-2 jam",
    rules: "Sedasi ICU, loading 1 mcg/kg, maintenance 0.2-0.7 mcg/kg/jam.",
    warning: "Risiko bradikardia, hipotensi.",
    side: "Bradikardia, hipotensi, mulut kering",
    kontra: "Blok AV derajat tinggi, hipotensi berat",
    indication: "Sedasi ICU, sedasi prosedur, premedikasi.",
    image: "images/dexmedetomidine.jpg",
    allergyContra: [],
    comorbidContra: ["heart"],
    medContra: ["beta-blocker"]
  },
  // ===== INHALASI =====
  {
    id: "sevofluran",
    name: "Sevofluran",
    dose: "1-3%",
    unit: "konsentrasi",
    route: "Inhalasi",
    type: "inhalation",
    time: "1-2 menit, durasi sesuai pemakaian",
    rules: "Induksi/pemeliharaan anestesi, via vaporizer.",
    warning: "Monitor nefrotoksisitas, kejang.",
    side: "Kejang, nefrotoksisitas",
    kontra: "Epilepsi, gangguan ginjal berat",
    indication: "Induksi dan pemeliharaan anestesi inhalasi pada dewasa dan anak-anak.",
    image: "images/sevofluran.jpg",
    allergyContra: [],
    comorbidContra: ["epilepsy", "kidney"],
    medContra: []
  },
  {
    id: "isofluran",
    name: "Isofluran",
    dose: "1-3%",
    unit: "konsentrasi",
    route: "Inhalasi",
    type: "inhalation",
    time: "2-5 menit, durasi sesuai pemakaian",
    rules: "Pemeliharaan anestesi, via vaporizer.",
    warning: "Monitor hipotensi, aritmia.",
    side: "Hipotensi, aritmia",
    kontra: "Gangguan jantung berat",
    indication: "Pemeliharaan anestesi inhalasi.",
    image: "images/isofluran.jpg",
    allergyContra: [],
    comorbidContra: ["heart"],
    medContra: []
  },
  {
    id: "desfluran",
    name: "Desfluran",
    dose: "4-12%",
    unit: "konsentrasi",
    route: "Inhalasi",
    type: "inhalation",
    time: "1-2 menit, durasi sesuai pemakaian",
    rules: "Pemeliharaan anestesi, via vaporizer.",
    warning: "Monitor iritasi saluran napas.",
    side: "Batuk, iritasi saluran napas",
    kontra: "Asma, gangguan saluran napas berat",
    indication: "Pemeliharaan anestesi inhalasi pada dewasa.",
    image: "images/desfluran.jpg",
    allergyContra: [],
    comorbidContra: ["asthma"],
    medContra: []
  },
  {
    id: "halotan",
    name: "Halotan",
    dose: "0.5-2%",
    unit: "konsentrasi",
    route: "Inhalasi",
    type: "inhalation",
    time: "2-5 menit, durasi sesuai pemakaian",
    rules: "Induksi/pemeliharaan anestesi, via vaporizer.",
    warning: "Monitor fungsi hati, aritmia.",
    side: "Hepatotoksisitas, aritmia",
    kontra: "Riwayat hepatitis, gangguan jantung berat",
    indication: "Induksi dan pemeliharaan anestesi inhalasi.",
    image: "images/Halotan.jpeg",
    allergyContra: [],
    comorbidContra: ["liver", "heart"],
    medContra: []
  },
  {
    id: "enfluran",
    name: "Enfluran",
    dose: "1-3%",
    unit: "konsentrasi",
    route: "Inhalasi",
    type: "inhalation",
    time: "2-5 menit, durasi sesuai pemakaian",
    rules: "Pemeliharaan anestesi, via vaporizer.",
    warning: "Monitor kejang, fungsi ginjal.",
    side: "Kejang, nefrotoksisitas",
    kontra: "Epilepsi, gangguan ginjal berat",
    indication: "Pemeliharaan anestesi inhalasi.",
    image: "images/enfluran.jpg",
    allergyContra: [],
    comorbidContra: ["epilepsy", "kidney"],
    medContra: []
  },
  {
    id: "nitrous",
    name: "Nitrous Oxide (Gas oksida nitrat)",
    dose: "20-70%",
    unit: "konsentrasi",
    route: "Inhalasi",
    type: "inhalation",
    time: "2-3 menit, durasi sesuai pemakaian",
    rules: "Pemeliharaan anestesi, via masker/ventilator.",
    warning: "Monitor oksigenasi, ventilasi.",
    side: "Hipoksia, mual, pusing",
    kontra: "Pneumotoraks, obstruksi usus, defisiensi B12",
    indication: "Analgesia dan pemeliharaan anestesi inhalasi, sedasi prosedur.",
    image: "images/nitrous_oxide.jpg",
    allergyContra: [],
    comorbidContra: [],
    medContra: []
  },
  // ===== OPIOID =====
  {
    id: "morfin",
    name: "Morfin",
    dose: 0.1,
    unit: "mg/kg",
    route: "IV/IM/Subkutan",
    type: "opioid",
    time: "5-10 menit, durasi 2-4 jam",
    rules: "Analgesik, bolus 0.05-0.1 mg/kg.",
    warning: "Monitor depresi pernapasan, mual.",
    side: "Depresi pernapasan, mual, konstipasi",
    kontra: "Depresi pernapasan berat, alergi morfin",
    indication: "Analgesia kuat pada nyeri berat, premedikasi, anestesi.",
    image: "images/morfin.jpg",
    allergyContra: [],
    comorbidContra: ["asthma"],
    medContra: ["maoi"]
  },
  {
    id: "hidromorfon",
    name: "Hidromorfon",
    dose: 0.01,
    unit: "mg/kg",
    route: "IV/IM/Subkutan",
    type: "opioid",
    time: "5-10 menit, durasi 2-4 jam",
    rules: "Analgesik, bolus 0.01-0.02 mg/kg.",
    warning: "Monitor depresi pernapasan, mual.",
    side: "Depresi pernapasan, mual, konstipasi",
    kontra: "Depresi pernapasan berat, alergi hidromorfon",
    indication: "Analgesia kuat pada nyeri berat, premedikasi.",
    image: "images/hidromorfon.jpg",
    allergyContra: [],
    comorbidContra: ["asthma"],
    medContra: ["maoi"]
  },
  {
    id: "sufentanil",
    name: "Sufentanil",
    dose: 0.0005,
    unit: "mg/kg",
    route: "IV bolus/infus",
    type: "opioid",
    time: "1-2 menit, durasi 30-60 menit",
    rules: "Analgesik kuat, bolus 0.2-0.5 mcg/kg.",
    warning: "Monitor depresi pernapasan, bradikardia.",
    side: "Depresi pernapasan, mual, bradikardia",
    kontra: "Gangguan pernapasan berat, alergi sufentanil",
    indication: "Analgesia kuat, induksi dan pemeliharaan anestesi.",
    image: "images/sufentanil.jpg",
    allergyContra: [],
    comorbidContra: ["asthma"],
    medContra: ["beta-blocker", "maoi"]
  },
  {
    id: "remifentanil",
    name: "Remifentanil",
    dose: 0.001,
    unit: "mg/kg",
    route: "IV infus",
    type: "opioid",
    time: "1-2 menit, durasi 5-10 menit",
    rules: "Analgesik kuat, infus 0.05-2 mcg/kg/menit.",
    warning: "Monitor depresi pernapasan, bradikardia.",
    side: "Depresi pernapasan, mual, bradikardia",
    kontra: "Gangguan pernapasan berat, alergi remifentanil",
    indication: "Analgesia kuat, pemeliharaan anestesi, sedasi ICU.",
    image: "images/remifentanil.jpg",
    allergyContra: [],
    comorbidContra: ["asthma"],
    medContra: ["beta-blocker", "maoi"]
  },
  {
    id: "alfentanil",
    name: "Alfentanil",
    dose: 0.02,
    unit: "mg/kg",
    route: "IV bolus/infus",
    type: "opioid",
    time: "1-2 menit, durasi 10-20 menit",
    rules: "Analgesik kuat, bolus 8-20 mcg/kg.",
    warning: "Monitor depresi pernapasan, bradikardia.",
    side: "Depresi pernapasan, mual, bradikardia",
    kontra: "Gangguan pernapasan berat, alergi alfentanil",
    indication: "Analgesia kuat, induksi dan pemeliharaan anestesi.",
    image: "images/alfentanil_.jpg",
    allergyContra: [],
    comorbidContra: ["asthma"],
    medContra: ["beta-blocker", "maoi"]
  },
  // ===== RELAKSAN OTOT =====
  {
    id: "rokuronium",
    name: "Rokuronium",
    dose: 0.6,
    unit: "mg/kg",
    route: "IV bolus",
    type: "muscle-relaxant",
    time: "1-2 menit, durasi 30-60 menit",
    rules: "Intubasi, bolus 0.6-1.2 mg/kg.",
    warning: "Monitor fungsi pernapasan, alergi.",
    side: "Tachikardia, reaksi alergi",
    kontra: "Alergi rokuronium",
    indication: "Relaksasi otot untuk intubasi dan operasi.",
    image: "images/rokuronium.jpg",
    allergyContra: [],
    comorbidContra: ["kidney", "liver"],
    medContra: ["aminoglycoside"]
  },
  {
    id: "atrakurium",
    name: "Atrakurium",
    dose: 0.5,
    unit: "mg/kg",
    route: "IV bolus",
    type: "muscle-relaxant",
    time: "2-3 menit, durasi 20-35 menit",
    rules: "Intubasi, bolus 0.5 mg/kg.",
    warning: "Monitor fungsi pernapasan, alergi.",
    side: "Bronkospasme, hipotensi",
    kontra: "Alergi atrakurium",
    indication: "Relaksasi otot untuk intubasi dan operasi.",
    image: "images/atrakurium.jpg",
    allergyContra: [],
    comorbidContra: ["asthma"],
    medContra: ["aminoglycoside"]
  },
  {
    id: "vekuronium",
    name: "Vekuronium",
    dose: 0.1,
    unit: "mg/kg",
    route: "IV bolus",
    type: "muscle-relaxant",
    time: "2-3 menit, durasi 25-40 menit",
    rules: "Intubasi, bolus 0.1 mg/kg.",
    warning: "Monitor fungsi pernapasan, alergi.",
    side: "Hipotensi, reaksi alergi",
    kontra: "Alergi vekuronium",
    indication: "Relaksasi otot untuk intubasi dan operasi.",
    image: "images/vekuronium_1.jpg",
    allergyContra: [],
    comorbidContra: ["kidney", "liver"],
    medContra: ["aminoglycoside"]
  },
  {
    id: "suksinilkolin",
    name: "Suksinil kolin",
    dose: 1.0,
    unit: "mg/kg",
    route: "IV bolus",
    type: "muscle-relaxant",
    time: "30 detik, durasi 5-10 menit",
    rules: "Intubasi, bolus 1-1.5 mg/kg.",
    warning: "Risiko hipertermia maligna, hiperkalemia.",
    side: "Fasisikulasi, hipertermia maligna, hiperkalemia",
    kontra: "Riwayat hipertermia maligna, hiperkalemia",
    indication: "Relaksasi otot cepat untuk intubasi dan prosedur singkat.",
    image: "images/suksinil_kolin.jpg",
    allergyContra: [],
    comorbidContra: ["malignant-hyperthermia", "kidney"],
    medContra: ["aminoglycoside"]
  },
  // ===== ANESTESI LOKAL =====
  {
    id: "lidokain",
    name: "Lidokain",
    dose: 4.5,
    unit: "mg/kg",
    route: "Injeksi lokal, epidural",
    type: "local",
    time: "2-5 menit, durasi 1-2 jam",
    rules: "Anestesi lokal, dosis maksimal 300 mg. Hindari injeksi intravaskular.",
    warning: "Monitor dosis total, tanda toksisitas.",
    side: "Pusing, tinnitus, parestesia, aritmia",
    kontra: "Alergi lidokain, hipersensitivitas aminoamide",
    indication: "Anestesi lokal, regional, antiaritmia.",
    image: "images/lidokain.jpg",
    allergyContra: [],
    comorbidContra: ["heart"],
    medContra: ["anticoagulant"]
  },
  {
    id: "bupivakain",
    name: "Bupivakain",
    dose: 2.0,
    unit: "mg/kg",
    route: "Injeksi lokal, epidural",
    type: "local",
    time: "5-10 menit, durasi 2-8 jam",
    rules: "Anestesi regional, dosis maksimal 175 mg. Hindari injeksi intravaskular.",
    warning: "Monitor kardiotoksisitas, dosis total.",
    side: "Kardiotoksisitas, hipotensi, bradikardia",
    kontra: "Alergi bupivakain, gangguan konduksi jantung",
    indication: "Anestesi regional, epidural, blok saraf.",
    image: "images/bupivakain.jpg",
    allergyContra: [],
    comorbidContra: ["heart"],
    medContra: ["anticoagulant"]
  },
  {
    id: "mepivakain",
    name: "Mepivakain",
    dose: 5.0,
    unit: "mg/kg",
    route: "Injeksi lokal",
    type: "local",
    time: "5-10 menit, durasi 2-3 jam",
    rules: "Anestesi lokal, dosis maksimal 400 mg.",
    warning: "Monitor dosis total, tanda toksisitas.",
    side: "Pusing, tinnitus, parestesia, aritmia",
    kontra: "Alergi mepivakain, gangguan konduksi jantung",
    indication: "Anestesi lokal, regional.",
    image: "images/mepivakain.jpg",
    allergyContra: [],
    comorbidContra: ["heart"],
    medContra: ["anticoagulant"]
  },
  {
    id: "ropivakain",
    name: "Ropivakain",
    dose: 3.0,
    unit: "mg/kg",
    route: "Injeksi lokal, epidural",
    type: "local",
    time: "10-20 menit, durasi 2-6 jam",
    rules: "Anestesi regional, dosis maksimal 200 mg.",
    warning: "Monitor kardiotoksisitas, dosis total.",
    side: "Kardiotoksisitas, hipotensi, bradikardia",
    kontra: "Alergi ropivakain, gangguan konduksi jantung",
    indication: "Anestesi regional, epidural, blok saraf.",
    image: "images/ropivakain.jpg",
    allergyContra: [],
    comorbidContra: ["heart"],
    medContra: ["anticoagulant"]
  },
  {
    id: "tetrakain",
    name: "Tetrakain",
    dose: 1.5,
    unit: "mg/kg",
    route: "Injeksi lokal, spinal",
    type: "local",
    time: "5-10 menit, durasi 2-3 jam",
    rules: "Anestesi spinal, dosis maksimal 20 mg.",
    warning: "Monitor dosis total, tanda toksisitas.",
    side: "Pusing, tinnitus, parestesia, aritmia",
    kontra: "Alergi tetrakain, gangguan konduksi jantung",
    indication: "Anestesi spinal, lokal.",
    image: "images/tetrakain.jpg",
    allergyContra: [],
    comorbidContra: ["heart"],
    medContra: ["anticoagulant"]
  },
  {
    id: "prokain",
    name: "Prokain",
    dose: 7.0,
    unit: "mg/kg",
    route: "Injeksi lokal",
    type: "local",
    time: "5-10 menit, durasi 0.5-1 jam",
    rules: "Anestesi lokal, dosis maksimal 500 mg.",
    warning: "Monitor dosis total, tanda toksisitas.",
    side: "Pusing, tinnitus, parestesia, aritmia",
    kontra: "Alergi prokain, gangguan konduksi jantung",
    indication: "Anestesi lokal, blok saraf.",
    image: "images/prokain.jpg",
    allergyContra: [],
    comorbidContra: ["heart"],
    medContra: ["anticoagulant"]
  },
  // ===== PRAOPERASI & SEDASI =====
  {
    id: "diazepam",
    name: "Diazepam",
    dose: 0.1,
    unit: "mg/kg",
    route: "IV/Oral",
    type: "sedasi",
    time: "1-5 menit, durasi 1-2 jam",
    rules: "Premedikasi, sedasi, titrasi sesuai respons.",
    warning: "Monitor depresi pernapasan, sedasi berlebihan.",
    side: "Sedasi berlebihan, depresi pernapasan, amnesia",
    kontra: "Alergi diazepam, gangguan hati berat",
    indication: "Premedikasi, sedasi, anti-kejang.",
    image: "images/diazepam.jpg",
    allergyContra: [],
    comorbidContra: ["liver", "kidney", "asthma"],
    medContra: []
  },
  {
    id: "lorazepam",
    name: "Lorazepam",
    dose: 0.05,
    unit: "mg/kg",
    route: "IV/Oral",
    type: "sedasi",
    time: "1-5 menit, durasi 6-8 jam",
    rules: "Premedikasi, sedasi, titrasi sesuai respons.",
    warning: "Monitor depresi pernapasan, sedasi berlebihan.",
    side: "Sedasi berlebihan, depresi pernapasan, amnesia",
    kontra: "Alergi lorazepam, gangguan hati berat",
    indication: "Premedikasi, sedasi, anti-kejang.",
    image: "images/lorazepam.jpg",
    allergyContra: [],
    comorbidContra: ["liver", "kidney", "asthma"],
    medContra: []
  }
];

// Mapping untuk peringatan
const allergyNames = {
  seafood: "Seafood/Makanan Laut",
  nuts: "Kacang-kacangan",
  milk: "Susu Sapi",
  egg: "Telur",
  soy: "Kedelai"
};

const comorbidNames = {
  hypertension: "Hipertensi",
  diabetes: "Diabetes Melitus",
  asthma: "Asma/PPOK",
  heart: "Penyakit Jantung",
  kidney: "Penyakit Ginjal",
  liver: "Penyakit Hati",
  epilepsy: "Epilepsi",
  thyroid: "Gangguan Tiroid",
  "malignant-hyperthermia": "Riwayat Hipertermia Maligna"
};

const medicationNames = {
  "ace-inhibitor": "ACE Inhibitor/ARB",
  "beta-blocker": "Beta Blocker",
  anticoagulant: "Antikoagulan",
  antidiabetic: "Antidiabetik",
  nsaid: "NSAID",
  steroid: "Kortikosteroid",
  antiepileptic: "Antiepilepsi",
  maoi: "MAOI/Antidepresan",
  aminoglycoside: "Antibiotik Aminoglikosida"
};

// Drug selection logic
let selectedDrugs = [];
document.getElementById('drugGrid').addEventListener('click', function(e) {
  if (e.target.classList.contains('select-btn')) {
    const id = e.target.dataset.id;
    if (!selectedDrugs.includes(id)) {
      selectedDrugs.push(id);
      updateSelectedDrugs();
    }
  }
});

function updateSelectedDrugs() {
  const container = document.getElementById('selectedDrugs');
  container.innerHTML = '';
  if (selectedDrugs.length === 0) {
    container.innerHTML = '<p class="no-selection">Belum ada obat yang dipilih</p>';
    document.getElementById('calculateBtn').disabled = true;
    return;
  }
  selectedDrugs.forEach(id => {
    const drug = drugs.find(d => d.id === id);
    const tag = document.createElement('span');
    tag.className = 'selected-tag';
    tag.innerHTML = `${drug.name} <button data-id="${id}">&times;</button>`;
    container.appendChild(tag);
  });
  document.getElementById('calculateBtn').disabled = false;
}

document.getElementById('selectedDrugs').addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.dataset.id;
    selectedDrugs = selectedDrugs.filter(d => d !== id);
    updateSelectedDrugs();
  }
});

// Fungsi untuk mendapatkan peringatan kontraindikasi
function getContraindicationWarnings(allergies, comorbidities, medications, selectedDrugIds) {
  const warnings = [];
  
  selectedDrugIds.forEach(drugId => {
    const drug = drugs.find(d => d.id === drugId);
    if (!drug) return;
    
    const drugWarnings = [];
    
    // Cek alergi
    if (allergies && allergies.length > 0) {
      allergies.forEach(allergy => {
        if (allergy !== 'none' && drug.allergyContra.includes(allergy)) {
          drugWarnings.push(`⚠️ KONTRAINDIKASI: Pasien memiliki alergi ${allergyNames[allergy]}`);
        }
      });
    }
    
    // Cek penyakit penyerta
    if (comorbidities && comorbidities.length > 0) {
      comorbidities.forEach(comorbid => {
        if (comorbid !== 'none' && drug.comorbidContra.includes(comorbid)) {
          drugWarnings.push(`⚠️ PERHATIAN: Pasien memiliki ${comorbidNames[comorbid]} - gunakan dengan hati-hati atau hindari`);
        }
      });
    }
    
    // Cek obat yang dikonsumsi
    if (medications && medications.length > 0) {
      medications.forEach(med => {
        if (med !== 'none' && drug.medContra.includes(med)) {
          drugWarnings.push(`⚠️ INTERAKSI OBAT: Pasien mengonsumsi ${medicationNames[med]} - risiko interaksi obat`);
        }
      });
    }
    
    if (drugWarnings.length > 0) {
      warnings.push({
        drugName: drug.name,
        warnings: drugWarnings
      });
    }
  });
  
  return warnings;
}

// Fungsi untuk menghitung efektivitas dosis berdasarkan durasi
function calculateEffectiveness(drug, duration) {
  if (!duration) return "Durasi prosedur tidak diinput";
  
  const durationNum = parseFloat(duration);
  let drugDuration = 0;
  
  // Parse durasi obat (ambil nilai tengah dari rentang)
  const timeStr = drug.time.toLowerCase();
  if (timeStr.includes('durasi')) {
    const durationMatch = timeStr.match(/durasi\s+(\d+)-?(\d*)\s*(detik|menit|jam)/);
    if (durationMatch) {
      const val1 = parseInt(durationMatch[1]);
      const val2 = durationMatch[2] ? parseInt(durationMatch[2]) : val1;
      const unit = durationMatch[3];
      
      // Konversi ke menit
      if (unit === 'detik') {
        drugDuration = (val1 + val2) / 2 / 60;
      } else if (unit === 'jam') {
        drugDuration = (val1 + val2) / 2 * 60;
      } else {
        drugDuration = (val1 + val2) / 2;
      }
    }
  }
  
  if (drugDuration === 0) {
    return "Evaluasi individual diperlukan";
  }
  
  const ratio = durationNum / drugDuration;
  
  if (ratio <= 0.5) {
    return `✅ SANGAT EFEKTIF - Durasi obat (${drugDuration.toFixed(0)} menit) jauh lebih lama dari prosedur`;
  } else if (ratio <= 1) {
    return `✅ EFEKTIF - Durasi obat (${drugDuration.toFixed(0)} menit) sesuai untuk prosedur`;
  } else if (ratio <= 1.5) {
    return `⚠️ PERLU MONITORING - Durasi obat (${drugDuration.toFixed(0)} menit) lebih pendek, mungkin perlu dosis tambahan`;
  } else {
    return `❌ KURANG EFEKTIF - Durasi obat (${drugDuration.toFixed(0)} menit) terlalu pendek, pertimbangkan obat lain atau dosis berulang`;
  }
}

// Kalkulasi dosis dan tampilkan hasil
document.getElementById('calculateBtn').addEventListener('click', function() {
  const age = document.getElementById('age').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const gender = document.getElementById('gender').value;
  const asa = document.getElementById('asa').value;
  const procedure = document.getElementById('procedure').value;
  const duration = document.getElementById('duration').value;
  
  // Ambil pilihan alergi, comorbid, dan medications
  const allergySelect = document.getElementById('allergy');
  const allergies = Array.from(allergySelect.selectedOptions).map(opt => opt.value);
  
  const comorbidSelect = document.getElementById('comorbid');
  const comorbidities = Array.from(comorbidSelect.selectedOptions).map(opt => opt.value);
  
  const medSelect = document.getElementById('medications');
  const medications = Array.from(medSelect.selectedOptions).map(opt => opt.value);
  
  if (!age || !weight || !height || !gender || !asa || !procedure || selectedDrugs.length === 0) {
    alert('Lengkapi data pasien dan pilih obat!');
    return;
  }
  
  // Hitung BSA (Body Surface Area)
  const bsa = Math.sqrt((height * weight) / 3600).toFixed(2);
  
  const resultsSection = document.getElementById('resultsSection');
  const resultsContainer = document.getElementById('resultsContainer');
  resultsSection.style.display = 'block';
  resultsContainer.innerHTML = '';
  
  // Ringkasan Pasien
  let allergyText = "Tidak ada";
  if (allergies.length > 0 && !allergies.includes('none')) {
    allergyText = allergies.filter(a => a !== 'none').map(a => allergyNames[a] || a).join(', ');
  }
  
  let comorbidText = "Tidak ada";
  if (comorbidities.length > 0 && !comorbidities.includes('none')) {
    comorbidText = comorbidities.filter(c => c !== 'none').map(c => comorbidNames[c] || c).join(', ');
  }
  
  let medText = "Tidak ada";
  if (medications.length > 0 && !medications.includes('none')) {
    medText = medications.filter(m => m !== 'none').map(m => medicationNames[m] || m).join(', ');
  }
  
  resultsContainer.innerHTML += `
    <div class="patient-summary-card">
      <h3>👤 Ringkasan Pasien</h3>
      <div class="summary-grid">
        <div>Usia: <b>${age} tahun</b></div>
        <div>Berat: <b>${weight} kg</b></div>
        <div>Tinggi: <b>${height} cm</b></div>
        <div>BSA: <b>${bsa} m²</b></div>
        <div>Jenis Kelamin: <b>${gender === 'male' ? 'Laki-laki' : 'Perempuan'}</b></div>
        <div>Status ASA: <b>${asa}</b></div>
        <div>Prosedur: <b>${document.getElementById('procedure').selectedOptions[0].text}</b></div>
        <div>Durasi: <b>${duration ? duration + ' menit' : 'Tidak diinput'}</b></div>
        <div>Kategori Usia: <b>${getAgeCategory(age)}</b></div>
        <div>Alergi: <b>${allergyText}</b></div>
        <div>Penyakit Penyerta: <b>${comorbidText}</b></div>
        <div>Obat yang Dikonsumsi: <b>${medText}</b></div>
      </div>
    </div>
  `;
  
  // Peringatan Kontraindikasi
  const contraWarnings = getContraindicationWarnings(allergies, comorbidities, medications, selectedDrugs);
  
  if (contraWarnings.length > 0) {
    let warningHtml = '<div class="result-card" style="border-left: 6px solid #e74c3c;">';
    warningHtml += '<div class="result-header"><h3>🚨 PERINGATAN KONTRAINDIKASI & INTERAKSI OBAT</h3></div>';
    warningHtml += '<div class="contraindications-section">';
    
    contraWarnings.forEach(item => {
      warningHtml += `<h4 style="color: #e74c3c; margin-top: 20px;">📌 ${item.drugName}</h4><ul>`;
      item.warnings.forEach(w => {
        warningHtml += `<li style="color: #c0392b; font-weight: 600;">${w}</li>`;
      });
      warningHtml += '</ul>';
    });
    
    warningHtml += '</div></div>';
    resultsContainer.innerHTML += warningHtml;
  }
  
  // Hasil perhitungan per obat
  selectedDrugs.forEach(id => {
    const drug = drugs.find(d => d.id === id);
    let totalDose = '';
    
    // Faktor usia
    let ageFactor = 1;
    const ageNum = parseFloat(age);
    if (ageNum < 5) ageFactor = 0.7;
    else if (ageNum < 12) ageFactor = 0.85;
    else if (ageNum < 18) ageFactor = 1;
    else if (ageNum < 60) ageFactor = 1;
    else ageFactor = 0.8;
    
    // Faktor ASA (pasien ASA 3-5 butuh pengurangan dosis)
    let asaFactor = 1;
    const asaNum = parseInt(asa);
    if (asaNum >= 3) asaFactor = 0.75;
    
    const combinedFactor = ageFactor * asaFactor;
    
    if (typeof drug.dose === 'number') {
      if (drug.unit.includes('/m2')) {
        totalDose = (drug.dose * bsa * combinedFactor).toFixed(2) + ' ' + drug.unit.replace('/m2', '');
      } else {
        totalDose = (drug.dose * weight * combinedFactor).toFixed(2) + ' ' + drug.unit.replace('/kg', '');
      }
    } else {
      totalDose = drug.dose + ' ' + drug.unit;
    }
    
    // Hitung efektivitas
    const effectiveness = calculateEffectiveness(drug, duration);
    
    resultsContainer.innerHTML += `
      <div class="result-card">
        <div class="result-header">
          <h3>${drug.name}</h3>
          <span class="age-badge">${drug.time}</span>
        </div>
        
        <div class="dosing-section">
          <div class="dose-card" style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9);">
            <div class="dose-type">💊 Dosis Terhitung</div>
            <div class="dose-value">${totalDose}</div>
            <div class="dose-perkg">Faktor koreksi: Usia (${(ageFactor*100).toFixed(0)}%) × ASA (${(asaFactor*100).toFixed(0)}%)</div>
          </div>
          
          <div class="dose-card">
            <div class="dose-type">📍 Indikasi</div>
            <div class="dose-value" style="font-size: 1.2em;">${drug.indication || '-'}</div>
          </div>
          
          <div class="dose-card">
            <div class="dose-type">🚀 Rute Pemberian</div>
            <div class="dose-value" style="font-size: 1.2em;">${drug.route}</div>
          </div>
          
          <div class="dose-card" style="background: ${effectiveness.includes('✅') ? 'linear-gradient(135deg, #e8f5e9, #c8e6c9)' : effectiveness.includes('⚠️') ? 'linear-gradient(135deg, #fff3cd, #ffe69c)' : 'linear-gradient(135deg, #fdf2f2, #fcc)'};">
            <div class="dose-type">⏱️ Efektivitas Durasi</div>
            <div class="dose-value" style="font-size: 1em; line-height: 1.4;">${effectiveness}</div>
          </div>
        </div>
        
        <div class="admin-section">
          <h4>📋 Aturan Pakai & Administrasi</h4>
          <ul><li>${drug.rules}</li></ul>
        </div>
        
        <div class="warnings-section">
          <h4>⚠️ Peringatan & Perhatian</h4>
          <ul><li>${drug.warning}</li></ul>
        </div>
        
        <div class="sideeffects-section">
          <h4>🔸 Efek Samping</h4>
          <ul><li>${drug.side}</li></ul>
        </div>
        
        <div class="contraindications-section">
          <h4>🚫 Kontraindikasi</h4>
          <ul><li>${drug.kontra}</li></ul>
        </div>
        
        <div class="monitoring-section">
          <h4>🔍 Monitoring yang Diperlukan</h4>
          <ul>
            <li>Tanda vital (TD, nadi, RR, SpO2) setiap 5 menit</li>
            <li>Kesadaran dan respons pasien</li>
            <li>Fungsi pernapasan dan jalan napas</li>
            <li>EKG kontinyu untuk prosedur > 30 menit</li>
            ${drug.type === 'opioid' ? '<li>Level sedasi dan nyeri (VAS/NRS)</li>' : ''}
            ${drug.type === 'muscle-relaxant' ? '<li>TOF (Train of Four) monitoring</li>' : ''}
            ${drug.type === 'local' ? '<li>Tanda toksisitas sistemik anestesi lokal (LAST)</li>' : ''}
          </ul>
        </div>
        
        <div class="drug-image" style="text-align: center; margin-top: 20px;">
          <img src="${drug.image}" alt="${drug.name}" class="drug-thumb" data-name="${drug.name}" style="max-width:150px; max-height:150px; cursor: pointer;">
        </div>
      </div>
    `;
  });
  
  // Tambahkan catatan akhir
  resultsContainer.innerHTML += `
    <div class="result-card" style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); border-left: 6px solid #3498db;">
      <div class="result-header">
        <h3>📝 Catatan Penting Asuhan Keperawatan Anestesi</h3>
      </div>
      <div class="admin-section">
        <h4>Tahap Pre-Operatif</h4>
        <ul>
          <li>Verifikasi identitas pasien dan informed consent</li>
          <li>Cek puasa (dewasa 6-8 jam makanan padat, 2 jam cairan jernih)</li>
          <li>Evaluasi jalan napas (Mallampati, mobilitas leher, buka mulut)</li>
          <li>Pastikan akses IV yang adekuat</li>
          <li>Cek kelengkapan alat resusitasi dan obat emergency</li>
        </ul>
      </div>
      
      <div class="warnings-section">
        <h4>Tahap Intra-Operatif</h4>
        <ul>
          <li>Monitoring ketat tanda vital sesuai standar ASA</li>
          <li>Dokumentasi waktu pemberian obat dan respons pasien</li>
          <li>Siapkan obat antagonis (Naloxone, Flumazenil, Sugammadex)</li>
          <li>Pastikan ventilasi dan oksigenasi adekuat</li>
          <li>Catat intake-output cairan</li>
        </ul>
      </div>
      
      <div class="monitoring-section">
        <h4>Tahap Post-Operatif (Recovery)</h4>
        <ul>
          <li>Evaluasi Aldrete Score sebelum transfer dari recovery room</li>
          <li>Monitor PONV (Post-Operative Nausea Vomiting)</li>
          <li>Manajemen nyeri post-operatif</li>
          <li>Observasi komplikasi: hipotensi, hipoksia, kejang, alergi</li>
          <li>Edukasi pasien dan keluarga tentang perawatan lanjutan</li>
        </ul>
      </div>
      
      <div class="contraindications-section">
        <h4>⚠️ Tanda Bahaya yang Harus Dilaporkan Segera</h4>
        <ul>
          <li>SpO2 < 90% atau penurunan mendadak</li>
          <li>TD sistolik < 90 mmHg atau penurunan > 30% dari baseline</li>
          <li>Bradikardia < 50x/menit atau takikardia > 120x/menit</li>
          <li>Kesadaran menurun atau tidak respons</li>
          <li>Tanda reaksi alergi/anafilaksis</li>
          <li>Rigiditas otot atau hipertermia (> 38.5°C)</li>
        </ul>
      </div>
    </div>
  `;
  
  // Scroll ke hasil
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Inisialisasi drug grid
function renderDrugCards(category = 'all', search = '') {
  const grid = document.getElementById('drugGrid');
  grid.innerHTML = '';
  let drugsFiltered = drugs;
  
  if (category && category !== 'all') {
    drugsFiltered = drugs.filter(d => {
      if (category === 'iv-induction') return d.type === 'iv-induction';
      if (category === 'inhalation') return d.type === 'inhalation';
      if (category === 'opioid') return d.type === 'opioid';
      if (category === 'muscle-relaxant') return d.type === 'muscle-relaxant';
      if (category === 'local') return d.type === 'local';
      if (category === 'sedasi') return d.type === 'sedasi';
      return false;
    });
  }
  
  if (search) {
    drugsFiltered = drugsFiltered.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));
  }
  
  drugsFiltered.forEach(drug => {
    const card = document.createElement('div');
    card.className = 'drug-card';
    const thumbSrc = drug.image ? drug.image : 'images/placeholder_1.svg';
    card.innerHTML = `
      <div class="drug-card-header">
        <img src="${thumbSrc}" data-name="${drug.name.replace(/"/g,'')}" alt="${drug.name}" class="drug-thumb" />
        <div class="drug-card-meta">
          <h3>${drug.name}</h3>
          <div class="drug-routes">Rute: ${drug.route}</div>
          <div class="drug-onset">${drug.time}</div>
        </div>
      </div>
      <button class="select-btn" data-id="${drug.id}">Pilih</button>
    `;
    grid.appendChild(card);
  });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderDrugCards(btn.dataset.category, document.getElementById('drugSearch').value);
  });
});

document.getElementById('drugSearch').addEventListener('input', function(e) {
  const category = document.querySelector('.tab-btn.active').dataset.category;
  renderDrugCards(category, e.target.value);
});

document.addEventListener('DOMContentLoaded', function() {
  renderDrugCards();
  updateSelectedDrugs();
});

function getAgeCategory(age) {
  age = parseFloat(age);
  if (age < 5) return 'Balita';
  if (age < 12) return 'Anak-anak';
  if (age < 18) return 'Remaja';
  if (age < 60) return 'Dewasa';
  return 'Lansia';
}

// ===== Image preview modal handlers =====
document.addEventListener('click', function (e) {
  if (e.target.classList && e.target.classList.contains('drug-thumb')) {
    const src = e.target.getAttribute('src');
    const name = e.target.dataset.name || '';
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('imageModalImg');
    const modalCaption = document.getElementById('imageModalCaption');
    modalImg.src = src;
    modalCaption.textContent = name;
    modal.style.display = 'flex';
  }
});

document.getElementById('imageModal')?.addEventListener('click', function(e) {
  const modal = document.getElementById('imageModal');
  if (!e.target.closest('.image-modal-content') || e.target.id === 'imageModalClose') {
    modal.style.display = 'none';
    document.getElementById('imageModalImg').src = '';
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('imageModal');
    if (modal && modal.style.display === 'flex') {
      modal.style.display = 'none';
      document.getElementById('imageModalImg').src = '';
    }
  }
});
