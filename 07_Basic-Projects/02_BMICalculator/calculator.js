const form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault(); //stops the post request
  const height = parseInt(document.querySelector("#height").value);
  //   console.log(height);
  const weight = parseInt(document.querySelector("#weight").value);
  //   console.log(weight);
  const results = document.querySelector("#results");
  const desc = document.querySelector("#desc");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Give a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    const intbmi = parseFloat(bmi);
    // console.log(intbmi);
    // console.log(results.innerHTML.value);
    if (intbmi < 18.6) {
      results.innerHTML += "<span>-you are underweight</span>";
    } else if (intbmi >= 18.6 && intbmi <= 24.9) {
      results.innerHTML += "<span>-Normal Range</span>";
    } else {
      results.innerHTML += "<span>-Overweight</span>";
    }
  }
});
