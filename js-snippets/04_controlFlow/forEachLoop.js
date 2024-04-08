// forEach loop for arrays
const codingArr = ["hitesh", "harry", "kushagra"]
codingArr.forEach( (val) => {
    console.log(val);
});

// passing a function defined outside forEach loop in forEach loop
function print(item){
    console.log(`The name is ${item}`);
}
codingArr.forEach(print);

const numsArr = [33, 55, 77, 99]
numsArr.forEach( (num,idx) => {
    console.log(idx, "-" ,num);
});

const extensions = [
    {
        name : "java",
        fileExt : ".j"
    },
    {
        name : "javascript",
        fileExt : ".js"
    },
    {
        name : "python",
        fileExt : ".py"
    },
    {
        name : "C plus plus",
        fileExt : ".cpp"
    }
]
extensions.forEach( (itemObj) => {
    console.log(`Extension for ${itemObj.name} is ${itemObj.fileExt}`);
});

// forEach loop doesn't return any values do, we can't store it in any variable and can see any output without console.log
// this problem is solves using filter

// Filter
const newNums = [1,2,3,4,5,6,7,8,9]
const greater4 = newNums.filter((val) => {
    return val>4
} )
console.log(greater4);

// Map
const myNumbs = [11,22,33,2,6,7]
// prob: add 10 in each element of myNumbs using 'map'
const numbsAdded = myNumbs.map((n) => {return n+10})
console.log(numbsAdded);

// chaining
const arr1 = [1,2,3,4,5,6,7,8,9]
const newArr1 = arr1.map((num) => { return num*10})
                    .map((num) => { return num+1})
                    .filter((num) => { return num>40})

console.log(newArr1);

// Reduce
const arr2 = [1,2,3,4]

const myTotal = arr2.reduce((acc,currVal) => {
    console.log(`accumulator: ${acc} and current Value: ${currVal}`);
    return acc + currVal
},0)
// 0 is the initial value of accumulator
console.log(myTotal);

const shoppingCart = [
    {
        item: "t-shirt",
        price: 1000
    },
    {
        item: "shirt",
        price: 2000
    },
    {
        item: "hoodie",
        price: 4000
    },
    {
        item: "jeans",
        price: 3000
    }
]

const priceToPay = shoppingCart.reduce((acc,currVal) => {
    return acc + currVal.price
},200)
// here, currVal will be pointing to objects in the shoppingCart array
// initial value of acc = 200 (delivery charge)
console.log(priceToPay);