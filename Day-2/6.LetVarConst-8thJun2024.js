// 1. let - Block Scope (can be re-declarable)
{                                                   // Block Scope
    let x = "Let-Block_Scope";                      // let - Block Scope 
    console.log(x);                                 // Let-Block_Scope (within the Block)
}
// console.log(x);                                     // Error - (x is of Block Scope can not access it outside the block)

// Example for Re-declaration
let m = "Let-Globally_Declared";
{
    let m = "Let-Re_Declared_Value";                // Re-declarable   
    console.log(m);                                 // Let-Re_Declared_Value (within the block)
}
console.log(m);                                     // Let-Globally_Declared (from Global Scope)


// 2. var - Global Scope or Function Scope (acts accordingly)

// Global Scope Example
{                                                   // Start of Block Scope
    var a = "Var-Global_Scope declared within the Block_Scope";             // var - Global Scope 
}                                                   // End of Block Scope
console.log(a);                                     // Var-Global_Scope declared within the Block_Scope (a is of Global Scope)

// Function Scope Example

function display(){
    var y = "Var-Function_Scope";                  // Function Scope
    console.log(y);                                // Var-Function_Scope (Within the Function)
}
display();
// console.log(y);                                  // Error (y - is of Function Scope can not access it outside the fucntion)


// 3. const - Block Scope (can not be re-declarable)

// Example for Block Scope
{
    const n = "Const-Block_Scope";
    console.log(n);                                 // Const-Block_Scope (within the Block Scope)
}
// console.log(n);                                     // Error - Can not access outside the Block Scope

// Example for connot be Re-declarable
const k = "Const-First_declaration";
console.log(k);                                     // Const-First_declaration (First Declaration)
k = "Cannot_be_Re_Declarable";
// console.log(k);                                     // TypeError: Assignment to constant variable. - (can not re-declare const value)