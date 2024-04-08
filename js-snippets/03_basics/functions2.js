function calculatecartPrize(...num1){
    return num1
}
const itemCart = calculatecartPrize(200,400,600);
console.log(itemCart);

function cartTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];    
    }
    return total
}
const cartTotalAmount = cartTotal(itemCart)
console.log(`Total amount in cart is: ${cartTotalAmount}`);