// Non-Primitive Data Type - Objects
// Objects are declared in the form of Key-Value pairs

let person = {
    firstname : 'SriLakshmi',
    lastname : 'Tiramsetti',
    age : 21,
    isMarried : false
};

console.log(person);            // Reading object
console.log(person.firstname);  // Reading Value from the Object Using Key

// To Update
person.age = 22;
console.log(person.age);        // 22

person.company = 'GeekSter';
console.log(person);            // New Key-Value pair will be updated to the person (company : 'GeekSter')
