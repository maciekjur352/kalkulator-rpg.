const vehicles = {
    "Cygan Angel Pine": {
        "Bobcat": 33000,//body
        "Bravura": 21000,
        'Clover': 17000,//body
        'Clover Wagon': 17000,
        'Manana': 5000, //body
        'Moonbeam': 6700, //body//apk
        'Perennial': 5500, //body//apk
        'Perennial Sedan': 5500,
        'Picador': 15500, //body
        'Previon': 9500,
        'Sadler': 18000,
        'Tampa': 24000, //body
        'Walton': 3500, //body
    },
    "Salon Doherty": {
        "Admiral": 46000,//body//apk
        "Admiral Kombi": 42000,//apk
        'Blista Compact' : 76000,//body
        'Buccaneer' : 33000, 
        'Cadrona': 30000,
        'Celsion': 140000, //apk
        'Club' : 76000 ,//body
        'Elegant' : 38000,//apk
        'Emperor' : 30000,//apk
        'Euros' : 65000, //body
        'Feltzer' : 100000, //body
        'Feltzer GT' : 270000,
        'Fortune' :	38000, //body
        'Fortune 240SX'	: 110000,
        'Glendale' : 35000,//apk
        'Greenwood' : 18000,//apk
        'Journey' : 70000,
        'Majestic' : 34000, //body
        'Manana DTM' : 88000,
        'Merit' : 70000,//apk
        'Nebula' : 38000,//apk
        'Premier' : 63000,//apk
        'Primo' : 26000, //body//apk
        'Primo Kombi' : 26000,//apk
        'Regina' : 37000,//apk
        'Regina Sedan' : 37000,//apk
        'Sabre' : 58000, //body
        'Schafter' : 125000, //body//apk
        'Schafter Kombi' : 125000,//apk
        'Sentinel' : 65000, //body//apk
        'Sentinel Kombi' : 65000,//apk
        'Solair' : 39000,//apk
        'Stallion' : 75000,
        'Stallion GTT' : 93000,
        'Stratum' : 55000,//apk
        'Stanier' : 120000,
        'Sunrise' : 20000,//apk
        'Sunrise Kombi' : 20000,//apk
        'Tahoma' : 60000, //body//apk
        'Vincent' : 28000, //body//apk
        'Vincent Kombi' : 28000,//apk
        'Virgo' : 41000,
        'Washington' : 47000,//apk
        'Washington Kombi' : 47000,//apk
        'Windsor' : 120000,
        'Willard' : 44000,
        'Willard Kombi' : 44000,
    },
    "Salon Downtown": {
        'Alpha' : 110000, //body
        'Banshee' : 560000, //body
        'Buffalo' : 260000, //body
        'Bullet' : 740000, //body
        'Camper' : 140000,
        'Cheetah': 550000, //body
        'Comet' : 370000, //body
        'Elegy' : 270000, //body
        'Flash' : 118000, //body
        'Infernus' : 1700000, 
        'Jester' : 180000, //body
        'Phoenix' : 120000, //body
        'Rancher Long' : 1340000,//apk
        'Sultan' : 350000, //body//apk
        'Sultan Kombi' : 350000,//apk
        'Super GT' : 185000, //body
        'Turismo' : 1620000, //body
        'Uranus' : 70000, 
        'ZR-350' : 280000, //body
    },
    "Salon Exclusive": {
        'Banshee Viper GTS' : 830000, 
        'Bullet GT' : 1100000,
        'Cheetah 76' : 730000, 
        'DeLuxo' : 1000000, 
        'Feroci' : 970000, 
        'Infernus Kakimoto' : 2270000, 
        'Infernus NSX' : 1970000, 
        'Infernus Pandem' : 2500000,
        'Monroe' : 780000, //body
        'Turismo Competizione' : 2100000, 
    },
    'Salon terenowy': {
        'BF Injection' : 78000, 
        'Contander': 70000, //body
        'Huntley' : 132500, //body//apk
        'Landstalker' : 56000,//apk
        'Mesa' : 45000, //body
        'Mesa Rubicon' : 65000, 
        'Patriot' : 750000, //body//apk
        'Rancher' : 55000, //body
        'Sandking' : 240000, //body
        'Yosemite' : 85000, //body
    },
    'Salon dostawczy': {
        'Benson' : 40000, 
        'Boxville' : 52000,//apk
        'Burrito' : 55000,//apk 
        'Mule' : 100000, 
        'Securicar' : 270000,//apk 
        'Speedvan': 120000,//apk
        'Yankee' : 178000, 
    },
    'Salon Lowriderów': {
        'Blade' : 200000, 
        'Broadway' : 185000, 
        'Remington' : 170000, 
        'Savanna' : 220000,//apk 
        'Slamvan' : 180000, 
        'Tornado' : 60000, //body
        'Voodoo' : 150000,
        'Hermes' : 350000,
    },
    // Add other salons
};
const vehicles2 = {
    "Salon motocyklowy": {
        "BF-400": 115000,
        "Faggio": 28000,
        "FCR-900": 185000,
        "FCR-900 RR": 850000,
        "Freeway": 100000,
        "PCJ-600": 125000, 
        "PCJ-600 XR": 600000, 
        "Quadbike": 70000, 
        "Sanchez": 60000, 
        "Wayfarer": 52000,
        "NRG-500": 1020000,
    }
};

