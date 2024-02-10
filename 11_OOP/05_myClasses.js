// class is a keyword

class User {
  //constructor is called when an object is initialised
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("tushar", "chaigmail.com", "123");
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//behind the scenes or you can say class is just a syntactical sugar in javascript

function User2(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User2.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

const chai2 = new User2("tea", "teagmail.com", "xyz");
console.log(chai2);
console.log(chai2.encryptPassword());
