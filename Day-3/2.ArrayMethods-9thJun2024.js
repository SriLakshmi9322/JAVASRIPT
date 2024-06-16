// Array Methods

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

// push method - To add extra value at the end of the Array
players.push({name:'Sharma',score:80});
console.log(players);                                       // Value will be pushed into the Array
// Output :-
// [
//     { name: 'Priyansh', score: 70 },
//     { name: 'Akhil', score: 60 },
//     { name: 'Arjun', score: 90 },
//     { name: 'Rahul', score: 40 },
//     { name: 'Abhi', score: 75 },
//     { name: 'Krish', score: 100 },
//     { name: 'Sharma', score: 80 }
// ]

// pop method - To delete element from the end
players.pop()
console.log(players);                                          // Last element will be removed from the Array
// Output :-
// [
//     { name: 'Priyansh', score: 70 },
//     { name: 'Akhil', score: 60 },
//     { name: 'Arjun', score: 90 },
//     { name: 'Rahul', score: 40 },
//     { name: 'Abhi', score: 75 },
//     { name: 'Krish', score: 100 },
// ]

// unshift method - To add element at the starting index of the Array
players.unshift({name:'Prashant',score:35});
console.log(players);                                          // Value will be added to the Array at the start (players[0])
// Output :-
// [
//     { name: 'Prashant', score: 35 },
//     { name: 'Priyansh', score: 70 },
//     { name: 'Akhil', score: 60 },
//     { name: 'Arjun', score: 90 },
//     { name: 'Rahul', score: 40 },
//     { name: 'Abhi', score: 75 },
//     { name: 'Krish', score: 100 }
// ]

// shift method - To delete element at the start (1st element)
players.shift();
console.log(players);                                          // First element from the Players will be removed
// Output :-
// [
//     { name: 'Priyansh', score: 70 },
//     { name: 'Akhil', score: 60 },
//     { name: 'Arjun', score: 90 },
//     { name: 'Rahul', score: 40 },
//     { name: 'Abhi', score: 75 },
//     { name: 'Krish', score: 100 }
// ]

// slice method - To slice a particular part of the Array using index values, in order to create another small Array from the cuurent Array
// For taking some portion of our current Array we can use slice method
let arrSliced = players.slice(0,3);                                          // 0 - starting of the index (inclusive) & 3 - end of the index (exclusive)
console.log(arrSliced);
// Output :-
// [
//     { name: 'Priyansh', score: 70 },
//     { name: 'Akhil', score: 60 },
//     { name: 'Arjun', score: 90 }
// ]

// Using Negative index values for slicing
let arrSliced1 = players.slice(-2);                                          // -2 - Starting index from the second last element to the 1st element will be taken (ending index is optional)
console.log(arrSliced1);
// Output :-
// [ { name: 'Abhi', score: 75 }, { name: 'Krish', score: 100 } ]

let arrSliced2 = players.slice(-2,-3);                                          // [] - Ending index should not be -ve so it returns []
console.log(arrSliced2);
// Output :-
// []

// splice method - To remove some portion of an Array by placing another element in it's place
// splice method consists of 3 arguements - 1. Starting index 2. Deletion Count 3. Inserting element at deleted part
players.splice(1,3,{name:'SriLakshmi',score:100});
console.log(players);
// Output :-
// [
//     { name: 'Priyansh', score: 70 },
//     { name: 'SriLakshmi', score: 100 },
//     { name: 'Abhi', score: 75 },
//     { name: 'Krish', score: 100 }
// ]

// reverse method - To reverser an Array
console.log(players.reverse());
// Output :-
// [
//     { name: 'Krish', score: 100 },
//     { name: 'Abhi', score: 75 },
//     { name: 'SriLakshmi', score: 100 },
//     { name: 'Priyansh', score: 70 }
// ]

// some & every
// some - one of the element  should satisfy the specified condition
let info =  players.some(function(obj){
    if(obj.score > 90){
        return true;
    }else{
        return false;
    }
});                                                             // returns true if one of the element from the Array satisfies the condition
console.log(info);                                              // true

// every - All elements in the Array  should satisfy the specified condition
let info1 =  players.every(function(obj){
    if(obj.score > 90){
        return true;
    }else{
        return false;
    }
});                                                             // returns true if all elements from the Array satisfies the condition
console.log(info1);                                             // false

// find method - To find an element based on a specific condition (first element that satisfies the condition will be the output) if no element found it will display "undefined"
let found = players.find(function(obj){
    return obj.score == 75;
});
console.log(found);                                             // { name: 'Abhi', score: 75 }

// sort method - To sort the Array elements considering elements as characters
let arr = [5,3,1,0,7,4,1,6,7];
console.log(arr.sort());                                        // sorts the array considering elements as characters
// Output :-                                           
// [
//     0, 1, 1, 3, 4,
//     5, 6, 7, 7
// ]

let arr1 = [5,3,1,0,7,4,1,6,7,1000,20,30,40,1111];
console.log(arr1.sort());                                       // sorts according to character wise sorting
// Output :-
// [
//     0, 1,  1, 1000, 1111,
//    20, 3, 30,    4,   40,
//     5, 6,  7,    7
// ]

// To solve this problem and to sort the integer values we use lambda function 
// for ascending order
console.log(arr1.sort(function(a,b){                           // function(a,b) is the lambda function & a,b are the first & second elements from the Array
    return a-b;                                                // a-b => for ascending order
}));        
// Output :-
// [
//     0,  1,    1,    3,  4,
//     5,  6,    7,    7, 20,
//    30, 40, 1000, 1111
// ]

// for descending order
console.log(arr1.sort(function(a,b){
    return b-a;                                                // b-a => for descending order
}));   
// Output :-
// [
//     1111, 1000, 40, 30, 20,
//        7,    7,  6,  5,  4,
//        3,    1,  1,  0
// ] 

// Based on Score  sorting Players Array
players.sort(function(obj1,obj2){
    return obj1.score - obj2.score;                             // for ascending order
});
console.log(players);
// Output :-
// [
//     { name: 'Priyansh', score: 70 },
//     { name: 'Abhi', score: 75 },
//     { name: 'Krish', score: 100 },
//     { name: 'SriLakshmi', score: 100 }
// ]

// delete - To delete random element from the Array
delete players[2];                                              // deletes the index-2 value from the Array and leave the index-2 as an empty space
console.log(players);
// Output :-
// [
//     { name: 'Priyansh', score: 70 },
//     { name: 'Abhi', score: 75 },
//     <1 empty item>,
//     { name: 'SriLakshmi', score: 100 }
// ]