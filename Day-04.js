let EnterYourAge = 30;
let MyAge = 23;
let YourAge = 26;
let YourandmeAge = YourAge - MyAge;
let a = 4;
let b = 3;
let pointfirst = 100;
let pointSecond = 89;
let pointThird = 69;
let pointFourth = 59;
let pointfiveth = 49;
const autumn = ["Eylül", "Ekim", "Kasım"];
const winter = ["Aralık", "Ocak", "Şubat"];
const spring = ["Mart", "Nisan", "Mayıs"];
const summer = ["Haziran ", "Temmuz", "Ağustos"];
const Days = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];
const January = 31;
const Year = 365;
if (EnterYourAge > 18) {
  console.log("18 Yaşından büyük olduğunuz için kabul edildiniz.");
} else {
  console.log("18 Yaşından küçük olduğunuz için kabul edilmediniz.");
}
if (YourAge > MyAge) {
  console.log(`Aramızda ki yaş farkı ${YourandmeAge}`);
}

if (a > b) {
  console.log("  4 is greater than 3");
} else {
  console.log("A , B den büyük değildir");
}

if (a % 2 == 0) {
  console.log("A bir çift sayıdır ");
} else {
  console.log("A çift sayı değildir");
}

if (pointfirst >= 80) {
  console.log("A Çok iyi");
} else if (pointSecond >= 70) {
  console.log("B İyi");
} else if (pointThird >= 60) {
  console.log("C Orta");
} else if (pointFourth >= 50) {
  console.log("D Düşük");
} else {
  console.log("ÇOK KÖTÜ");
}

if (autumn[(0, 1, 2)] === "Eylül") {
  console.log("Sonbahar Geldi");
} else if (winter[(0, 1, 2)] === "Aralık") {
  console.log("Kış Geldi");
} else if (spring[(0, 1, 2)] === "Mart") {
  console.log("Bahar Geldi");
} else {
  console.log("Yaz Geldi");
}

if (Days[(6, 5)] === "Cumartesi") {
  console.log("Haftasonu");
} else {
  console.log("Çalışma günü");
}
if (January === 31) {
  console.log("January has 31 days");
} else {
  console.log(`January does not have 31 days`);
}
if (Year === 365) {
  console.log(` Has ${Year} days   `);
}
