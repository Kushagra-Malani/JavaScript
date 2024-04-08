// object inside an object example:
const regularUser = {
    email: "hitesh@hotmail.com",
    name: {
        realName: {
            firstName: "Kushagra",
            lastName: "Malani" 
        },
        petName: "petite"
    }
}

console.log(regularUser.email);
console.log(regularUser.name.realName.firstName);
console.log(regularUser.name.petName);

// Combining two different objects
const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "c",
    4: "d",
}
const obj3 = Object.assign({}, obj1, obj2) //'{}' are used to just avoid any errors nothing much imp 
console.log(obj3);

// We would not be using the above method to combine objects, we will use the spread operator
const obj4 = {...obj1,...obj2}
console.log(obj4);

// Array of objects:
const usersData = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "yo@gmail.com"
    },
    {
        id: 3,
        email: "ceecee@gmail.com"
    }
]
console.log(usersData[0].email);

const tinderUser = {
    id: 101,
    status: "single",
    age: 25
}
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('age'));