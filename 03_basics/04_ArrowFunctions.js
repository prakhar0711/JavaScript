const user = {
  username: "tushar",
  age: 23,
  welcomeMessage: function () {
    console.log(`${this.username} ,welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

