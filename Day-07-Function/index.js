function generateFullName(firstname = "Mümin", lastName = "Öztürk") {
     let space = " ";
     let fullName = firstname + space + lastName;
     return fullName;
}
function addNumbers(numOne, numTwo) {
     let sum = numOne + numTwo;
     console.log(sum);
}
function rectangle(uzunluk, genislik) {
     let alan = uzunluk * genislik;
     console.log(alan);
}
function cevre(uzunluk, genislik) {
     let cevre = 2 * (uzunluk + genislik);
     console.log(cevre);
}
function rectangularprism(uzunluk, genislik, yukseklik) {
     let hacim = uzunluk * genislik * yukseklik;
     console.log(hacim);
}
function circle(pi, cevre, cevre2) {
     let circlecalculate = pi * cevre * cevre2;
     console.log(circlecalculate);
}
function CircumOfCircle(number, pi, circle) {
     let CircumOfCircle = number * pi * circle;
     console.log(CircumOfCircle);
}
function substance(mass, volume) {
     let substance = mass / volume;
     console.log(substance);
}
function speed(distance, time) {
     let spidi = distance / time;
     console.log(spidi);
}
function person(substance, gravity) {
     let personal = substance * gravity;
     console.log(personal);
}
function VKI(weight, m2) {
     let VKI = weight / m2;
     console.log(VKI);
}
function showDateTime() {
     const d = new Date();
     console.log(d);
}
function reversefunc(A, B, C, D, E) {
     let reversef = [A, B, C, D, E];
     console.log(reversef.reverse());
}
function addItem() {}
console.log(generateFullName());
console.log(generateFullName("Alperen", "Bayraktar")); // functionu manuel olarak parametrelerini değiştirdik
addNumbers(10, 20); // addNumbers fonksiyonuna iki parametre belirledik bunları topladık
rectangle(15, 30); // Dikdörtgen alan hesaplaması yaptık fonksiyon yardımı ile
cevre(15, 30); // Dikdörtgen çevre hesabı
rectangularprism(10, 25, 25); // Dikdörtgenler prizması hesapladık
circle(Math.PI, 3, 4); //Dairenin alan hesabı
CircumOfCircle(2, Math.PI, 5); //Dairenin çevre hesabı
substance(15, 3); // Yoğunluk hesapladık
speed(150, 5); // Hız hesapladık
person(50 * 9, 80); // Ağırlık hesapladık ikinci parametre yer çekimi
VKI(64, 1.7 * 2); //Vücut kitle indeksini hesapladık boyu 1.7 olarak kiloyu 75 olarak belirledim
showDateTime(); // Function ile date objesini çektik
reversefunc(1, 2, 3, 4, 5); // ters çeviren fonksiyon yazdık
