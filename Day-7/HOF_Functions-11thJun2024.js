// Understanding HOF Functions which is Key concept of JS is very important
// Functional Programming is magic part of coding
// It makes our coding skills efficient & Super easy

// forEach loop
let numbers = [1,2,3,4,5,6,7,8,9];
numbers.forEach((number) => {                                   // => - Arrow function acts as a Call Back function to apply the task we need to perform on the elements from the array
    console.log(number);
})
// Output :-
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// forEach loop is mostly Preferred as it helps in controlling the value, index & Whole array
// Call Back Function can take 3 aruements (No Other loops can have 3 arguements which makes forEach loop powerful)
let arr = [1,2,3];
arr.forEach((number, index, arr) => {
    console.log(number, index, arr);
})
// Output :-
// 1 0 [ 1, 2, 3 ]
// 2 1 [ 1, 2, 3 ]
// 3 2 [ 1, 2, 3 ]

// When we need to apply side effect operation on each & every particular item we can use forEach loop
let products = [
    {id : 1, name : "Product 1", price : 99},
    {id : 2, name : "Product 2", price : 199},
    {id : 3, name : "Product 3", price : 139},
    {id : 4, name : "Product 4", price : 229},
    {id : 5, name : "Product 5", price : 49},
    {id : 6, name : "Product 6", price : 59}
];
// To display each product details as product id, product name, product price individually
products.forEach((product) => {
    console.log(`Product Id : ${product.id}`);
    console.log(`Product Name : ${product.name}`);
    console.log(`Product Price : ${product.price}`);
})
// Output :-
// Product Id : 1
// Product Name : Product 1
// Product Price : 99
// Product Id : 2
// Product Name : Product 2
// Product Price : 199
// Product Id : 3
// Product Name : Product 3
// Product Price : 139
// Product Id : 4
// Product Name : Product 4
// Product Price : 229
// Product Id : 5
// Product Name : Product 5
// Product Price : 49
// Product Id : 6
// Product Name : Product 6
// Product Price : 59


// map, reduce & filter
// map method - similar to forEach but map method will return output in the form of an array (map will create and returns a new array)
products.map((product) => {
    console.log(`Product Id : ${product.id}`);
    console.log(`Product Name : ${product.name}`);
    console.log(`Product Price : ${product.price}`);
})
// Output :-
// Product Id : 1
// Product Name : Product 1
// Product Price : 99
// Product Id : 2
// Product Name : Product 2
// Product Price : 199
// Product Id : 3
// Product Name : Product 3
// Product Price : 139
// Product Id : 4
// Product Name : Product 4
// Product Price : 229
// Product Id : 5
// Product Name : Product 5
// Product Price : 49
// Product Id : 6
// Product Name : Product 6
// Product Price : 59

let mapArray = products.map((product) => {                              
    console.log(`Product Price : ${product.price * 2}`);        // Condition will be applied and stored in the mapArray variable in the form of new Array there will not be any change in the actual array
})
console.log(mapArray);
// Output :-
// Product Price : 59
// Product Price : 198
// Product Price : 398
// Product Price : 278
// Product Price : 458
// Product Price : 98
// Product Price : 118
// [ undefined, undefined, undefined, undefined, undefined, undefined ]

console.log(products);                                          // There will not any change in the actual array
// Output :-
// [
//     { id: 1, name: 'Product 1', price: 99 },
//     { id: 2, name: 'Product 2', price: 199 },
//     { id: 3, name: 'Product 3', price: 139 },
//     { id: 4, name: 'Product 4', price: 229 },
//     { id: 5, name: 'Product 5', price: 49 },
//     { id: 6, name: 'Product 6', price: 59 }
// ]

// Let's observe in a simpler way
let numArray = [1,2,3];
let doubled = numArray.map((number) => {
    return number * 2;
});
console.log(doubled);                   // [ 2, 4, 6 ] - returns output in the form of an array
console.log(numArray);                  // [ 1, 2, 3 ] - actual array will not be manipulated


// filter method - filters according to specified condition also it is similar to map method it will also create & returns a new Array
let filteredProduct = products.filter((product) => {
    return product.price > 100;         // Checks for the products having price > 100 & returns them in an array format , also original array will not be manipulated
});
console.log(filteredProduct);
// Output :-
// [
//   { id: 2, name: 'Product 2', price: 199 },
//   { id: 3, name: 'Product 3', price: 139 },
//   { id: 4, name: 'Product 4', price: 229 }
// ]

// reduce method - map & filter methods will give new arrays. whereas reduce method will reduce everything by giving the output in single value for any sort of iterable
// In this method, Call Back function takes 2 parameters :
// 1. accumelator 2. Current Value
let cartTotal = products.reduce((total, product) => {
    return total + product.price;
},0);                                       // 0 - is initial value => total = 0
console.log(cartTotal);                     // 774 - sum of all product prices in the cart 