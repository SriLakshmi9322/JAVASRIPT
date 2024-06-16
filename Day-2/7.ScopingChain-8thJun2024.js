// Scoping Chain

var a = "Global Variable";
function outer(){
    var b = "Function Scope(Outer)";            
    function inner(){
        var c = "Function Scope(Inner)";
        console.log(c,b,a);
    }
    inner();                                    // Function calling for inner()
}
outer();                                        // Function calling for outer()

// a & outer() values will be stored
// Here the execution starts from the function calling outer();
// When we call outer(); , code inside the outer() will be executed as b & inner() values will be stored & inner() function will be called.
// then inner() will be executed as first c will be stored then console.log() will display the c value which is present within the function itself
// later it will search for b value which is not inside the inner() so it will go outside the function and within the outer() itself b is declared, which is of lexical scope.
// Lexical Scope occurs when there is "Chain of Functions" - b is within the outer() and outside of the inner()
// After finding the b it will also be declared.
// Soon after b declaration it will search for a value inside inner() outside inner() within outer() finally it will search in the Global scope (outside the outer()).
// a is present in the Global Scope. So we can access it and the a value will also be declared.
// 
// 