const colorMap = {
  "Marchwiowy": "rgb(255, 165, 0)",
  "Pomarańczowy": "rgb(255, 69, 0)",
  "Żółty": "rgb(255, 255, 0)",
  "Limonka": "rgb(147, 246, 0)",
  "Różowy": "rgb(255, 140, 240)",
  "Niebieski": "rgb(0, 0, 255)",
  "Zielony": "rgb(20, 140, 0)",
  "Fioletowy": "rgb(128, 0, 128)",
  "Czerwony": "rgb(255, 0, 0)",
  "Lazurowy": "rgb(0, 127, 255)",
  "Czarny": "rgba(27, 27, 27, 1)",
  "Aqua": "rgb(30, 200, 255)",
  "Miętowy": "rgb(0, 102, 51)",
  "Złoty": "rgb(226, 200, 105)",
  "Kiwi": "rgb(66, 245, 182)",
  "Pistacja": "rgb(0, 255, 148)",
  "Jadeitowy": "rgb(0, 128, 128)",
  "Purpurowy": "rgb(102, 0, 51)",
  "Malinowy": "rgb(235, 1, 101)",
  "Magneta": "rgb(255, 0, 255)",
  "Czekoladowe": "rgb(102, 51, 0)",
  "Ocean": "rgb(51, 102, 204)",
  "Lodowy": "rgb(0, 255, 251)",
  "Herbaciany": "rgb(204, 93, 43)",
  "Cynamonowy": "rgb(157, 91, 3)",
  "Butelkowa Zieleń": "#326647",
  "Ametysowy": "#9966cc",
  "Różany": "#bc8f8f",
  "Very Peri": "#6868ac",
  "Rubinowy": "#78120b",
  "Winogronowy": "#6605b5",
  "Oliwkowy": "#808000",
  "Wiśniowy": "#dc143c",
  "Eozyna": "#c35c6f",
  "Gruszkowy": "#bce271",
  "Luka": "#0a3c63",
  "Xenon": "#6e9bd7",
  "Oldtimer": "#d2c896",
  "LIMITOWANE Lawendowe": "#745387",
  "LIMITOWANE Miodowe": "#d5ad42",
  "LIMITOWANE Kobaltowe": "#0047ab",
  "LIMITOWANE Dyniowe": "#e37e0b",
  "LIMITOWANE Trujące": "#46bd0b",
  "LIMITOWANE Cukierkowy róż": "#fa8072"
};

// --- Funkcja pomocnicza (globalna) do wypełniania selectów ---
function populateOptions(selectElement, options) {
  selectElement.innerHTML = "";
  if (options && typeof options === "object") {
    for (const [key] of Object.entries(options)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = key;

      // Jeśli to select lampy, ustaw kolor
      if (
        selectElement.id === "lampy" ||
        selectElement.id === "lampy2" ||
        selectElement.id === "licznik" ||
        selectElement.id === "licznik2"
      ) {
        if (colorMap[key]) {
          option.style.color = colorMap[key];
        }
      }

      selectElement.appendChild(option);
    }
  }
}

