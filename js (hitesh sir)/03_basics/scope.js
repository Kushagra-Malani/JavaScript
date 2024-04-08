// Scope is just curly braces i.e {}
// Global Scope is everything outside curly braces

let a = 300
console.log("OUTER: ",a);
if(true){
    let a = 10
    console.log("INNER: ",a);
}

console.log("OUTER: ",a);