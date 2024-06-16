// Operators
// 1. Arithmetic Operators

let a = 2 + 3;            // Addition
let b = 3 - 2;            // Subtraction
let c = 6 / 3;            // Division
let d = 4 * 7;            // Multiplication
let e = 10 % 5;           // Modulus - Remainder
let f = 2 ** 3;           // Exponential - Power Operator

console.log(a,b,c,d,e,f); // 5 1 2 28 0 8

// 2. Assignment Operators

let h = 10;
console.log(h += 9);
let i = 10;
console.log(i -= 9);
let j = 10;
console.log(j /= 4);
let k = 10;
console.log(k %= 8);
let l = 10;
console.log(l *= 8);
let m = 10;
console.log(m **= 4);

// 3. Comparison Operators - returns either 'true' or 'false'

console.log(3 == 3);                // Equality Operator - just compares the value
console.log(3 != 3);
console.log(3 > 3);
console.log(3 < 3);
console.log(3 >= 3);
console.log(3 <= 3);
console.log(3 === 3);               // Strictly Equality Operator - compares both value & datatype

// Difference b/w Equality and Strictly Equality operators

console.log(3 == '3');              // true - same value
console.log(3 === '3');             // false - same value but different datatype

// 4. Logical Operators

console.log(3 == 3 || 4 > 5);       // or - true 
console.log(4 > 5 || 3 == 3);       // or - true
console.log(4 > 5 && 4 < 5);        // and - false
console.log(! true);                // not - false