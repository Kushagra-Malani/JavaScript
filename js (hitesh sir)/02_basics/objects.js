const mySym = Symbol("key1")    // mySym is a symbol

const jsUser = {    // object literals
    name: "Kushagara",
    age: 21,
    [mySym]: "myKey1",  // using a symbol inside an object
    location: "Hyderabad",
    email: "kush@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday","Saturday"]
}

console.log((jsUser.email));
console.log((jsUser["email"])); // another way to access object, this is a better way
console.log(jsUser[mySym]); // use this syntax only to print a symbol from an object

jsUser.email = "kush@google.com"
console.log(jsUser.email);

// Adding functions in an object
jsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello ${this.name} the JS User`); 
    // 'this' keyword is used to reference the same object (here: jsUser)
}
console.log(jsUser.greetingTwo());