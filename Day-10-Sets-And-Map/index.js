const companies = new Set();
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c); // set methodu ile a ve b arrayini birleştirdik

console.log(C);
console.log(A.delete(4));
B.clear();
console.log(B); // Seti temizledik
