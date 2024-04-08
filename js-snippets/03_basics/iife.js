// Immediately Invoked Function Expressions (IIFE)
// iife is used to save us from the pollution from global scope

// ()() 1st bracket to write the function and 2nd bracket to execute it
// Named iife
(function chai() {
    console.log('DB Connected');
})();       
// ; is compulsory 

// simple iife i.e iife made using arrow func
((name) => {
    console.log(`DB Connected again, ${name}`);
})('Hitesh');