// function sayMyName() {
//   console.log("tushar");
// }
// sayMyName();

/*

    function addTwoNum(x, y) {
    console.log(x + y);
    }
    // addTwoNum(2,3) //5

    const result = addTwoNum(5, 19);
    console.log(result); //undefined

*/

/**
 * Adds two numbers together.
 * 
 * @param {number} x - The first number to add.
 * @param {number} y - The second number to add.
 * @returns {number} The sum of x and y.
 */
function addNum(x, y) {
  // Adds x and y together and returns the result
  return x + y;
}
const result = addNum(10, 7);
console.log(result);

// function loginUser(name) {
//   return `${name} is logged in`;
// }
// console.log(loginUser()); //undefined
// console.log(loginUser("tushar"));//tushar is logged in

function loginUser(name) {
  if (!name) {
    console.log("provide username");
    return;
  } else {
    return `${name} is logged in`;
  }
}
console.log(loginUser()); //undefined
// console.log(loginUser("tushar"));
