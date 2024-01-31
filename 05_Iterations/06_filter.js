// const coding = ["js", "C++", "java"];

// const values = coding.forEach((item) => {
//   console.log(item);//returns js C++ java
// });
// console.log(values); //returns undefined

// const values = coding.forEach((item) => {
//   //console.log(item);
//   return item; //returns js C++ java
// });
// console.log(values); //returns undefined
//forEach never returns anything
// *************************************************************
//filter returns something
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const values = myNums.filter((num) => {
//   return num > 5;
// });
// console.log(values);


//returning with forEach
const newNums = [];
myNums.forEach((num) => {
  if (num > 5) {
    newNums.push(num);
  }
});
console.log(newNums);
