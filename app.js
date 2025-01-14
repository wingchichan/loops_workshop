for (let i = 0; i < 5; i++) {
  console.log(i);
}

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

// let keepLooping = true;
// let i = 0;
// while (keepLooping === true) {
//   console.log("Iteration", i);
//   // set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1
//   keepLooping = Math.random() < 0.1;
//   i++;
// }

let keepLoopingAgain = false;
let randomNumber = 0;
while (keepLoopingAgain === false) {
  console.log("Iteration", randomNumber);
  // set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1
  keepLoopingAgain = Math.random() < 0.1;
  randomNumber++;
}

// Looping over Arrays

const foods = ["dumplings", "pizza", "saag", "roast dinner", "cake"];

// for loop
// for (let food = 0; food < foods.length; food++) {
//   console.log(foods[food]);
// }

// for...of loop
// for (let food of foods) {
//   console.log(food);
// }

// forEach loop
// foods.forEach(function (food) {
//   console.log(food);
// });

const colours = ["red", "yellow", "green", "blue", "orange"];

colours.forEach(function (colour) {
  console.log(colour);
});
