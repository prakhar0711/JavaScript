/**
 * Generates a random hex color
 * @returns {string} - The random hex color
 */
const randomColor = function () {
  // Define the hex characters
  const hex = "0123456789ABCDEF";
  // Initialize the color with #
  let color = "#";
  // Generate 6 random hex characters
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  // Return the random color
  return color;
};


let stopId;
/**
 * Starts changing the background color at regular intervals
 */
const startChangingColor = function () {
  // Check if the background color change is already in progress
  if (stopId == null) {
    // Start the interval for changing the background color
    stopId = setInterval(changeBgColor, 1000);
  }

/**
 * Changes the background color of the body element to a random color.
 */
function changeBgColor() {
  const bodyElement = document.querySelector("body");
  bodyElement.style.backgroundColor = randomColor();
}
};

/**
 * Stop changing the color
 */
const stopChangingColor = function () {
  clearInterval(stopId);
  stopId = null;
};

//starts interval
document.querySelector("#start").addEventListener("click", startChangingColor);

//stops interaval
document.querySelector("#stop").addEventListener("click", stopChangingColor);
