// * ==============================================================================
/*      A - q + a
? How do we assign a value to a variable?     you use the let, const or var keywords to declare a variable. However var is not the best practice.

? How do we change the value of a variable?   you change the value of a variable by using the "=" assignment operator , to reassign a new value to a variable . For example:
let favoriteAnimal = "Shark";
favoriteAnimal = "pig";

? How do we assign an existing variable to a new variable?  we can do this by using the assignment operator again. For example:
let a = 10;
let b = a;

? Remind me, what are declare, assign, and define? to declare it means we are declaring a variable, when we use assign it means we are giving that declared variable a value. When you are defining it means you are declaring a variable and assigning an value to to the variable.

? What is pseudocoding and why should you do it?    pseudocoding is the act of writing out code in plain english enough that a non developer could understand, in order to tackle the problem you are going to solve. Pretty much pre planning the code.

? What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?    you should spent most of the time , i'd say 80% thinking about how to tackle the problem , the rest will be coding and finding the bugs along the way while working live, to be more efficient
*/

// * ==============================================================================
/*  B - Strings
? Create a variable called firstVariable
let firstVariable;

? Assign it the value of the string "Hello World"
firstVariable = "Hello World";

? Change the value of this variable to some number
firstVariable = 14;

? Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable

? Change the value of secondVariable to any string.
secondVariable = "Total Recall" ;

? What is the value of firstVariable?
The value of the firstVariable is the number 14; 

? Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let yourName = "Chelsea";
let greeting ="Hello, my name is " + yourName;
console.log(greeting)
*/

// * ==============================================================================
// ! NOT COMPLETE! COME BACK IT         C - Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");

// * ==============================================================================
// D- The farm
const animal = "Cow";

if (animal.toLowerCase() === "cow") {
  console.log("moooooo");
} else {
  console.log("You're not cow");
}


//  E - Drivers Ed 
