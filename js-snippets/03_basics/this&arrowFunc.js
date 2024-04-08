const user = {
    username: "hitesh",
    price: 999,
    welcomeMsg: function() {
        console.log(`${this.username}, welcome to website`); // this keyword is used only in objects, if we use 'this' inside a function nothing will happen
        console.log(this);
    }
}
user.welcomeMsg()
user.username = "sam"
user.welcomeMsg()

function chai(){
    let username1 = "hitesh"
    console.log(this.username1); // if we use 'this' inside a function nothing will happen and we will see 'undefined' as output
}
chai()

// Arrow Functions
const coffee = () => {
    let username1 = "ananya"
    console.log(this.username1);
}
coffee()

// impicite way to write arrow func
const addTwoNums = (num1, num2) => (num1 + num2) 
// when we are using () we don't neet to write return keyword but when we use {} we need to write return keyword
console.log(addTwoNums(3,4));

// making objects using arrow functions
const greenTea = () => ({username: "hitesh", price: 999})

console.log(greenTea());