// 'forof' loop
const arr = [1,7,5,4,9]
for (const i of arr) {
    console.log(i);
}

const greetings = "Hello World"
for (const str of greetings) {
    console.log(`each char is ${str}`);
}

// MAP
//Note: map stores only unique values
const myFirstMap = new Map
myFirstMap.set("IN" , "india") 
myFirstMap.set("USA" , "america") 
myFirstMap.set("FR" , "france") 
myFirstMap.set("IN" , "india") 
console.log(myFirstMap);

for (const [key,value] of myFirstMap) {
    console.log(key, ":-" ,value);
}

// Iterating an Object using loop
// forof loop doesn't work on Objects, forin loop works for Objects

const myObject = {
    js : "javascript",
    cpp : "c plus plus",
    py : "python"
}

for (const key in myObject) {
    console.log(`key is ${key}`);
}
for (const key in myObject) {
    console.log(`value is ${myObject[key]}`);
}