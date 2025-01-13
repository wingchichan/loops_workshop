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
