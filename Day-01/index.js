let challenge = "30 Days Of Javascript";
let social = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let because = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır";
console.log(challenge.substring(0, 7));
console.log(challenge.includes("script")); //yöntemini kullanarak string'in Script kelimesini içerip içermediğini kontrol edin
console.log(challenge.split(" ")); //console.log(string.split(' '))  // bu kısımda boşluktan böl dediğimiz için 4 elementli array oluştu -> ["30", "Days", "Of", "JavaScript"]
console.log(challenge.split()); // challenge dosyasını arraya çevirdi
console.log(social.split(",")); //Virgülden sonra böldüm arrayi
console.log(challenge.replace("Javascript", "Phyton")); // birinci öğe değişecek obje ikincisi değişen
console.log(challenge.charAt(15)); // Dizinin içindeki 15.karakteri söyledi
console.log(challenge.charCodeAt("j")); // Karakter kodunu bulduk
console.log(challenge.indexOf("a")); //indexof ile a harfinin ilk kullanıldığı yeri bulduk
console.log(challenge.lastIndexOf("a deneme")); // last indexof ile a nın enson kullanılan yeri bulunuyor
console.log(because.indexOf("çünkü")); // Çünkü kelimesinin ilk geçtiği yeri bulduk
console.log(because.lastIndexOf("çünkü")); //Çünkü kelimesinin geçtiği son yer
console.log(because.search("çünkü")); // Çünkü kelimesinin ilk geçtiği yeri bulduk
console.log(because.trim()); // Baştaki ve sondaki boşlukları kaldırmak
console.log(challenge.startsWith("")); //Boolean değer döndürür
console.log(challenge.endsWith("")); // sonucu doğru yaptık
console.log(challenge.match("a")); // match ile a ları bulduk
console.log(challenge.concat("Days", "Of", "JavaScript")); // concat ile birleştirdik
console.log(challenge.repeat(2)); //30 günde javascripti iki kez yazdırdı
console.log(
     "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
{
}
