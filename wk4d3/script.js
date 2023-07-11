// ? Easy Going - write a for loop that will log the numbers 1 through 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//* ======================================
// ? Get Even - write a for loop that will log only the even numbers 0 through 200
for (let evenNum = 0; evenNum <= 200; evenNum++) {
  if (evenNum % 2 === 0) {
    console.log(evenNum);
  }
}

// * ======================================
// ? Fizz Buzz Write a Javascript Application that logs all numbers from 1 - 100.
// ? If a number is divisible by 3, log "Fizz" instead of the number.
// ? If a number is divisible by 5, log "Buzz" instead of the number.
// ? If a number is divisible by 3 and 5, log "FizzBuzz" instead of the number.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//* =====================================
// ? Wild Wild Life - Instructions below
//? Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
//? Plantee just had her birthday; change Plantee's array to reflect her being a year older.
//? Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
//? Give Dart a second hometown by adding "Hawkins"
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
wolfy.splice(3, 1, "Gotham City");
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);

const sharky = ["Sharky", "shark", 20, "Left Coast"];

const plantee = ["Plantee", "plant", 5000, "Mordor"];
plantee[2] = "5001";
console.log(plantee);

const porgee = ["Porgee", "Porg", 186, "Ahch-To"];

const dart = ["Dart", "Demogorgan Dog", 2, "Upside Down"];
dart.push("Hawkins");
console.log(dart);

// * ======================================
// ? Yell at the Ninja Turtles
// ? Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
// ? Use a for of loop to call toUpperCase() on each of them and print out the result.
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let turtle of ninjaTurtles) {
  let uppercaseName = turtle.toUpperCase();
  console.log(uppercaseName);
}

// * ======================================
// ? Methods Revisited - too many damn steps look at the link
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
console.log(favMovies[8]); // console.logs "Titanic" which is the 8th item in the index

favMovies.sort(); // sorts the items alphabetically

favMovies.pop(); // removes the last item from the array, which was "Volver" after being sorted

favMovies.push("Guardians of the Galaxy"); // add a new element to the end of the array

favMovies.reverse(); // reverses the array

const deletedElement = favMovies.shift(); // removes the first element from an array and returns it, changes the length
console.log(deletedElement);

favMovies.unshift("Inception"); // add an element to the beginning of the array

favMovies.splice(15, 1, "Avatar"); // change the element in index 15 to a new element

const halfOfMovies = favMovies.slice(Math.floor(favMovies.length / 2)); // slice the last half of the array , and storing that in a variable, then logging it
console.table(halfOfMovies);

console.log(favMovies[14]); // console log the index of fast and furious

console.table(favMovies);

// * ======================================
// ? Where is Waldo
// ? Remove Eggbert (hint look at the slice/splice methods).
// ? Change "Neff" to "No One".
// ? Access and console.log "Waldo".
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

console.log(whereIsWaldo[1]); // finding eggbert
let index = 1;
whereIsWaldo.splice(index, 1); // i found this solution online but gonna lie but i don't really understand how it works :)

whereIsWaldo[1][2] = "No One"; // change the name of the element to a new name

console.log(whereIsWaldo[2][1][1]); // finding waldo, and console logging him :)
console.table(whereIsWaldo);

// * ======================================
// ? Excited Kitten cats

let catArray = ["humans are dumb", "catnip > humans"];

for (let i = 0; i <= 20; i++) {
  let result = catArray[Math.floor(Math.random() * catArray.length)];
  if (i % 2 === 0) {
    console.log(result);
  }
  console.log("Love me, pet me! HSSSSSS!");
}

// * ======================================
// ? find the Median
