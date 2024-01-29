//array declarations
const myArr = [0, 1, 2, 3, 4, 5];
const myCars = ["bmw", "audi", "benz", "toyota"];
const myArr2 = new Array(1, 2, 3, 4, 5);
//indexing starts from 0
// console.log(myArr[2]);//2
// console.log(myCars[2]);//benz

//array methods
//length
// console.log(myArr.length);//10
// console.log(myCars.length);//4
//push
// myArr.push(10);
// myArr.push(11);
// myArr.push(12);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

//unshift and shift are just like push and pop but from the start

// console.log(myArr.includes(9)); //boolean -true

const newArr = myArr.join(); //binds and changes to type string
// console.log(newArr);

//slice and splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 4);
console.log(myn1);
console.log("B ", myArr);
//splice removes elements of range from original array
const myn2 = myArr.splice(1, 4);
console.log("C ", myArr);
console.log(myn2);
