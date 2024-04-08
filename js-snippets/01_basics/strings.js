const myName = "Kushagra"
const repoCount = 1; 
console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')
console.log(gameName[0]);   // string has key - value pairs
console.log(gameName.length);
console.log(gameName.toUpperCase());    // original string is not changed
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newStr = gameName.substring(0,4)
console.log(newStr);

const anotherStr = gameName.slice(-8,4)
console.log(anotherStr);

const newStr2 = "   hitesh   "
console.log(newStr2);
console.log(newStr2.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

// creating an array from the string, by splitting in terms of '-'
console.log(gameName.split('-'));