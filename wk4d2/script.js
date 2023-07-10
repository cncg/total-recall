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
// ? C - Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a === b);
console.log(c > d);
console.log("Name" === "Name");
console.log("name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false && false);
console.log(e === "Kevin");
console.log(a < b || b === c);
console.log(a === a && a !== d);
console.log(48 == "48");

// * ==============================================================================
// ? D - The farm
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
// ? PT2 A - loops , the basics
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
// ? PT2 B - get even
// ? Print out the numbers that are within the range of 1 - 100 , log which are even

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " <== is an even number");
  } else {
    console.log(i);
  }
}

// * ==============================================================================
// ? PT2 C - give me five
// ? count from 0 to 100, if the number is a multiple of 5 print out high five

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`I found a ${i}. High five! Three is a crowd`);
  } else if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd`);
  } else if (i % 5 === 0) {
    console.log(`I found a ${i}. High five!`);
  }
}

// * ==============================================================================
// ? PT2 D - savings account
let bankAccount = 0;
for (let i = 1; i <= 10; i++) {
  bankAccount += i;
}
console.log(bankAccount);

// ? bonus
let bonus = 0;
for (let pay = 1; pay <= 100; pay++) {
  bonus = bonus + pay * 2;
  console.log(bonus);
}

// * ==============================================================================
// ? PT3 , arrays & control flow Q+A
// ? what are the things in an array called?
// they are called elements or array elements

// ? Do arrays guarantee the elements will be in order ?
// they will be stored in the order they were added

// ? What real-life thing could you model with an array?
// you can model many things, like names in a roster, a grocery item list, list of followers or string messages, inventory. It can model a lot!

// * ==============================================================================
// ? PT.3 B - Easy Does It
// ? Create an array that contains three quotes and store it in a variable called quotes

let quotes = [
  "The weak can never forgive. Forgiveness is the attribute of the strong - Ghandi",
  "Nobody can hurt you without your permission - Ghandi",
  "If you must die ill envy even the earth that wraps your body - Some Dude",
];
console.log(quotes);

//* ==============================================================================
// ? PT.3 C - Accessing Elements
const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]); // accessing the first element
randomThings[2] = "World";
console.log(randomThings);

// * ==============================================================================
// ? Pt.3 D - Change Values
// ? Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// ? What would you write to access the 3rd element of the array?
// ? Change the value of "Github" to "Octocat"
// ?Add a new element, "Cloud City" to the array

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass.splice(4, 1, "Octocat");
ourClass.push("Cloud City");
console.log(ourClass);

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

// * ==============================================================================
// ? PT.3 F - Biggie Smalls
// ? Create a variable that contains an integer.
// ? Write an if ... else statement that:
// ? console.log()s "little number" if the number is entered is less than 100
// ? console.log()s big number if the number is greater than or equal to 100.

const biggieSmalls = 14;
if (biggieSmalls < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// * ==============================================================================
// ? Pt.3 G - Monkey in The Middle
// ? Write an if else statement ..
// ? console.log() little number if the number entered is less than 5
// ? if the number entered is more than 10, log big number
// ? otherwise log "monkey"
const monkey = 12;

if (monkey < 5) {
  console.log("little number");
} else if (monkey > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// * ==============================================================================
// ? PT.3 H -  What's in Your Closet?
// ? What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// ? Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// ? Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// ? Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray
// ? In the same way, access one item from Thom's pants array.
// ? Access one item from Thom's accessories array.
// ? Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// ? Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

// logging out Kristyn's third item
console.log(`Kristyn is rocking that ${kristynsCloset[0]} today!`);
kristynsCloset.splice(6, 0, "rayban"); // adding "rayban" after the 5th indexed element in the array
kristynsCloset.splice(5, 1, "stained knit hat"); // changes the 5th indexed element from yellow knit hat to stained knit hat
// accessing Thom's 1st element
console.log(thomsCloset[0][0]);
// any item from Thom's pants
console.log(thomsCloset[1][1]);
// any of thoms accessories
console.log(thomsCloset[2][1]);
// logging what thoms wearing
console.log(
  `Thom is looking fierce in a ${thomsCloset[0][1]}, ${thomsCloset[1][2]}, and ${thomsCloset[2][0]}!`
);

thomsCloset[1][2] = "Footie Pajamas";
console.table(thomsCloset);

// * ==============================================================================
// ?  PT.4 Functions A - printGreeting

function printGreeting(name) {
  console.log(`Hello there, ${name}!`);
}
printGreeting("Slimer");

// * ==============================================================================
// ? PT4 B - printCool
function printCool(name) {
  console.log(`${name} is cool`);
}
printCool("Captain Jack Sparrow");

// * ==============================================================================
// ? PT4 C - calculate cube
// ? Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
function calculateCube(sideOfCube) {
  console.log(sideOfCube * sideOfCube * sideOfCube);
  return sideOfCube * sideOfCube * sideOfCube;
}
console.log(calculateCube(5));

// * ==============================================================================
// ? PT$ D - isVowel
function isVowel(letter) {
  let string = letter.toLowerCase();
  if (
    string === "a" ||
    string === "e" ||
    string === "i" ||
    string === "o" ||
    string === "u"
  ) {
    console.log(`${string} - This is a vowel`);
    return true;
  } else {
    console.log(`${string} - This is not a vowel`);
    return false;
  }
}
console.log(isVowel("c"));
console.log(isVowel("H"));
console.log(isVowel("E"));

// * ==============================================================================
// ? PT4 E - getTwoLengths

function getTwoLengths(string1, string2) {
  return [string1.length, string2.length];
}
console.table(getTwoLengths("I hate ", "being dehydrated"));

// * ==============================================================================
// ? PT4 F - getMultipleLengths
// ? Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
function getMultipleLengths(stringsArray) {
  let lengths = [];
  for (let i = 0; i < stringsArray.length; i++) {
    lengths.push(stringsArray[i].length);
  }
  return lengths;
}
let strings = ["blue", "black", "green", "purple", "yellow", "red"];
let lengths = getMultipleLengths(strings);
console.table(lengths);

// * ==============================================================================
// ? PT4 G- maxOfThree
// ? Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// ? If all numbers are the same, it doesn't matter which one is returned.
// ? If the two largest numbers are the same, one of them should be returned.
//? Be sure to test it with larger values in each of the three locations.

function maxOfThree(num1, num2, num3) {
  let max = num1;

  if (num2 > max) {
    max = num2;
  }

  if (num3 > max) {
    max = num3;
  }

  return max;
}
let num1 = 10;
let num2 = 25;
let num3 = 15;
let result = maxOfThree(num1, num2, num3);
console.log(result);
// ! honestly i don't even know how i did this but id love to go over it !

// * ==============================================================================
// ? PT4 H - printLongestWord
// ? Write a function printLongestWord that accepts a single argument, an array of strings.
// ? The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

function printLongestWord(stringArray) {
  let longestWord = "";
  for (let w = 0; w < stringArray.length; w++) {
    if (stringArray[w].length > longestWord.length) {
      longestWord = stringArray[w];
    }
  }
  console.log(longestWord);
}
printLongestWord(["spongebob", "rat", "theWorldsLongestWordEver"]);

// * ==============================================================================
// ? PT5 Objects - A - Make a user object
// ? create an object called user
// ? Write in to the object the key-value pairs for name, email , age and purchased.
// ? Set the value of purchased to an empty array.
// ? Set the other values to whatever you would like.

const user = {
  name: "Chelz",
  age: 23,
  purchased: [],
};

// * ==============================================================================
// ? PT5 B - Update the user
// ? Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address
// ? Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
