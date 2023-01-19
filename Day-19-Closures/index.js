function outerFunction() {
     let count = 0;
     function plusOne() {
          count++;
          return count;
     }
     function minusOne() {
          count--;
          return count;
     }

     return {
          plusOne: plusOne(),
          minusOne: minusOne(),
     };
}
const innerFuncs = outerFunction();

console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);
//JavaScript, bir dış işlev içinde yazma işlevine izin verir. İstediğimiz kadar iç fonksiyon yazabiliriz. İç işlev, dış işlevin değişkenlerine erişirse buna kapatma denir.

function closerFunc() {
     /* javascript ile bir işlevli fonksiyon yazdık */
     let count = 0;
     function countup() {
          count++;
          return count;
     }
     return countup;
}
console.log(closerFunc());

function closerFunc2() {
     let counter = 1;
     function countplus() {
          counter++;
          return counter;
     }
     /* javascript iki işlevli fonksiyon yazdık */
     function countminus() {
          counter--;
          return counter;
     }
     return {
          countminus: countminus(),
          countplus: countplus(),
     };
}
