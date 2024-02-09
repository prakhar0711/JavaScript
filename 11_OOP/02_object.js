/**
 * Multiplies the input number by 5.
 *
 * @param {number} num - The number to be multiplied
 * @return {number} The result of the multiplication
 */
function multiplyBy(num) {
  return num * 5;
}

console.log(multiplyBy(7));
console.log((multiplyBy.power = 2));
console.log(multiplyBy.prototype); //returns {}

//in javascript almost everything is a object
//you can make everything behave like an object

/**
 * Creates a new user with the given username and score.
 *
 * @param {string} username - The username of the user
 * @param {number} score - The score of the user
 * @return {void}
 */
function createUser(username, score) {
  this.username = username; //.this sets current context
  this.score = score;
}

//prototype can be used to inject your own functions
createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`My score is ${this.score}`); //kiska matlab this
};

// const chai = createUser("tushar", 26);
// const tea = createUser("prakhar", 250);

// //js by default cannot return the below
// chai.increment();
// tea.increment();
// chai.printMe();
// tea.printMe();

//while creating const chai and const tea we didnt declare that new prototypes were added
// this is achieved by the new keyword
// we can see the proper working of the prototypes from below
const chai = new createUser("tushar", 26);
const tea = new createUser("prakhar", 250);
chai.increment();
tea.increment();
chai.printMe();
tea.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