// --- Globalna funkcja pomocnicza do obliczania wartości po zniżce ---
function applyDiscount(base, sliderId, demoId, outputElementId, label) {
  const slider = document.getElementById(sliderId);
  const demo = document.getElementById(demoId);
  if (!slider || !demo) {
    console.warn(`Brakuje elementu: ${!slider ? sliderId : demoId}`);
    return base;
  }
  const discount = (100 - parseInt(demo.textContent)) / 100;
  const discounted = base - base * discount;
  const outputElement = document.getElementById(outputElementId);
  if (outputElement) {
    outputElement.textContent = `${label} ${demo.textContent}%: ${discounted}`;
  }
  return discounted;
}

// --- Inicjalizacja sliderów ---
const sliderConfigs = [
  // Kalkulator auto
  { sliderId: "myRange", outputId: "demo" },
  { sliderId: "myRange2", outputId: "demo2" },
  { sliderId: "myRange3", outputId: "demo3" },
  { sliderId: "myRange4", outputId: "demo4" },
  { sliderId: "myRange5", outputId: "demo5" },
  { sliderId: "myRange6", outputId: "demo6" },
  { sliderId: "myRange7", outputId: "demo7" },
  { sliderId: "myRange8", outputId: "demo8" },
  { sliderId: "myRange13", outputId: "demo13" },
  // Kalkulator bike
  { sliderId: "myRange9", outputId: "demo9" },
  { sliderId: "myRange10", outputId: "demo10" },
  { sliderId: "myRange11", outputId: "demo11" },
  { sliderId: "myRange12", outputId: "demo12" },
  { sliderId: "myRange14", outputId: "demo14" }
];

function initSliders() {
  sliderConfigs.forEach(({ sliderId, outputId }) => {
    const slider = document.getElementById(sliderId);
    const output = document.getElementById(outputId);
    if (slider && output) {
      output.innerHTML = slider.value;
      slider.oninput = function () {
        output.innerHTML = this.value;
      };
    }
  });
}

// --- Obsługa selectów dla kalkulatora auto ---
document.getElementById("salon").addEventListener("change", function() {
  const selectedSalon = this.value;
  const vehicleSelect = document.getElementById("vehicle");
  populateOptions(vehicleSelect, vehicles[selectedSalon]);
  vehicleSelect.dispatchEvent(new Event("change"));
});

document.getElementById("vehicle").addEventListener("change", function() {
  const selectedVehicle = this.value;
  const selectsData = [
    { id: "bodykit", data: tuningPrices[selectedVehicle] },
    { id: "ecu", data: tuningPrices["ecu"] },
    { id: "turbo", data: tuningPrices["turbo"] },
    { id: "lpg", data: tuningPrices["lpg"] },
    { id: "zestaw", data: tuningPrices["zestaw"] },
    { id: "cfi", data: tuningPrices["cfi"] },
    { id: "naped", data: tuningPrices["naped"] },
    { id: "bakPaliwa", data: tuningPrices["bakPaliwa"] },
    { id: "dodatki", data: tuningPrices["dodatki"] },
    { id: "szyby", data: tuningPrices["szyby"] },
    { id: "felgi", data: tuningPrices["felgi"] },
    { id: "lampy", data: tuningPrices["lampy"] },
    { id: "licznik", data: tuningPrices["licznik"] },
    { id: "Po", data: tuningPrices["Po"] },
    { id: "klucz", data: tuningPrices["klucz"] },
    { id: "Felgi", data: tuningPrices["Felgi"] },
    { id: "engine", data: enginePrices[selectedVehicle] },
    { id: "apk", data: ApkPrices[selectedVehicle] },
    { id: "tylnelampy", data: tylnelampyPrices[selectedVehicle] },
    { id: "przednielampy", data: przednielampyPrices[selectedVehicle] },
    { id: "warianty", data: wariantyPrices[selectedVehicle] },
    { id: "spojlery", data: WizualnyPrices["spojlery"] },
    { id: "progi", data: WizualnyPrices["progi"] },
    { id: "Wydechy", data: WizualnyPrices["Wydechy"] },
    { id: "ZderzakiPrzednie", data: WizualnyPrices["ZderzakiPrzednie"] },
    { id: "ZderzakiTylne", data: WizualnyPrices["ZderzakiTylne"] },
    { id: "Dachy", data: WizualnyPrices["Dachy"] },
    { id: "Maski", data: WizualnyPrices["Maski"] },
    { id: "Reflektory", data: WizualnyPrices["Reflektory"] },
    { id: "Wentyle", data: WizualnyPrices["Wentyle"] }
  ];
  
  selectsData.forEach(({ id, data }) => {
    const selectEl = document.getElementById(id);
    if (selectEl && data) {
      populateOptions(selectEl, data);
    }
  });
});

