// Conditional Statements or Branching Statements - used for making decisions based on user input
// if-else statement

let grocerySpending = 600;
if(grocerySpending > 1000) {
    let discount = 0.10 * grocerySpending;
    console.log("You get a 10% discount",discount);
}else if(grocerySpending > 500){
    let discount = 0.05 * grocerySpending;
    console.log("You get a 5% discount",discount);
}else{
    console.log("No Discount");
}