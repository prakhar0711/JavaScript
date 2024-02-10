//getters and setters are used to define a specific behaviour whenever a user is trying to access a class member is accessed
//if defined a getter you must define a setter also else it wont work

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
  // when we set the set method the constructor is called again and again resulting in  a 'maximum call stack size exceeded error'
  //the constructor and the setter gets in a race as to whole will set the value,this results in the occurence of the error
  //to fix this error we add a '_' before the member 'password' in both the getter and setter
}

const tushar = new User("tushar@gmail.com", "abc");
console.log(tushar.password);
