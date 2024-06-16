// Objects - Everything in JavaScript behaves like an Object
// For example :-
// for a student we have properties like - name, rollno, age, marks etc., we can create variables for a student
// variables - let name = "SriLakshmi"; let rollNo = 99; let age = 21; let marks = 70;
// for 'n' no. of students it becomes difficult to create those properties individually
// then we have Array concept to overcome this difficulty.
// array = ["Srilakshmi",99,21,70]
// It becomes difficult to understand that which value belongs to which property.
// To overcome this Difficulty we have the concept "Object".
// As Object stores the data in the form of Key-Value Pair it becomes more easy for understanding.
// object = {name:"SriLakshmi", rollNo:99, age:21, marks: 70}
// Object can also have functions, Array and also heterogeneous values also allowed
// But Object does not allow duplicate values

// Creating an Object
let student = {
    name : "SriLakshmi",
    age : 21,
    rollNo : 99,
    marks : 70,
    getDetails : function(){
        console.log("Details");
    },
    arr : [9,90,30,"Hello","String"]
};

// To Read data from the Object
console.log(student);
// Output :-
// {
//     name: 'SriLakshmi',
//     age: 21,
//     rollNo: 99,
//     marks: 70,
//     getDetails: [Function: getDetails],
//     arr: [ 9, 90, 30, 'Hello', 'String' ]
// }

// To fetch data from the Object we have 2 ways - 1. '.' notation 2. '[]' notation
// 1. '.' notation - when we know the key we use '.' notation
console.log(student.age);                               // 21
console.log(student.getDetails);                        // [Function: getDetails]
// To print the function value we need to use parantheses () after the key getDetails
console.log(student.getDetails());                      // Details undefined
console.log(student.arr[3]);                            // Hello

// 2. '[]' notation - when we don't know the key then we can use the '[]' notation
console.log(student['age']);                            // 21

let key = 'age';
console.log(student[key]);                              // 21

// To Upadate new value to the Object
student.age = 22;                                       // updates permanently
console.log(student.age);                               // 22 

// To insert extra property into the Object
student.isMarried = false;                              // new property will be inserted into the Object
console.log(student);
// Output :-
// {
//     name: 'SriLakshmi',
//     age: 22,
//     rollNo: 99,
//     marks: 70,
//     getDetails: [Function: getDetails],
//     arr: [ 9, 90, 30, 'Hello', 'String' ],
//     isMarried: false
// }

// To delete a key-value pair from the Object
delete student.arr;                                     // removes arr from the Object
console.log(student);
// Output :-
// {
//     name: 'SriLakshmi',
//     age: 22,
//     rollNo: 99,
//     marks: 70,
//     getDetails: [Function: getDetails],
//     isMarried: false
// }

// To iterate an Object using for-in loop
for(let obj in student){
    console.log(obj);                                   // keys will be displayed
}
// Output :-
// name
// age
// rollNo
// marks
// getDetails
// isMarried

// To get the values using loop
for(let obj in student){
    console.log(obj+": "+student[obj]);
}
// // Output :-
// name: SriLakshmi
// age: 22
// rollNo: 99
// marks: 70
// getDetails: function(){
//         console.log("Details");
//     }
// isMarried: false

// Nested Object - we can also create an Object inside an Object
let std = {
    name : "SriLakshmi",
    age : 21,
    rollNo : 99,
    marks : 70,
    getDetails : function(){
        console.log("Details");
    },
    arr : [9,90,30,"Hello","String"],
    address : {                                     // inner Object
        landmark : "paris",
        pincode : 123456,
        houseNo : 420,
        phoneNo : 9012345678
    }
};
// To access the details of inner Object
console.log(std.address.landmark);                  // paris

let stdt = {                                        // Object 1
    name : "SriLakshmi",
    age : 21,
    rollNo : 99,
    marks : 70,
    getDetails : function(){
        console.log("Details");
    },
    arr : [9,90,30,"Hello","String"],
    address : {                                     // Object 2
        landmark : "paris",
        pincode : 123456,
        houseNo : 420,
        phoneNo : 9012345678,
        gaurdian : {                                // Object 3
            name : "Sharma",
            phoneNo : 9231456708,
            age : 50
        }
    }
};                                                  // This nesting can be unlimited - we can add as much as we want
// To access Object 3 values
console.log(stdt.address.gaurdian.name);            // Sharma


// Real life usecase : Flipcart, Amazon etc.,
// These Shopping websites consists of huge no. of of products.
// Each product contains no. of properties such as product name, price, offer, exchange, delivery.
// If it is a smart phone then it will also have the color, RAM, Battery Capacity etc.,
// In this kind of situations we can use 'Objects'.