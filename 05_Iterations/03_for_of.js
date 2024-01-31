const arr = [1, 2, 3, 4, 5];
//for-of loop
// for (const num of arr) {
//   console.log(num); // 1 2 3 4 5
// }

// for (const num of "hello world") {
//   console.log(num); // hello  world
// }

//Maps
// maintains order,contains only unique values
const map = new Map();
map.set("IN", "India");
map.set("EU", "Europe");
map.set("FR", "France");
map.set("IN", "India"); // does not print this

// console.log(map); //Map(3) { 'IN' => 'India', 'EU' => 'Europe', 'FR' => 'France' }

for (const i of map) {
  console.log(i);
}

for (const [key, value] of map) {
  console.log(key, value);
}


// object is not iterable using for-of loop
const myObj = {
  name: "tushar",
  age: 21,
};
for (const [key, value] of myObj) {
  console.log(key, value);
}
