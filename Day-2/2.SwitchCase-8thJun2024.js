// Switch Statement - Alternate for if-else statement

let shippingOption = "One-Day";

switch(shippingOption){
    case 'Standard':
        console.log("Your package will be delivered in 3-5 business days.!");
        break;          // Control-flow statement - used for terminating loop permaturely if a certain condition is met.
    case 'One-Day':
        console.log("Your Order will be delivered in one day.!");
        break;
    case 'Express':
        console.log("Your Order will be delivered within 2-3 days.!");
        break;
    default:
        console.log("Shipping Option is not valid.!!!");
}