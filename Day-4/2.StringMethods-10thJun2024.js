// String Methods

// toLower method and toUpper method -  When the user search like 'aPpLE' which is not underatable for the server as the word is stored either fully in Lower case or Upper case then to make it simple we can use these methods to convert before searching for the exact word into 'apple' or 'APPLE'
let fname = "SriLakshmi";
let lname = "Tiramsetti";
let fullname = `My name is : ${fname} ${lname}.`;
console.log(fullname);                                      // My name is : SriLakshmi Tiramsetti.
console.log(fullname.toLowerCase());                        // my name is : srilakshmi tiramsetti.
console.log(fullname.toUpperCase());                        // MY NAME IS : SRILAKSHMI TIRAMSETTI.

// Multi-line String
// for string in diff lines we can add '\' at the end of each line
let str = "My name is Anuj. I live in India.\
 I am a teacher and I love teaching. I teach HTML, CSS,\
 JavaScript, React, Redux, Node.js, Python, Data Analysis\
and D3.js for anyone who is interested to learn.\
In the end of 2019, I was thinking to expand my\
teaching and to reach to global audience and\
 I started a Python challenge from Nov 20-Dec19\
It was one of the most rewarding and inspiring experience\
Now, We are in 2020.I am enjoying preparing the\
30DaysOfJavaScript Challenge and I hope you\
 are enjoying too.";
console.log(str);
// Output :-
// My name is Anuj. I live in India. I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, Node.js, Python, Data Analysisand D3.js for anyone who is interested to learn.In the end of 2019, I was thinking to expand myteaching and to reach to global audience and I started a Python challenge from Nov 20-Dec19It was one of the most rewarding and inspiring experienceNow, We are in 2020.I am enjoying preparing the30DaysOfJavaScript Challenge and I hope you are enjoying too.

// search method - To search a specific word in the string
// If the specified word is found it returns the starting character index of the word else it returns -1
let keyword = "learn";
console.log(str.search(keyword));                       // 187 - index of 'l' from the word 'learn'

let keyword1 = "learn12";
console.log(str.search(keyword1));                     // -1 - Word Not Found

// replace method - To replace a particular word by another word by specifying.
// replace method consists of 2 arguements - 1. word to be removed 2. word to place in the removed position
let remove = "Anuj";
let place = "SriLakshmi";
console.log(str.replace(remove,place));                // 'Anuj' will be replaced by 'SriLakshmi'
// Output :-
// My name is SriLakshmi. I live in India. I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, Node.js, Python, Data Analysisand D3.js for anyone who is interested to learn.In the end of 2019, I was thinking to expand myteaching and to reach to global audience and I started a Python challenge from Nov 20-Dec19It was one of the most rewarding and inspiring experienceNow, We are in 2020.I am enjoying preparing the30DaysOfJavaScript Challenge and I hope you are enjoying too.


// slice, substring & substr - Methods to get a portion of a String
// slice method - To take some particular portion of the string using index values
let portionString = str.slice(0,101);                  // from 0th index to 100th index
console.log(portionString);                            // My name is Anuj. I live in India. I am a teacher and I love teaching. I teach HTML, CSS, JavaScript,

// We can hide the unnecessary or extra content from displaying using slice method (...Read More or ...Read Less)
console.log(portionString+"...Continue Reading");                            // My name is Anuj. I live in India. I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, ...Continue Reading

let portionStr = str.slice(0);                          // from 0th index to last index (ending index is optional, default it will take the last index+1)
console.log(portionStr);                                // My name is Anuj. I live in India. I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, Node.js, Python, Data Analysisand D3.js for anyone who is interested to learn.In the end of 2019, I was thinking to expand myteaching and to reach to global audience and I started a Python challenge from Nov 20-Dec19It was one of the most rewarding and inspiring experienceNow, We are in 2020.I am enjoying preparing the30DaysOfJavaScript Challenge and I hope you are enjoying too.

// Negative indexing
let portStr = str.slice(-20)                            // from -20th index to -1(default) index
console.log(portStr);                                   // ou are enjoying too.


// substring method - To take particular portion from a String but it does not allow negative index values
let portnStr = str.substring(0,101);                    // from 0th index to last index (ending index is optional, default it will take the last index+1)
console.log(portnStr);                                  // My name is Anuj. I live in India. I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, Node.js, Python, Data Analysisand D3.js for anyone who is interested to learn.In the end of 2019, I was thinking to expand myteaching and to reach to global audience and I started a Python challenge from Nov 20-Dec19It was one of the most rewarding and inspiring experienceNow, We are in 2020.I am enjoying preparing the30DaysOfJavaScript Challenge and I hope you are enjoying too.

let portnStr1 = str.slice(0);                          // from 0th index to last index (ending index is optional, default it will take the last index+1)
console.log(portnStr1);                                // My name is Anuj. I live in India. I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, Node.js, Python, Data Analysisand D3.js for anyone who is interested to learn.In the end of 2019, I was thinking to expand myteaching and to reach to global audience and I started a Python challenge from Nov 20-Dec19It was one of the most rewarding and inspiring experienceNow, We are in 2020.I am enjoying preparing the30DaysOfJavaScript Challenge and I hope you are enjoying too.

// Negative indexing is not be allowed
let portString = str.substring(-20);                   // substring method converts the negative value into '0'. Which is why the entire string will be displayed
console.log(portString);                               // My name is Anuj. I live in India. I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, Node.js, Python, Data Analysisand D3.js for anyone who is interested to learn.In the end of 2019, I was thinking to expand myteaching and to reach to global audience and I started a Python challenge from Nov 20-Dec19It was one of the most rewarding and inspiring experienceNow, We are in 2020.I am enjoying preparing the30DaysOfJavaScript Challenge and I hope you are enjoying too.


// substr method - To get a particular portion of a String
// but this method is deprecated - 'not recommended to use'
let strPortion = str.substr(30,50);                    // 30 - start index, 50 - char count (from 30th index to 79th index (30+50=80))
console.log(strPortion);                               // ia. I am a teacher and I love teaching. I teach HT

// Character count is Optional
let stringPortion = str.substr(30);                    // from 30th index to last index 
console.log(stringPortion);                            // ia. I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, Node.js, Python, Data Analysisand D3.js for anyone who is interested to learn.In the end of 2019, I was thinking to expand myteaching and to reach to global audience and I started a Python challenge from Nov 20-Dec19It was one of the most rewarding and inspiring experienceNow, We are in 2020.I am enjoying preparing the30DaysOfJavaScript Challenge and I hope you are enjoying too.

// Negative index also available
let stringPortn = str.substr(-30);                     // from -30th index to -1(default) index
console.log(stringPortn);                              // d I hope you are enjoying too.

let strngPortion = str.substr(-3000);                  // Entire String will be displayed as it is excess index value of -ve index value
console.log(strngPortion);                             // My name is Anuj. I live in India. I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, Node.js, Python, Data Analysisand D3.js for anyone who is interested to learn.In the end of 2019, I was thinking to expand myteaching and to reach to global audience and I started a Python challenge from Nov 20-Dec19It was one of the most rewarding and inspiring experienceNow, We are in 2020.I am enjoying preparing the30DaysOfJavaScript Challenge and I hope you are enjoying too.

let strnPortion = str.substr(3000);                   // Empty as the index value is excess of the original String length
console.log(strnPortion);                             // (empty)