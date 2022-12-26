//Filter , map , forEach ve reduce methodlarının arasındaki fark
// Filter : Dizi içerisinde istediğimiz koşullara uyan elemanları filtereler geri döndürür .
// map :  Bir dizi elemanını yinelemek ve dizi öğelerini değiştirmek . callback fonksiyonu ile birlikte element index yeni bir dizi parametre olarak alır
//forEach : Bir dizi elemanlarını sırasıyla gezer . "element", "index" ve dizinin kendisi ile callback fonksiyonunu parametre olarak alabilir
// reduce : Reduce fonksiyonu bir callback fonksiyonu gerektirir . Dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür
// every : Tüm elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Booelan türünde geri dönüş yapar
// some : Bazı elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Boolean türünde geri dönüş yapar.
// find : İstenilen tablolardan ilk öğeyi geri yürütüyor.
// findIndex : verilerin elde ettiği ilk işlemin indeks değerini verir.
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
     { product: "banana", price: 3 },
     { product: "mango", price: 6 },
     { product: "potato", price: " " },
     { product: "avocado", price: 8 },
     { product: "coffee", price: 10 },
     { product: "tea", price: "" },
];

countries.forEach((element) => console.log(element)); // forEach methodu ile countries dizisini consola yazdırdık
names.forEach((element) => console.log(element)); //forEach methodu ile names dizisini consola yazdırdık
numbers.forEach((element) => console.log(element)); //forEach methodu ile numbers dizisini consola  yazdırdık
const toUpperCase = (names.map = names.map((name) => name.toUpperCase())); //map methodu ile name dizisini büyük harfe çevirdik
const tolenght = (countries.map = countries.map((countrie) => countrie.length)); // map methodu ile countries dizisinin uzunluğunu aldık
const square = (numbers.map = numbers.map((number) => number * number)); // map methodu ile sayıların karesini aldık
const productprice = (products.map = products.map((product) => product.price > 2)); // product ürününün birim olarak 2 den büyük olanları yazdırıp boolean değer döndürdük
const countrieslenght = (countries.filter = countries.filter((countrie) => countrie.length > 6)); // Filter methodu ile 6 karakterden büyük ülkeleri yazdırdık
const haveprice = (products.filter = products.filter((product) => product.length > 0));
const sum = numbers.reduce((acc, cur) => acc + cur, 0); // reduce methodu ile numbersın içerisindeki tüm sayıları topladık
const countriecount = countries.reduce((acc, cur) => acc + cur); // reduce methodu ile countries içersindeki ülkeleri birleştirdik
const somecontrol = numbers.some((b) => b === true);
const countrie = countries.find((name) => (name.length = 6)); // countries arrayinin içerisinde ki ilk 6 harfli kelimeyi bulduks
const countriesindex = countries.findIndex((name) => (name.length = 6));
const pricefind = products.reduce((acc, cur) => acc + cur);
const getFirstTenCountries = () => {
     var newcountry = ["Finland", "Denmark", "Sweden", "Norway", "Iceland", "Ireland", "Türkiye", "Espana", "Egypt", "Italy"];
     return newcountry;
};

const countriesspeak = [
     ({ country: "English", count: 91 },
     { country: "French", count: 45 },
     { country: "Arabic", count: 25 },
     { country: "Spanish", count: 24 },
     { country: "Russian", count: 9 },
     { country: "Portuguese", count: 9 },
     { country: "Dutch", count: 8 },
     { country: "German", count: 7 },
     { country: "Chinese", count: 5 },
     { country: "Swahili", count: 4 }),
];
const countryspoken = (countriesspeak.map = countriesspeak.map((countriesspok) => countriesspok.count > 6));
console.log(toUpperCase);
console.log(tolenght);
console.log(square);
console.log(productprice);
console.log(countrieslenght);
console.log(haveprice);
console.log(sum);
console.log(countriecount);
console.log(somecontrol);
console.log(countrie);
console.log(countriesindex);
console.log(getFirstTenCountries());
console.log(countryspoken);
