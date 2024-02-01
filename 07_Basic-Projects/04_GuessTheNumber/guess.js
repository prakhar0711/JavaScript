const randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);
const heading = document.querySelector("#randomnum");
heading.innerHTML += `${randomNumber}`;
const submit = document.querySelector("#button");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const guess = parseInt(document.querySelector("#guess").value);
  // console.log(guess);
  if (isNaN(guess)) {
    alert("please enter a number");
  } else if (guess === "0" || guess < 1 || guess > 100) {
    alert("enter a number between 1 and 100");
  } else {
    checkGuess(guess);
  }
});

function checkGuess(guess) {
  remaining(guess);
  const res = document.querySelector(".loworhi");
  if (guess == randomNumber) {
    res.style.color = "green";
    res.innerHTML = `Correct!`;

    endGame(guess);
  } else if (guess < randomNumber) {
    res.style.color = "red";
    res.innerHTML = `number too low`;
  } else if (guess > randomNumber) {
    res.style.color = "orange";
    res.innerHTML = `number too high`;
  }
}

function endGame(guess) {
  const input = document.querySelector("#guess");
  const submitbutt = document.querySelector("#button");
  if (guess == randomNumber) {
    alert(
      `Game Over!You Won!. The number was ${randomNumber}. Please refresh the page`
    );
  } else {
    alert(`better luck next time!Please refresh the page`);
  }
  counter.textContent = 10;
  input.disabled = true;
  submitbutt.disabled = true;
}
function remaining(guess) {
  const counter = document.querySelector("#counter");
  const count = parseInt(counter.textContent);
  console.log(count);
  if (guess) {
    counter.textContent = count - 1;
  }
  if (count == 1) {
    endGame(guess);
  }
}
