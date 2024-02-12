//getters and setters are used to define a specific behaviour whenever a user is trying to access a class member is accessed
//if defined a getter you must define a setter also else it wont work

class User {
/**
 * Represents a user with email and password.
 * @constructor
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 */
constructor(email, password) {
  this.email = email;
  this.password = password;
}

/**
 * Get the password in uppercase
 * @returns {string} The password in uppercase
 */
get password() {
  return this._password.toUpperCase();
}

/**
 * Set the password value.
 * @param {string} value - The password value to be set.
 */
set password(value) {
  this._password = value;
}
  // when we set the set method the constructor is called again and again resulting in  a 'maximum call stack size exceeded error'
  //the constructor and the setter gets in a race as to whole will set the value,this results in the occurence of the error
  //to fix this error we add a '_' before the member 'password' in both the getter and setter
}

const tushar = new User("tushar@gmail.com", "abc");
console.log(tushar.password);
