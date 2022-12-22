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
const addItem = (arr) => {
     const newArr = [];
     for (const element of arr) {
          newArr.unshift(element);
     }
     return newArr;
};
const removeItem = () => {
     const newArr = ["First", "Second", "Thirth", "Fourth"];
     const removeitem = newArr.shift();
     return removeitem;
};
const sumofnumber = (num1, num2, num3, num4) => {
     const calculate = num1 + num2 + num3 + num4;
     return calculate;
};
const sumOfOdds = (number1, number2, number3) => {
     if ((number1, number2, number3 % 2 == 0)) {
          const calculate = "Null";
          return calculate;
     } else {
          const calculate = number1 + number2 + number3;
          return calculate;
     }
};
const sumOfOfEven = (number1, number2, number3) => {
     if ((number1, number2, number3 % 2 == 0)) {
          const calculate = number1 + number2 + number3;
          return calculate;
     } else {
          const calculate = "Null";
          return calculate;
     }
};
const macAddress = () => {
     let macArray = [];

     for (let index = 0; index < 13; index++) {
          const randomNumber = Math.random() * 100;

          macArray.push(Math.floor(randomNumber));
     }
     return macArray; //
};
const UserIp = () => {
     let Userrandom = [];

     for (let index = 0; index < 10; index++) {
          const randomuser = Math.random() * 10;
          Userrandom.push(Math.floor(randomuser));
     }
     return Userrandom;
};
const arrayOfHexaColors = () => {
     let HexaColor = ["#"];

     for (let index = 0; index < 3; index++) {
          const randomuser = Math.random() * 100;
          HexaColor.push(Math.floor(randomuser));
     }
     return HexaColor;
};
const arrayOfRgbColors = () => {
     let RgbColor = [];

     for (let index = 0; index < 3; index++) {
          const randomuser = Math.random() * 100;
          RgbColor.push(Math.floor(randomuser));
          if (randomuser <= 9) {
               randomuser + 100;
               return randomuser;
          }
     }
     return RgbColor;
};
const isEmpty = () => {
     const isHaveEmpty = [1, 2, 3, 45];
     console.log(isHaveEmpty.indexOf(3));
};
const reverseCountries = () => {
     const country = ["Turkey", "Finland", "Germany ", "Egypt"];
     return country;
};
const copy = reverseCountries().reverse();

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
console.log(addItem("DENEME").reverse()); //Deneme yazısını Additem fonksiyonuna ekledik
console.log(removeItem()); //Başında ki first yazısını kaldırdık
console.log(sumofnumber(3, 4, 5, 6, 7)); // Toplama functionu yazdık
console.log(sumOfOdds(1, 2, 3)); // Tek sayı ise çarp işlemi
console.log(sumOfOfEven(6, 4, 2)); //Çift sayı ise çarp işlemi
console.log(macAddress()); //Macc addresi oluşturduk rastgele
console.log(UserIp()); // User Ip oluşturduk rastgele
console.log(arrayOfHexaColors().join()); // Rastgele hexadecimal renk kodu oluşturduk
console.log(arrayOfRgbColors()); //Rastgele rgb renk kodu oluşturduk
console.log(isEmpty()); // isEmpty fonksiyonu ile bir sayıyı aradık
console.log(copy); // Reversecountry fonksiyonunu kopyalayıp ters çevirdik
