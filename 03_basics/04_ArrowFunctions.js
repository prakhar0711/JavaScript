// const user = {
//   username: "tushar",
//   age: 23,
//   welcomeMessage: function () {
//     // console.log(`${this.username} ,welcome to website`);
//     // console.log(this);
//   },
// };

const { ThirtyFpsSelectRounded } = require("@mui/icons-material");

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();
// console.log(this);

// function chai() {
//   let username = "tushar";
//   console.log(this.username);//returns undefined
// }
// chai();

// const chai = function () {
//   let username = "tushar";
//   console.log(this.username);
// };
// chai();

//arrow functions
const chai = () => {
  let username = "tushar";
  console.log(this); //returns undefined
};
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 4));

const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(3, 4));