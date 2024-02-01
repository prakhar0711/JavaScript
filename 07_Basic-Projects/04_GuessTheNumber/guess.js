const randomNumber = parseInt(Math.random() * 100) + 1;
// console.log(randomNumber);
const hello = document.querySelector("#randomnum");
hello.innerHTML += `${randomNumber}`;
const submit = document.querySelector("#button");
const userInput = document.querySelector("#guess");
const loworhi = document.querySelector(".loworhi");
const startOver = document.querySelector(".results");
const para = document.createElement("p");

let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess === 0 || guess < 1 || guess > 100) {
    alert("please enter a valid number");
  } else {
    displayMessage(guess);
    checkGuess(guess);
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("you won");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("number too low");
  } else if (guess > randomNumber) {
    displayMessage("number too low");
  }
}

function displayMessage(guess) {
  userInput.value = "";
  loworhi.innerHTML = `${guess}`;
}
