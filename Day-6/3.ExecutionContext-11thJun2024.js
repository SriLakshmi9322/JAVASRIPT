// Execution Context - Everything in JavaScript executes inside an Execution Context.
// It is an environment that is going to run our JS code
// It is of 2 types : 1. Global Execution Context (GEC) 2. Function Execution Context (FEC)
// There are 2 phases in Execcution Context : 
// 1. Memory Creation Phase - Creates memory for each variable, functions inside the JS file
// 2. Code Execution Phase - Actual execution process will be done in this phase by taking the stored values from the memory

var l = 2;
var w = 3;
function calculate(length, width) {
    var area = length * width;
    return area;
}
var rectangle = calculate(l, w);

// GEC will be created first as shown in the below for the above program
//  ______________________________________________________________________
// |      Memory Creation Phase       |     Code Execution Phase         |
// |              (MCP)               |             (CEP)                |
// |_____________________________________________________________________|
// |       l:  undefined  2 <=--------|------------------                |
// |                                  |                  |               |
// |                                  |      var l = 2 --                |
// |       w:  undefined  3 <=--------|------------------                |
// |                                  |                  |               |
// |                                  |      var w = 3 --                |
// |     calculate:  function  2 <=---|------------------                |
// |                                  |    ______________|               |
// |                                  |   |   (FEC)------|---------------|---------
// |                                  |   |   area=6<=---|---------------|        |
// |                                  |   |_______|______|              ||        |
// |    rectangular: undefined 6 <=---|-----------                      ||        |
// |                                  |                                 ||        |
// _____________________________________________________________________||        |
//                                                                      |         |
//                       ---------------------------------------------------------|
//                       ||                                             |
//                       V                                              |
//                  _______________________________________________     |
//          (FEC)=>|           MCP          |         CEP          |    |
//                 |________________________|______________________|    |                              
//                 |  length : un, 2        |                      |    |
//                 |               *        |                      |    |
//                 |  width : un,  3        |                      |    |
//                 |               =        |                      |    |
//                 |  area   : un, 6        |                      |    |
//                 |                |-------|----------------------|----
//                 |_______________________|_______________________|
// When a function is found in the GEC It will be directed to FEC and FEC will work as shown above
// After Compltion of FEC phase it will be deleted after passing the results to the GEC table
// Later when the GEC phase is sone it will display the final results and automatically deletes GEC