// --- Obsługa selectów dla kalkulatora bike ---
document.getElementById("salon3").addEventListener("change", function() {
  const selectedSalon = this.value;
  const vehicleSelect = document.getElementById("vehicle3");
  populateOptions(vehicleSelect, vehicles2[selectedSalon]);
  vehicleSelect.dispatchEvent(new Event("change"));
});

document.getElementById("vehicle3").addEventListener("change", function() {
  const selectedVehicle = this.value;
  const selectsData = [
    { id: "bodykit2", data: tuningPrices[selectedVehicle] },
    { id: "ecu2", data: tuningPrices["ecu"] },
    { id: "turbo2", data: tuningPrices["turbo"] },
    { id: "zestaw2", data: tuningPrices["zestaw"] },
    { id: "lampy2", data: tuningPrices["lampy"] },
    { id: "licznik2", data: tuningPrices["licznik"] },
    { id: "klucz2", data: tuningPrices["klucz"] },
    { id: "engine2", data: enginePrices[selectedVehicle] }
    // Dodaj kolejne, jeśli są potrzebne
  ];
  selectsData.forEach(({ id, data }) => {
    const selectEl = document.getElementById(id);
    if (selectEl && data) {
      populateOptions(selectEl, data);
    }
  });
});

// --- Funkcja kalkulująca dla kalkulatora auto ---
function calculateTotal(event) {
  if (event) event.preventDefault();

  const salon = document.getElementById("salon").value;
  const vehicle = document.getElementById("vehicle").value;
  const ecu = document.getElementById("ecu").value;
  const turbo = document.getElementById("turbo").value;
  const lpg = document.getElementById("lpg").value;
  const zestaw = document.getElementById("zestaw").value;
  const cfi = document.getElementById("cfi").value;
  const naped = document.getElementById("naped").value;
  const bakPaliwa = document.getElementById("bakPaliwa").value;
  const dodatki = document.getElementById("dodatki").value;
  const szyby = document.getElementById("szyby").value;
  const felgi = document.getElementById("felgi").value;
  const lampy = document.getElementById("lampy").value;
  const licznik = document.getElementById("licznik").value;
  const bodykit = document.getElementById("bodykit").value;
  const Po = document.getElementById("Po").value;
  const klucz = document.getElementById("klucz").value;
  const Felgi = document.getElementById("Felgi").value;
  const engine = document.getElementById("engine").value;
  const apk = document.getElementById("apk").value;
  const tylnelampy = document.getElementById("tylnelampy").value;
  const przednielampy = document.getElementById("przednielampy").value;
  const warianty = document.getElementById("warianty").value;
  const spojler = document.getElementById("spojlery").value;
  const progi = document.getElementById("progi").value;
  const wydechy = document.getElementById("Wydechy").value;
  const zderzakprzedni = document.getElementById("ZderzakiPrzednie").value;
  const zderzaktylni = document.getElementById("ZderzakiTylne").value;
  const dach = document.getElementById("Dachy").value;
  const maski = document.getElementById("Maski").value;
  const reflektory = document.getElementById("Reflektory").value;
  const wentyle = document.getElementById("Wentyle").value;

  // Checkboxy
  const dodatki2Checked = document.getElementById("dodatki2").checked;
  const dodatki3Checked = document.getElementById("dodatki3").checked;
  const dodatki4Checked = document.getElementById("dodatki4").checked;
  const dodatki5Checked = document.getElementById("dodatki5").checked;
  const dodatki6Checked = document.getElementById("dodatki6").checked;

  let total2 = tuningPrices["ecu"][ecu] +
               tuningPrices["turbo"][turbo] +
               tuningPrices["naped"][naped] +
               tuningPrices["bakPaliwa"][bakPaliwa] +
               tuningPrices["dodatki"][dodatki] +
               tuningPrices["klucz"][klucz];

  let total3 = vehicles[salon][vehicle];

  if (ApkPrices[vehicle] && ApkPrices[vehicle][apk]) {
    total2 += ApkPrices[vehicle][apk];
  }
  if (dodatki2Checked) total2 += tuningPrices["dodatki2"]["radio2"];
  if (dodatki3Checked) total2 += tuningPrices["dodatki3"]["CB-radio"];
  if (dodatki4Checked) total2 += tuningPrices["dodatki4"]["Ogranicznik"];
  if (dodatki5Checked) total2 += tuningPrices["dodatki5"]["Wykrywacz fotoradarów"];
  if (dodatki6Checked) total2 += tuningPrices["dodatki6"]["System ABS"];

  const total_znizka = applyDiscount(total2, "myRange2", "demo2", "znizka", "Wartość Mechaniczny");
  const total_znizka2 = applyDiscount(tuningPrices[vehicle][bodykit], "myRange", "demo", "znizka2", "Wartość BodyKit");
  const total_znizka4 = applyDiscount(tuningPrices["cfi"][cfi], "myRange3", "demo3", "znizka3", "Wartość CFI");

  let total6 = tuningPrices["szyby"][szyby] +
               tuningPrices["felgi"][felgi] +
               tuningPrices["Po"][Po] +
               tuningPrices["Felgi"][Felgi] +
               WizualnyPrices["Wentyle"][wentyle] +
               WizualnyPrices["Reflektory"][reflektory] +
               WizualnyPrices["Maski"][maski] +
               WizualnyPrices["Dachy"][dach] +
               WizualnyPrices["ZderzakiTylne"][zderzaktylni] +
               WizualnyPrices["ZderzakiPrzednie"][zderzakprzedni] +
               WizualnyPrices["Wydechy"][wydechy] +
               WizualnyPrices["progi"][progi] +
               WizualnyPrices["spojlery"][spojler];

  if (tylnelampyPrices[vehicle] && tylnelampyPrices[vehicle][tylnelampy])
    total6 += tylnelampyPrices[vehicle][tylnelampy];
  if (przednielampyPrices[vehicle] && przednielampyPrices[vehicle][przednielampy])
    total6 += przednielampyPrices[vehicle][przednielampy];
  if (wariantyPrices[vehicle] && wariantyPrices[vehicle][warianty])
    total6 += wariantyPrices[vehicle][warianty];

  const total_znizka5 = applyDiscount(total6, "myRange4", "demo4", "znizka5", "Wartość Wizu");
  const total_znizka6 = applyDiscount(tuningPrices["lampy"][lampy], "myRange5", "demo5", "znizka6", "Wartość Lampy");
  const total_znizka7 = applyDiscount(tuningPrices["licznik"][licznik], "myRange6", "demo6", "znizka7", "Wartość Licznik");

  let total9 = 0;
  if (enginePrices[vehicle] && enginePrices[vehicle][engine]) {
    total9 += enginePrices[vehicle][engine];
  }
  const total_znizka8 = applyDiscount(total9, "myRange7", "demo7", "znizka8", "Wartość Silnik");

  let total10 = tuningPrices["lpg"][lpg];
  const total_znizka9 = applyDiscount(total10, "myRange8", "demo8", "znizka9", "Wartość LPG");

  let total16 = tuningPrices["zestaw"][zestaw];
  const total_znizka14 = applyDiscount(total16, "myRange13", "demo13", "znizka13", "Wartość Zestawu");

  const total_wynik = total_znizka2 + total3 + total_znizka4 + total_znizka +
                        total_znizka5 + total_znizka6 + total_znizka7 +
                        total_znizka8 + total_znizka9 + total_znizka14;
  document.getElementById("znizka4").textContent = `Całkowity koszt: ${total_wynik}`;
}

