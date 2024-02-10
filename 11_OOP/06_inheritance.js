class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username is ${this.username}`);
  }
}

//syntax for inheritance. Here parent class is User and child is Teacher
class Teacher extends User {
  constructor(username, email, password) {
    super(username); //replacement for the .call method that takes in this.username also. super does everything behind the scenes
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`new course was added by ${this.username}`);
  }
}

const chai = new Teacher("tushar", "teachergmail.com", "abcdef");

console.log(chai);

chai.addCourse();

chai.logMe();

const tea = new User("prakhar");
console.log(tea);

console.log(chai === tea); //returns false

tea.addCourse();// tea cannot use the addCourse function which is in the class Teacher

