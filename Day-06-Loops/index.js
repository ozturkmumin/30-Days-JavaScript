let i = 0; //while ile 10 a kadar yazdırdık
const numbers = [1, 2, 3, 4, 5];
const Id = "fe3jo1gl124g";
const Id2 = "xkqci4utda1lmbelpkm03rba";
const hexadecimal = "#ee33df";
const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
const CountriesID = [
     ["Albania", "ALB", 7],
     ["Bolivia", "BOL", 7],
     ["Canada", "CAN", 6],
     ["Denmark", "DEN", 7],
     ["Ethiopia", "ETH", 8],
     ["Finland", "FIN", 7],
     ["Germany", "GER", 7],
     ["Hungary", "HUN", 7],
     ["Ireland", "IRE", 7],
     ["Iceland", "ICE", 7],
     ["Japan", "JAP", 5],
     ["Kenya", "KEN", 5],
];
while (i <= 10) {
     console.log(i);
     i++;
}
// do while kullanımı

do {
     console.log(i);
     i++;
} while (i <= 5);

for (let i = 0; i <= 10; i++) {
     console.log(`${i} * ${i} = ${i * i} `); // Her sayıyı kendisi ile çarptık
}

for (let i = 0; i <= 10; i++) {
     console.log(i); //Sayıyı birden 10 a kadar saydırdık
}
for (let i = 0; i < 100; i++) {
     console.log(i);
}

for (const num of numbers) {
     console.log(num * num); //Numbers arrayini çarptık
}
for (let i = 0; i <= 100; i++) {
     console.log(`${i} + ${i} = ${i + i} `); // 0 ile 100 arasındaki sayıları topladık
}

for (let i = 0; i <= Id.length; i++) {
     console.log(Math.random() * `${i}`); // ID arrayinin length uzunluğu adedince rastgele id sayısı oluşturduk
}
for (let i = 0; i <= Id2.length; i++) {
     console.log(Math.floor(Math.random() * `${i}`)); // ID2 Arrayinin length uzunluğu adedince rastgele id sayısı oluşturduk
}

for (let i = 0; i <= hexadecimal.length; i++) {
     var hexadecimal2 = Math.floor(Math.random() * `${i}`); // Hexademical kod renginin length uzunluğunu rastgele numara ile çarptık
}

for (let i = 0; i <= countries.length; i++) {
     var countries2 = Math.floor(Math.random + `${i}`);
     if (countries2 == 0) {
          console.log(countries[0]);
     } else if (countries2 == 1) {
          console.log(countries[1]);
     } else if (countries2 == 2) {
          console.log(countries[2]);
     } else if (countries2 == 3) {
          console.log(countries[3]);
     } else if (countries2 == 4) {
          console.log(countries[4]);
     } else if (countries2 == 5) {
          console.log(countries[5]);
     } else if (countries2 == 6) {
          console.log(countries[6]);
     } else if (countries2 == 7) {
          console.log(countries[7]);
     } else if (countries2 == 8) {
          console.log(countries[8]);
     } else if (countries2 == 9) {
          console.log(countries[9]);
     } else if (countries2 == 10) {
          console.log(countries[10]);
     } else {
          console.log(countries);
     }
}

const newCountries = countries;
console.log(newCountries); // Countries dizisini çektik
console.log(newCountries.sort()); // Diziyi alfabetik olarak sıraladık
var countriesland = countries[5];
countries[8];
console.log(countriesland); // Dizideki land içeren ülkeleri çektik

if (countries.length >= 8) {
     console.log("ETHIOPIA");
}

let countriereverse = countries.reverse(); //Countries arrayini ters çevirdik
console.log(countriereverse);
