const score = 100;
console.log(score);

const balance = new Number(200);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 123.456789
console.log(otherNumber.toPrecision(2));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

// *********************** Maths ***********************

console.log(Math.PI);
console.log(Math.round(2.6));
console.log(Math.floor(2.6));
console.log(Math.ceil(2.1));

absValue = Math.abs(-55);
console.log(absValue);

console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));

console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10)); // 0 to 9

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 to 20
