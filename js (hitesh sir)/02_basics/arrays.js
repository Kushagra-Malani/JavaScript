const myarr = [0,1,2,3,4,5]

myarr.push(7)
myarr.push(8)
myarr.pop()
console.log(myarr);

myarr.unshift(-1)
myarr.unshift(-2)
console.log(myarr);

myarr.shift()
myarr.shift()
console.log(myarr);

console.log(myarr.includes(2));
console.log(myarr.indexOf(2));

// Slice
console.log("Before slice: ",myarr);

const newArr1 = myarr.slice(1,3)
console.log(newArr1);

console.log("After slice: ",myarr);

// Splice
console.log("Before splice: ",myarr);

const newArr2 = myarr.splice(1,3)
console.log(newArr2);

console.log("After splice: ",myarr);