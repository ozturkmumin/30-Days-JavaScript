const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const addarray = text.split(","); // Cümleyi arraya çevirdik
console.log(addarray.length);
console.log(addarray);
shoppingCart.unshift("Meat"); //Arrayin başına yeni bir kelime ekledik
shoppingCart.push("Sugar"); //Arrayin sonuna yeni bir kelime ekledik
shoppingCart.pop(); //POP methodu ile listenin sonundaki elemanı silmiş olduk
if (webTechs === "SASSS") {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.unshift("SASSS");
  console.log(webTechs); // Webtech arrayinin içinde sass varmı diye kontrol ettik olmadığı için else ile unshift metodu yardımı ile sass'ı diziye ekledik
}
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack); // concat methodu ile iki diziyi birleştirdik
ages.sort(); // Sort methodu sayesinde yaş arrayini düzenledik
console.log(ages);
console.log(ages[5] / 2); //Ortanca yaşı bulup ikiye böldük
const agesTotal =
  ages[0] +
  ages[1] +
  ages[2] +
  ages[3] +
  ages[4] +
  ages[5] +
  ages[6] +
  ages[7] +
  ages[8] +
  ages[9];

console.log(agesTotal / 9); // Yukarıda arrayin içindeki yaşları toplayıp kişi saysına böldük ve yaş ortalamasını vermiş oldu
console.log(ages[0], ages[9]); // Min Maks yaş aralığını yazdık
