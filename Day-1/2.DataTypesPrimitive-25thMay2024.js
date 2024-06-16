let name;               // JS assigns 'undefined' as a value
console.log(name);

let n = null;           // means n doesn't actually have a value
console.log(n);

// Primitive DataTypes
let a = 90;                          // number
let b = "Akhil";                     // string
let c = true;                        // boolean
let d = undefined;                   // undefined
let e = null;                        // object
let f = BigInt(827396129369123);     // bigint - for very large numbers
let g = Symbol("Hello..!!!");        // symbol

console.log(typeof a,typeof b, typeof c,typeof d,typeof e,typeof f,typeof g);   // typeof used to determine which actually the datatype is
