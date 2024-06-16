// Type Casting -  Conversion of data types from one to another. There are 2 types
// 1. Implicit Type Conversion or Type Coercion - Interpreter will handle it automatically

console.log(35 + 'Hello');              // 35Hello - for different data types '+' symbol acts as a concatenate operator 
console.log(35 + '25');                 // 3525
console.log(typeof(35 + '25'));         // string

console.log(35 * '25');                 // 805 - Converts '25' into number and performs operation
console.log(35 * 'Hello');              // Nan - 'Hello' is not a number
console.log(35 == '35');                // true - Converts '35' into a number and compares




// 2. Explicit Type Conversion or Type casting - Explicitly Converting data types using bultin methods

let a = 10;
let s = String(a);
console.log(typeof s);                  // string