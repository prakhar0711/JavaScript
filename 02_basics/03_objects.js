//Object.create;

//object literals

const mySym = Symbol("key1");
const JsUser = {
  "full name": "tushar kumar",
  name: "tushar",
  [mySym]: "mykey1",
  age: 21,
  location: "Ahmedabad",
  email: "tushar@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// Object.freeze(JsUser); // freezes any object changes
JsUser.email = "tushar@tushar";
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`hello ${this["full name"]}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

