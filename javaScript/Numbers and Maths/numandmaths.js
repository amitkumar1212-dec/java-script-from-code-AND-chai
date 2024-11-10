const score = 400;
console.log(score);

const balance = new Number(100);// Number is now fixed as 100 as Number is datatypes

console.log(balance);

console.log(balance.toString().length);// strings property to show length of var

console.log(balance.toFixed(2)); //strings property to fixed the balance like 100.00

console.log(balance.toPrecision(3))//strings property to show precision and automatically defined the round numbers

const otherNum = 636.09876

console.log(otherNum.toPrecision(3))

let hundreds = 10000;
console.log(hundreds.toLocaleString());



// =======================================MATHS=========================================================================

// =======================================MATHS=========================================================================


//==========================Random=====================
console.log(Math.random());
console.log(Math.random()*10 +1);
console.log(Math.floor(Math.random()*10 )+1);

const min = 10;
const max = 30;
console.log(Math.floor(Math.random()*(max-min +1)) +min);