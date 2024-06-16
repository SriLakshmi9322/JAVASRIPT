// Scoping - Till where the access is available.
// 2 types - 1. Global Scope 2. Block Scope

// 1. Global Scope - A variable inside Global Scope can be accessible throughout the entire JS file.
// 2. Block Scope {...} - A variable inside the Block Scope can only be accesible within the curly brases {...} E.g., for, if-else, switch, function etc.,

let a = 10;                         // Global Scope
function display(){
    let b = 20;
    console.log(a);                 // 10 (Global Scope)
    console.log(b);                 // 20 (Block Scope - which is inside the {...})
}
display();                          // Function Calling.
console.log(a);                     // 10 (Global Scope)
// console.log(b);                     // Error - (b is declared in a Block Scope. We can not access it outside the Block Scope).



let x = 10;
if(true){
    let y = 30;
    console.log(x);                 // 10 (Global Scope)
    console.log(y);                 // 30 (Block Scope - which already inside the {...})
}
// console.log(y);                     // Error - (y is of Block Scope - So we can not access it outside the Scope).
console.log(x);                     // 10 (Global Scope).