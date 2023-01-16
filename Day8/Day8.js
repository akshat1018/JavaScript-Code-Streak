const readlineSync = require('readline-sync');
let target = Math.floor(Math.random() * 100) + 1;
while (true) {
    let guess = readlineSync.question("Guess a number between 1 and 100:");
    if (!isNaN(guess)) {
        guess = Number(guess);
        if (guess < target) {
            console.log("Too low! Guess again.");
        } else if (guess > target) {
            console.log("Too high! Guess again.");
        } else {
            console.log("Correct! The number was " + target + ".");
            break;
        }
    } else {
        console.log("Invalid input. Please enter a number.");
    }
}
