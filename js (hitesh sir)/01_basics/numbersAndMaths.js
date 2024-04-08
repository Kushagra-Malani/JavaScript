const score = 400
console.log(score);

const balance = new Number(400)
console.log(balance);

// both score and balance are numbers and there is no difference in them

console.log(balance.toString());
console.log(balance.toString().length);

const otherNum = 123.9875
console.log(otherNum.toFixed(2));
console.log(otherNum.toPrecision(5));

// *******MATH*******

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(8.3));
console.log(Math.floor(7.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random()); // gives values between 0 to 1
// If we want values between some range then follow the below formula
const min = 20
const max = 30

console.log(Math.floor((Math.random()*(max - min + 1))+min));


