// IIFE stands for Immediately invoked Function Expression
// The reason for using the function are we do not need to call these functions.
// As soon as we declare the functions we'll call the function which means
// The function will be invoked immediate after the function declaration itself
// That's the reason we call these functions as IIFE

// IIFE Sample Function
(function sum(){
    console.log("Function is Invoked.");
}());                                           // () - Function calling immediate after declaration
// Output :-      Function is Invoked.

// Function name is not at all necessary for daclaration
(function(){
    console.log("IIFE without Function name.");
})();
// Output :-      IIFE without Function name.

// Can be converted into an Arrow function also But we need to call at the end of function declaration
(() => {
    console.log("Arrow Function.");
})();
// Output :-      Arrow Function.

// Benefit of Using IIFE :
var a = 10;                             // Global Scope
function hello(){
    a = 20;                             // 10 is permanently replaced by 20
    console.log(a);
}
hello();                                // 20
console.log(a);                         // 20
// 'a' value in the Global Scope will be replaced by 'a' value in the Block Scope

// To solve this above problem we can use this 
var a = 10;                             // Global Scope
function hello(){
    let a = 20;                         // 20 will be used within this function scope
    console.log(a);
}
hello();                                // 20
console.log(a);                         // 10

// Also using IIFE we can easily solve the above problem
var a = 10;
(function (a){
    a = 50;
    console.log(a);
})(a);                                  // 50 - Function Calling
console.log(a);                         // 10 - 'a' value from the global scope is not changed by the 'a' value in the Function Scope 

// When we are dealing with multiple files, importing & exporting of different files, also whwen you don't know the name of the files, Global variable names as well
// In that particular situation or scenario IIFE is going to be very useful & helpful
// Using IIFE the Global Varibles will not be manipulated.