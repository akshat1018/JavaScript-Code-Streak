// Initialize variables for game
var streak = 0;
var maxStreak = 0;
var target = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Generate a new target letter
function newTarget() {
  target = alphabet[Math.floor(Math.random() * alphabet.length)];
  document.getElementById("target").innerHTML = target;
}

// Check if the user's input matches the target letter
document.onkeyup = function(event) {
  var userInput = event.key.toLowerCase();
  if (userInput === target) {
    streak++;
    document.getElementById("streak").innerHTML = streak;
    if (streak > maxStreak) {
      maxStreak = streak;
      document.getElementById("max-streak").innerHTML = maxStreak;
    }
    newTarget();
  } else {
    streak = 0;
    document.getElementById("streak").innerHTML = streak;
  }
}

// Call the newTarget function to generate the first target letter
newTarget();
