// switch statements
const month = 3
switch (month) {
    case 1:
        console.log(`it is the ${month}st month`);
        break;
    case 2:
        console.log(`it is the ${month}nd month`);
        break;
    case 3:
        console.log(`it is the ${month}rd month`);
        break;    

    default:
        break;
}

const monthName = "february"
switch (monthName) {
    case "january":
        console.log("this month is january");
        break;
    case "february":
        console.log("this month is february");
        break;
    case "march":
        console.log("this month is march");
        break;
    default:
        console.log("I forgot");
        break;
}


// falsy values: false, 0, "", null, undefined, NaN
// truthy values: "0", "false", " ", [], {}, function() {}

// checkingg if an array is empty or not
const userId = []
if(userId.length === 0){
    console.log("array is empty");
}

// checkingg if an object is empty or not
const userData = {}
if(Object.keys(userData).length === 0){
    console.log("object is empty");
}


// Nullish Coalescing Operator (??): null undefined
val1 = 5??10
val2 = null??10
val3 = undefined??10
val4 = null??10??20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// Terniary Operator
// condition ? true : false

const iceCreamPrize = 85
iceCreamPrize >=80 ? console.log("prize is more than 80") : console.log("prize is less than 80");