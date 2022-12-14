// Arraylar üzerine çalıştığım gün
var newArray = ["Elma", "Armut", "Şeftali", "Muz", "Nar"];
var mixedDataTypes = ["Alperen", "Mümin", "Göktuğ", "Bakican", "Emre", "Emin"];
var ItCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle ",
  "Amazon",
];
// Companies değişkeninin içerisinde ki küçük harfli kelimeleri büyük harfe çevirdik .
result = ItCompanies[0];
var result = "FACEBOOK";
result1 = ItCompanies[1];
var result1 = "GOOGLE";
result2 = ItCompanies[2];
var result2 = "MICROSOFT";
result3 = ItCompanies[3];
var result3 = "APPLE";
result4 = ItCompanies[4];
var result4 = "IBM";
result5 = ItCompanies[5];
var result5 = "ORACLE";
result5 = ItCompanies[6];
var result6 = "AMAZON";

console.log(newArray.length); //Arrayın uzunluğunu bulma methodu
console.log(newArray[2]); // Şeftaliye eriştik
console.log(mixedDataTypes); //MixedDataTypes a eriştik
console.log(ItCompanies);
console.log(ItCompanies.length); // Şirketlerin sayısını yazdırdık
console.log(ItCompanies[(0, 3, 6)]); // Dizinin içindeki üç elemanı yazdırdık
console.log(result, result1, result2, result3, result4, result5, result6);
console.log(ItCompanies.join("  ")); // Join methodu ile arrayi bir cümle gibi yazdırdık

if (ItCompanies === "Facebook") {
  console.log("Facebook");
} else {
  console.log("Not Found");
}
console.log(ItCompanies.indexOf("o")); // O elemanının dizide olup olmadığına baktık
newArray.sort(); //new array dizisini kendi içerisinde sıraladık
newArray.reverse(); //new array dizisini kendi ters çevirdik
console.log(newArray);
console.log(ItCompanies.slice(0, 3)); // Slice methodu ile ilk üç şirketi aldık
console.log(ItCompanies.slice(4, 7));
console.log(ItCompanies.slice(3, 4)); // Dizinin ortadaki elemanını çekmiş olduk
console.log(ItCompanies.shift()); // Dizinin başındaki elemanı kaldırdık
console.log(ItCompanies.splice(2, 2)); //Splice methodu ile ortada ki iki elemanı kaldırdık
ItCompanies.pop(); // Dizinin sonundaki elemanı siler
ItCompanies.splice(); // Dizideki tüm elemanları kaldırır
console.log(ItCompanies);
