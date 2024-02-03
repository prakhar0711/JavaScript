const results = document.querySelector(".results");
// console.log(results);
const buttons = document.querySelectorAll("button");
console.log(buttons);
// const button_items = document.querySelector(".button-items");
// console.log(button_items);

buttons.forEach((button) => {
  //   console.log(button);
  button.addEventListener("click", function (event) {
    const buttonValue = button.textContent || button.value;
    // console.log(event);
    // console.log(event.target);
    if (event.target.id === "clear") {
      results.innerHTML = "";
    } else if (event.target.id === "equal") {
      results.innerHTML = eval(results.innerHTML);
    } else if (event.target.id === "back") {
      results.innerHTML = results.innerHTML.slice(0, -1);
    } else {
      results.innerHTML += buttonValue;
    }
  });
});
