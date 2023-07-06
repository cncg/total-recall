// * ==============================================================================
/*      A - q + a
? How do we assign a value to a variable?     you use the let, const or var keywords to declare a variable. However var is not the best practice.

? How do we change the value of a variable?   you change the value of a variable by using the "=" assignment operator , to reassign a new value to a variable . For example:
let favoriteAnimal = "Shark";
favoriteAnimal = "pig";

? How do we assign an existing variable to a new variable?  we can do this by using the assignment operator again. For example:
let a = 10;
let b = a;

? Remind me, what are declare, assign, and define? 
to declare it means we are declaring a variable, when we use assign it means we are giving that declared variable a value. When you are defining it means you are declaring a variable and assigning an value to to the variable.

? What is pseudocode and why should you do it?
pseudocode is the act of writing out code in plain english enough that a non developer could understand, in order to tackle the problem you are going to solve. Pretty much pre planning the code.

? What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
you should spent most of the time , i'd say 80% thinking about how to tackle the problem , the rest will be coding and finding the bugs along the way while working live, to be more efficient
*/

// * ==============================================================================
// ? B - Strings
// ? Create a variable called firstVariable
let firstVariable;

// ? Assign it the value of the string "Hello World"
firstVariable = "Hello World";

// ? Change the value of this variable to some number
firstVariable = 14;

// ? Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;

// ? Change the value of secondVariable to any string.
secondVariable = "Total Recall";

// ? What is the value of firstVariable?
// The value of the firstVariable is the number 14;

// ? Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let yourName = "Chelsea";
let greeting = "Hello, my name is " + yourName;
console.log(greeting);

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
// ? D- The farm
const animal = "Cow";

if (animal.toLowerCase() === "cow") {
  console.log("moooooo");
} else {
  console.log("You're not cow");
}

// * ==============================================================================
// ? E - Drivers Ed
let userAge = 12;

if (userAge >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

// * ==============================================================================
// ? part two , a - loops , the basics
// ? Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// ? Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400; i++) {
  console.log(i);
}

// ? Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}

// * ==============================================================================
