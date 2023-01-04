/*[]: Bir dizi karakter
[ac], a veya b veya c anlamına gelir
[az], a'dan z'ye herhangi bir harf anlamına gelir
[AZ], A'dan Z'ye herhangi bir karakter anlamına gelir
[0-3], 0 veya 1 veya 2 veya 3 anlamına gelir
[0-9], 0 ila 9 arasındaki herhangi bir sayı anlamına gelir
[A-Za-z0-9] a'dan z'ye, A'dan Z'ye, 0'dan 9'a kadar olan herhangi bir karakter
\: özel karakterlerden kaçmak için kullanılır
\d demek: dizenin rakamları (0-9 arası sayılar) içerdiği yerle eşleşir
\D demek: dizenin rakam içermediği eşleşme
. : yeni satır karakteri(\n) dışında herhangi bir karakter
^: ile başlar
r'^substring' örneğin r'^love', aşk kelimesiyle başlayan bir cümle
r'[^abc] a değil, b değil, c değil anlamına gelir.
$: ile biter
r'substring$' örneğin r'love$', cümle love kelimesiyle biter
*: sıfır veya daha fazla kez
r'[a]*' isteğe bağlı anlamına gelir veya birçok kez olabilir.
+: bir veya daha fazla kez
r'[a]+', en az bir veya daha fazla kez anlamına gelir
?: sıfır veya bir kez
r'[a]?' sıfır kez veya bir kez anlamına gelir
\b: kelime sınırlayıcı, bir kelimenin başı veya sonu ile eşleşir
{3}: Tam olarak 3 karakter
{3,}: En az 3 karakter
{3,8}: 3 ila 8 karakter
|: Ya veya
r'apple|muz', bir elma veya bir muz anlamına gelir
(): Yakala ve grupla    REGEXP YÖNTEMLERİ*/

points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8];
distance = 12;
const toearnmoney = "Aylık maaşından 4000 euro, yıllık 10000 euro ikramiye, ayda 5500 euro online kurs kazanıyor.";
const txt =
     "Bazı parçacıkların yatay x ekseni üzerindeki konumu -12, -4, -3 ve -1 negatif yönde, 0 orijinde, 4 ve 8 pozitif yönde. Bu sayıları çıkarın ve en uzak iki parçacık arasındaki mesafeyi bulun.";
const pattern = /[^A-Za-z,. ]+/g;
const patterntwo = /\d/g;
const matches = toearnmoney.match(pattern);
const match = txt.match(patterntwo);

console.log(matches, match);

function is_valid_variable(str) {
     console.log(/^[a-z]+$/i.test(str));
} // Değişken olarak hangilerinin kabul olabileceğini yazdırdık
is_valid_variable("first_name"); // True
is_valid_variable("first-name"); // False
is_valid_variable("1first_name"); //False
is_valid_variable("firstname"); // True

let date = "2023-01-04";

let regex = /(?<years>\d{4})-(?<month>\d{2})/;
let str = "2022-01";
let [, year, month] = regex.exec(str);
console.log(year); // 2022
console.log(month); // 01
console.log(regex); // regex oluşturarak bunları isimlendirdik

//Bir kelimeyi aramak için: /word/
let brownfox = "The quick brown fox jumps over the lazy dog.";
let result = str.match(/quick/);
console.log(result);
//İfadeyi tam eşleştirme için: /^word$/
let quicks = "quick";
let result2 = quicks.match(/^quick$/);
console.log(result2);
//Bir karakter grubunu aramak için: /[abc]/
let lazy = "The quick brown fox jumps over the lazy dog.";
let result3 = lazy.match(/[abc]/g);
console.log(result3);

//Bir karakter grubunun olmamasını aramak için: /[^abc]/
let fox = "The quick brown fox jumps over the lazy dog.";
let result4 = fox.match(/[^abc]/g);
console.log(result4);

//Bir kelimeyi birden fazla defa aramak için: /word{2,}/
let jump = "The quick brown fox jumps over the lazy dog.";
let result5 = jump.match(/oo{2,}/g);
console.log(result5);
//İsteğe bağlı karakterleri aramak için: /word?/
let over = "The quick brown fox jumps over the lazy dog.";
let result6 = over.match(/o?ver/g);
console.log(result6);
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
let cleanSentence = sentence.replace(/[%$@&;]/g, "");
console.log(cleanSentence); // sentence içerisinde ki karakterleri temizleyip consola yazdırdık.

//Eğer cümlede yalnızca harfleri tutmak istiyorsanız
let cleanSentence2 = sentence.replace(/[^a-zA-Z]/g, "");

//Eğer cümlede yalnızca sayıları tutmak istiyorsanız
let cleanSentence3 = sentence.replace(/[^0-9]/g, "");
