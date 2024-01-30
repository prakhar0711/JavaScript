//global scope
// var c = 300;
// let a = 400;
if (true) {
  //block scope
  let a = 10;
  const b = 20;
  var c = 30;
  // console.log(a); //returns 30
}

// console.log(a); //not defined , returns 400 for let a =300
// console.log(b);  //not defined
// console.log(c); //returns 30

function one() {
  const username = "tushar";
  function two() {
    const website = "youtube";
    // console.log(username);
  }
  // console.log(website);
  two();
}
one();

if (true) {
  const username = "tushar";
  if (username === "tushar") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// *********************************************
console.log(addone(5));
function addone(num) {
  return num + 1;
}

// expression
// console.log(addTwo(5));
const addTwo = function (num) {
  return num + 4;
};
console.log(addTwo(5));
//function can be called before declaration
//function cannot be called before declaration if declared with a variable
