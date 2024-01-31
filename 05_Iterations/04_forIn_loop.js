const myObj = {
  js: "javascript",
  ts: "typescript",
  cpp: "c++",
};

for (const key in myObj) {
  console.log(key); //js ts cpp
}

for (const key in myObj) {
  console.log(myObj[key]); //javascript c++ typescript
}

const myArr = [1, 2, 3, 4, 5];
for (const i in myArr) {
  console.log(i); //returns index whereas in for-of loop returns the value
}

//map is also not iterable using for-in
// const map = new Map();
// map.set("IN", "India");
// map.set("EU", "Europe");
// map.set("FR", "France");
// map.set("IN", "India");

// for (const key in map) {
//   console.log(key);
// }
