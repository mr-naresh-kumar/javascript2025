const score  =400
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // 1000.00

const ohterNumber = 123.8966

console.log(ohterNumber.toPrecision(3)); // 


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-US')); 


//////////   Maths +++++++++++

console.log(Math.PI); // 3.141592653589793

console.log(Math);

console.log(Math.random()); // 0.123456789
console.log(Math.random() * 10)// 0.123456789 * 10
console.log(Math.floor(Math.random() * 10)+1); // 0.123456789

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 to 20


