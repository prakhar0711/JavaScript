//what we are trying to see is if we can change the value of Math.PI
//we know we have direct access to object and it has a lot of properties
//first uncomment the below and see its output
// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor); //returns{value: 3.141592653589793,writable: false,enumerable: false,configurable: false}

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
  name: "tea",
  price: 250,
  isAvailable: true,
};

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name")); //returns { value: 'tea', writable: true, enumerable: true, configurable: true }

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});
//after the above writable and enumerable property of name is changed
console.log(Object.getOwnPropertyDescriptor(chai, "name")); //returns {value: 'tea', writable: false,enumerable: false,configurable: true}

//lets see if we can iterate over
for (let [key, value] of chai) {
  console.log(`${key} : ${value}`); // returns - chai is not iterable
}

//we can iterate with below but still the key whose property were changed will not be iterable
//comment out the above and check
for (let [key, value] of Object.entries(chai)) {
  console.log(`${key} : ${value}`); // returns - chai is not iterable
}
