function setUsername(username) {
  //complex db calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  //   setUsername(username); //reference //uncomment this line and 1st log of chai and run
  setUsername.call(this, username); //this is provided here to hold the value of the username try without the this keyword and you waill understand the difference
  this.email = email;
  this.password = password;
}

const chai = new createUser("tushar", "abc@.com", "123");

//1st // console.log(chai); // returns only "{ email: 'abc@.com', password: '123' }"
console.log(chai); //returns  "{ username: 'tushar', email: 'abc@.com', password: '123' }"
