// const tinderUser = new Object(); //singleton object
const tinderUser = {}; //non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "tushar";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "tushar",
      lastname: "kumar",
    },
  },
};
// console.log(regularUser.fullname);//{ userfullname: { firstname: 'tushar', lastname: 'kumar' } }

//combine objects

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

// const obj3={obj1,obj2} // object of object
// const obj3=Object.assign({},obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "a@a.com",
  },
  {
    id: 1,
    email: "b@a.com",
  },
  {
    id: 1,
    email: "a@a.com",
  },
];

// console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //return arrays of keys and then can apply loop on it
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));
