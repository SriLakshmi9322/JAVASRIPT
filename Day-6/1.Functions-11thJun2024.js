// Functions - write once use as many times as you want by calling the function.
// No Duplicacy

// Function Declaration
function addToCart(product){
    console.log(`Product ${product} is added in the cart.`);
};
addToCart("One Plus");                          // Function Calling
// Product One Plus is added in the cart.
addToCart("TShirt");                            // Product TShirt is added in the cart.
addToCart("Pen");                               // Product Pen is added in the cart.


// Types of Functions :
// 1. Simple Function
// Function Declaration
function addToCart(product){
    console.log(`Product ${product} is added in the cart.`);
};
addToCart("One Plus");                          // Function Calling
// Product One Plus is added in the cart.


// 2. Anonymous Function - Who don't have any name
let add = function(){                           // No Function Name
    console.log(5+9);
}
// To call the function
console.log(add);                               // [Function: add]
// To display the content inside the Function
add();                                          // 14


// 3. Higher Order Functions (HOF) - It is a function that takes another function as an arguement and also returns a new function.
// Example for Passing a function as an arguement
function getCapture(capture){
    // To display what capture actually is
    console.log(capture);                       // [Function (anonymous)]
    // To display the content inside the capture
    capture();                                  // I am Captured.
}
getCapture(function(){                          // Here we are passing an anonymous function as an arguement.
    console.log("I am Captured.");
});

// Example for returning a function as a value from a Function
function returnFunction(){
    return function(){                          // When we call the function it will return a function (anonymous) as a value
        console.log("Hi");
    }
}
let rf = returnFunction();                      // Function calling & Storing the value in a variable
console.log(rf);                                // [Function (anonymous)] - function is returning an anonymous function as a value
// To display the content inside the function 
rf();                                           // Hi
// or else we can display the content inside the method as given below
returnFunction()();                             // Hi - first () for returnFunction calling second () is for anonymous function

// Benefits of HOF :
function calculate(operation, initialValue, numbers){
    let total = initialValue;
    for(const number of numbers){
        total = operation(total,number);
    }
    return total;
}
function sum(n1, n2){
    return n1 + n2;
}
function multiply(n1, n2){
    return n1 * n2;
}
// Function calling for addition operation
console.log(calculate(sum, 0, [1,2,3,4,5]));                 // 15
// Function calling for multiplication operation
console.log(calculate(multiply, 1, [1,2,3,4,5]));            // 120

// From the above we write the code for calculation one time & according to operations like sum , multiply also we write the code one time
// We can use calculate function for both sum & multiply as many time as we want by calling according to it
// We only need to write the calculate() one time and according to our choice we can assign our required operation which is also a method as an arguement
// By using this kind of Function we can also reduce Duplicacy


// 4. Arrow Functions - An Arrow Function helps the user to write a function in a shorter and simpler way
// It consists of an arrow (=>)
// Anonymous in nature
// Reduces Time & No. of lines in coding
let hello = () => {                                 // Function Declaration - function name will be hello here
    console.log("Hello World.!!");
} 
console.log(hello);                                 // [Function: hello]
// To display the content inside the hello function
hello();                                            // Hello World.!!

// We can also write the same above code in 1 line as
let hello1 = () => console.log("Hello World.!!");   // For single line 
hello1();                                           // Hello World.!!

// using return type and with arguements
let sum1 = (a, b) => {                                // Function Declaration - Here a, b are arguements
    return a + b;
}
let ans = sum1(10, 20);                              // Function calling
console.log(ans);                                    // 30

// We can also write the same above code in 1 line as
let sum2 = (a, b) => a + b;                         // In arrow function single line code there is no need to mention for returning something by default the value will return
let ans1 = sum2(10, 30);                            // Function calling
console.log(ans1);                                  // 40