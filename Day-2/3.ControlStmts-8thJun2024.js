// Control Statements - for repeating a particular block of code in multiple no. of times.

// for loop - We use for loop when we know the actual number of iterations we need to perform.

let items = [10,20,30,40,50,60,70];
let sum = 0;

for(let i = 0; i < items.length; i++){
    sum += items[i];
}
console.log(sum);                   // 280


// while loop - We can use while loop when we don't know the actual no. of iterations.

let scores = [50,60,44,37,12,25,82];
let tot = 0;

let i = 0;
while(i < scores.length){
    tot += scores[i];
    i++;
}
console.log(tot);                   // 280