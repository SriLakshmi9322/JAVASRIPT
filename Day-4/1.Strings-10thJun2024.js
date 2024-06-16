// Strings - Combination of Characters
// In-built Data type in JS can be declared in 3 ways
let s1 = 'SriLakshmi Tiramsetti';                   // 1. Using Single Quotations
let s2 = "SriLakshmi Tiramsetti";                   // 2. Using Double Quotations
let s3 = `SriLakshmi Tiramsetti`;                   // 3. Using Back-Tick Symbol
console.log(s1,s2,s3);                              // SriLakshmi Tiramsetti SriLakshmi Tiramsetti SriLakshmi Tiramsetti

// We can iterate over a string 
for(let i = 0; i < s3.length; i++){                 // length is a string property which is used to calculate the no. of characters a string consists of
    console.log(s3[i]);
}
// Output :-
// S
// r
// i
// L
// a
// k
// s
// h
// m
// i

// T
// i
// r
// a
// m
// s
// e
// t
// t
// i

// To take a specific character from the string we have 2 ways - 1. By index value 2. By using charAt() method
console.log(s3[3]);                                 // L (By using index value)
console.log(s3.charAt(3));                          // L (By using charAt() method)

// Multi-line String
// for string in diff lines we can add '\' at the end of each line
let s4 = "My name is Anuj. I live in India.\
 I am a teacher and I love teaching. I teach HTML, CSS,\
 JavaScript, React, Redux, Node.js, Python, Data Analysis\
and D3.js for anyone who is interested to learn.\
In the end of 2019, I was thinking to expand my\
teaching and to reach to global audience and\
 I started a Python challenge from Nov 20-Dec19\
It was one of the most rewarding and inspiring experience\
Now, We are in 2020.I am enjoying preparing the\
30DaysOfJavaScript Challenge and I hope you\
 are enjoying too.";
console.log(s4);
// Output :-
// My name is Anuj. I live in India. I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, Node.js, Python, Data Analysisand D3.js for anyone who is interested to learn.In the end of 2019, I was thinking to expand myteaching and to reach to global audience and I started a Python challenge from Nov 20-Dec19It was one of the most rewarding and inspiring experienceNow, We are in 2020.I am enjoying preparing the30DaysOfJavaScript Challenge and I hope you are enjoying too.

// String Concatenation - we have 2 ways 1. using '+' 2. using Template Literals
// 1. Using '+' Operator
let fname = "SriLakshmi";
let lname = "Tiramsetti";
let fullname = fname + lname;
console.log(fullname);                                  // SriLakshmiTiramsetti - (No Space)
// Not recommended as '+' operator can give us unexpected results

// 2. Using Template Literals (Highly recommended)
let fullname1 = `${fname} ${lname}`;
console.log(fullname1);                                 // SriLakshmi Tiramsetti

let firstname = "SriLakshmi";
let lastname = "Tiramsetti";
let age = 21;
let fullname2 = `My name is ${fname} ${lname}. My age is ${age}.`;  // Except ${...} remaining content is called Template String
console.log(fullname2);                                 // My name is SriLakshmiTiramsetti. My age is 21.