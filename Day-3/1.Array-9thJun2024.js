// Array - Data Structure => Storing the data in a structural manner is known as Data Structure.
// Array is a data structure for storing & organizing our data
// In JS, we need not to specify any size for the Array(No limit).
// Heterogeneous in nature (Any Data type values can be stored)
// Zero-based indexing

let arr = [1,2,3,4,5,"SriLakshmi",true,{name:'SriLakshmi'},BigInt(1234567890)];     // Array Creation
console.log(arr);                                                                   // Array Reading
// Output :-
// [
//     1,
//     2,
//     3,
//     4,
//     5,
//     'SriLakshmi',
//     true,
//     { name: 'SriLakshmi' },
//     1234567890n
// ]



// Leader Board (Example)
let players = [                                                                     // Array of Objects
    {name:"Priyansh",score:70},                                                     // index 0
    {name:"Akhil",score:60},                                                        // index 1
    {name:"Arjun",score:90},                                                        // index 2
    {name:"Rahul",score:40},                                                        // index 3
    {name:"Abhi",score:75},                                                         // index 4
    {name:"Krish",score:100}                                                        // index 5
];

console.log(players);
// Output :-
// [
//     { name: 'Priyansh', score: 70 },
//     { name: 'Akhil', score: 60 },
//     { name: 'Arjun', score: 90 },
//     { name: 'Rahul', score: 40 },
//     { name: 'Abhi', score: 75 },
//     { name: 'Krish', score: 100 }
// ]

// For a particular value from the Array we can use index values
console.log(players[2]);                                                            // { name: 'Arjun', score: 90 }

// To find the length of the Array
console.log(players.length);                                                        // 6

// Accesing values from the Array using for loop
for(let i = 0; i < players.length; i++){
    console.log(players[i]);
}
// Output :-
// { name: 'Priyansh', score: 70 }
// { name: 'Akhil', score: 60 }
// { name: 'Arjun', score: 90 }
// { name: 'Rahul', score: 40 }
// { name: 'Abhi', score: 75 }
// { name: 'Krish', score: 100 }