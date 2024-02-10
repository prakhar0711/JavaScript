class User {
  constructor(username) {
    this.username = username;
  }

  //class method
  logMe() {
    console.log(`${this.username} logged in successfully`);
  }

  //now we want to assign an id whenever a user is created
  static createId() {
      //static is used to restrict createId access to others
      //doesnt let any child access the function
    return `123`;
  }
}

const tushar = new User("tushar");
tushar.createId();  //throws error

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const teach = new Teacher("teacher", "i@gmail.com");
console.log(teach);

teach.logMe()
console.log(teach.createId());