// --- Funkcja kalkulująca dla kalkulatora bike ---
function calculateTotal2(event) {
  if (event) event.preventDefault();

  const salon3 = document.getElementById("salon3").value;
  const vehicle3 = document.getElementById("vehicle3").value;
  const ecu2 = document.getElementById("ecu2").value;
  const turbo2 = document.getElementById("turbo2").value;
  const zestaw2 = document.getElementById("zestaw2").value;
  const lampy = document.getElementById("lampy2").value;
  const licznik = document.getElementById("licznik2").value;
  const bodykit = document.getElementById("bodykit2").value;
  const klucz = document.getElementById("klucz2").value;
  const engine = document.getElementById("engine2").value;
  
  const dodatki2Checked = document.getElementById("dodatki7").checked;
  const dodatki3Checked = document.getElementById("dodatki8").checked;
  const dodatki4Checked = document.getElementById("dodatki9").checked;
  const dodatki5Checked = document.getElementById("dodatki10").checked;

  // Bodykit
  let total11 = tuningPrices[vehicle3][bodykit];
  const total_znizka10 = applyDiscount(total11, "myRange9", "demo9", "znizka10", "Wartość Bodykit");

  // Mechaniczny
  let total12 = tuningPrices["ecu"][ecu2] +
                tuningPrices["turbo"][turbo2] +
                tuningPrices["klucz"][klucz];
  if (dodatki2Checked) total12 += tuningPrices["dodatki2"]["radio2"];
  if (dodatki3Checked) total12 += tuningPrices["dodatki3"]["CB-radio"];
  if (dodatki4Checked) total12 += tuningPrices["dodatki4"]["Ogranicznik"];
  if (dodatki5Checked) total12 += tuningPrices["dodatki5"]["Wykrywacz fotoradarów"];

  const total_znizka11 = applyDiscount(total12, "myRange10", "demo10", "znizka12", "Wartość mechaniczny");

  // Wizu
  let total13 = tuningPrices["lampy"][lampy] + tuningPrices["licznik"][licznik];
  const total_znizka12 = applyDiscount(total13, "myRange11", "demo11", "znizka16", "Wartość Wizu");

  // Pojazd podstawowy
  let total15 = vehicles2[salon3][vehicle3];

  // Silnik bike
  let total14 = 0;
  if (enginePrices[vehicle3] && enginePrices[vehicle3][engine]) {
    total14 += enginePrices[vehicle3][engine];
  }
  const total_znizka13 = applyDiscount(total14, "myRange12", "demo12", "znizka14", "Wartość Silnik");

  // Zestaw bike
  let total17 = tuningPrices["zestaw2"][zestaw2];
  const total_znizka15 = applyDiscount(total17, "myRange14", "demo14", "znizka17", "Wartość Zestawu");

  const total_wynik2 = total_znizka10 + total_znizka11 + total_znizka12 +
                         total_znizka13 + total_znizka15 + total15;
  document.getElementById("znizka11").textContent = `Całkowity koszt: ${total_wynik2}`;
}
// Funkcja wyszukiwania opcji wewnątrz wybranych selectów
function searchOption() {
  const searchValue = document.getElementById('search').value.toLowerCase();
  const selects = ['Reflektory', 'progi', 'Wydechy', 'Wentyle', 'Maski', 'Dachy', 'spojlery', 'ZderzakiPrzednie','ZderzakiTylne' ,  'warianty'];
  let found = false;
  for (let selectId of selects) {
    const selectElement = document.getElementById(selectId);
    if (selectElement) {
      for (let option of selectElement.options) {
        if (option.text.toLowerCase().includes(searchValue)) {
          selectElement.value = option.value;
          alert(`Znaleziono w ${selectId} i wybrano opcję ${option.text}`);
          found = true;
          break;
        }
      }
    }
    if (found) break;
  }
  if (!found) {
    alert("Nie znaleziono pasującej opcji.");
  }
}

// --- Inicjalizacja po załadowaniu DOM ---
document.addEventListener("DOMContentLoaded", function() {
  initSliders();
  // Upewnij się, że wartości sliderów są ustawione przed wywołaniem kalkulacji
  calculateTotal2();
});