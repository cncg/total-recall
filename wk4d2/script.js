// // * ==============================================================================
// /*      A - q + a
// ? How do we assign a value to a variable?     you use the let, const or var keywords to declare a variable. However var is not the best practice.

// ? How do we change the value of a variable?   you change the value of a variable by using the "=" assignment operator , to reassign a new value to a variable . For example:
// let favoriteAnimal = "Shark";
// favoriteAnimal = "pig";

// ? How do we assign an existing variable to a new variable?  we can do this by using the assignment operator again. For example:
// let a = 10;
// let b = a;

// ? Remind me, what are declare, assign, and define?
// to declare it means we are declaring a variable, when we use assign it means we are giving that declared variable a value. When you are defining it means you are declaring a variable and assigning an value to to the variable.

// ? What is pseudocode and why should you do it?
// pseudocode is the act of writing out code in plain english enough that a non developer could understand, in order to tackle the problem you are going to solve. Pretty much pre planning the code.

// ? What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// you should spent most of the time , i'd say 80% thinking about how to tackle the problem , the rest will be coding and finding the bugs along the way while working live, to be more efficient
// */

// // * ==============================================================================
// // ? B - Strings
// // ? Create a variable called firstVariable
// let firstVariable;

// // ? Assign it the value of the string "Hello World"
// firstVariable = "Hello World";

// // ? Change the value of this variable to some number
// firstVariable = 14;

// // ? Store the value of firstVariable in a new variable called secondVariable
// let secondVariable = firstVariable;

// // ? Change the value of secondVariable to any string.
// secondVariable = "Total Recall";

// // ? What is the value of firstVariable?
// // The value of the firstVariable is the number 14;

// // ? Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// let yourName = "Chelsea";
// let greeting = "Hello, my name is " + yourName;
// console.log(greeting);

// // * ==============================================================================
// // ! NOT COMPLETE! COME BACK IT         C - Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "Kevin";

// console.log(a === b);
// console.log(c > d);
// console.log("Name" === "Name");
// console.log("name");
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false && false);
// console.log(e === "Kevin");
// console.log(a < b || b === c);
// console.log(a === a && a !== d);
// console.log(48 == "48");

// // * ==============================================================================
// // ? D- The farm
// const animal = "Cow";

// if (animal.toLowerCase() === "cow") {
//   console.log("moooooo");
// } else {
//   console.log("You're not cow");
// }

// // * ==============================================================================
// // ? E - Drivers Ed
// let userAge = 12;

// if (userAge >= 16) {
//   console.log("Here are the keys!");
// } else {
//   console.log("Sorry, you're too young.");
// }

// // * ==============================================================================
// // ? part two , a - loops , the basics
// // ? Write a loop that will print out all the numbers from 0 to 10, inclusive
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// // ? Write a loop that will print out all the numbers from 10 up to and including 400
// for (let i = 10; i <= 400; i++) {
//   console.log(i);
// }

// // ? Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let i = 12; i <= 4000; i += 3) {
//   console.log(i);
// }

// // * ==============================================================================
// // ? part two, b - get even
// // ? Print out the numbers that are within the range of 1 - 100 , log which are even

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " <== is an even number");
//   } else {
//     console.log(i);
//   }
// }

// // * ==============================================================================
// // ? part two, c - give me five
// // ? count from 0 to 100, if the number is a multiple of 5 print out high five

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`I found a ${i}. High five! Three is a crowd`);
//   } else if (i % 3 === 0) {
//     console.log(`I found a ${i}. Three is a crowd`);
//   } else if (i % 5 === 0) {
//     console.log(`I found a ${i}. High five!`);
//   }
// }

// // * ==============================================================================
// // ? part two, d - savings account
// let bankAccount = 0;
// for (let i = 1; i <= 10; i++) {
//   bankAccount += i;
// }
// console.log(bankAccount);

// // ? bonus
// let bonus = 0;
// for (let pay = 1; pay <= 100; pay++) {
//   bonus = bonus + pay * 2;
//   console.log(bonus);
// }

// // * ==============================================================================
// // ? Part three , arrays & control flow Q+A
// // ? what are the things in an array called?
// // they are called elements or array elements

// // ? Do arrays guarantee the elements will be in order ?
// // they will be stored in the order they were added

// // ? What real-life thing could you model with an array?
// // you can model many things, like names in a roster, a grocery item list, list of followers or string messages, inventory. It can model a lot!

// // * ==============================================================================
// // ? PT.3 B. Easy Does It
// // ? Create an array that contains three quotes and store it in a variable called quotes

// let quotes = [
//   "The weak can never forgive. Forgiveness is the attribute of the strong - Ghandi",
//   "Nobody can hurt you without your permission - Ghandi",
//   "If you must die ill envy even the earth that wraps your body - Some Dude",
// ];
// console.log(quotes);

// //* ==============================================================================
// // ? PT.3 C. Accessing Elements
// const randomThings = [1, 10, "Hello", true];
// console.log(randomThings[0]); // accessing the first element
// randomThings[2] = "World";
// console.log(randomThings);

// // * ==============================================================================
// // ? Pt.3 D - Change Values
// // ? Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// // ? What would you write to access the 3rd element of the array?
// // ? Change the value of "Github" to "Octocat"
// // ?Add a new element, "Cloud City" to the array

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// ourClass.splice(4, 1, "Octocat");
// ourClass.push("Cloud City");
// console.log(ourClass);

// * ==============================================================================
// ? PT.3 E - mix it up
// ? Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// ? Remove the 5from the beginning of the array.
// ? Add the string "Bob Marley"to the beginning of the array.
// ? Remove the string of your choice from the end of the array.
// ? Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

const myArray = [5, 10, 500, 20];
myArray.push("Aegon", "Crisp"); // add requested string and string of choice
myArray.shift(0); // remove 0 index element from array = 5
myArray.unshift("Bob Marley");
myArray.splice(4, 1); // remove element of my choice from the end = aegon
myArray.reverse(); // this will mutate the array . mutating is the act of making changes or modifying an already existing array. By that definition, this method is mutating the array. the reverse method returned the array but reverses the array elements!
console.log(myArray);


