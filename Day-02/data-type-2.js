let num = '10'
let text = "Hem python hem de jargon";
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let randomNum = Math.random()         // 0 ile 0.999 arasında oluşturur
let numBtnZeroAndTen = randomNum * 11;
let numBtnZeroAndhundred = randomNum * 101;
let numBtnZeroAndtwoHundred = randomNum * 255;
let randomroundfloor = Math.floor(numBtnZeroAndTen);
let randomroundfloo2r = Math.floor(numBtnZeroAndhundred);
let randomroundfloo3r = Math.floor(numBtnZeroAndtwoHundred);
let numInt = parseInt(num);// Num string değerini parseınt sayısal değere çevirdi
console.log(numInt);
console.log(text.match("on"));
console.log(text.includes("jargon"));// jargon varmı kontrol ettik
console.log(randomNum);
console.log(randomroundfloor);
console.log(randomroundfloo2r);
console.log(randomroundfloo3r);

