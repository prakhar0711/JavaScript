//Dates

let myDate = new Date();
console.log(typeof myDate); //object
console.log(myDate.toString()); //Mon Jan 29 2024 15:55:13 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Mon Jan 29 2024
console.log(myDate.toTimeString()); //15:55:13 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString()); //29/1/2024
console.log(myDate.toISOString()); //2024-01-29T10:26:44.875Z
console.log(myDate.toUTCString()); //Mon, 29 Jan 2024 10:27:35 GMT
console.log(myDate.toLocaleString()); //29/1/2024, 3:57:54 pm
console.log(myDate.toLocaleTimeString()); //3:58:10 pm

//month starts from 0 in javascript, 0->January
let createdDate = new Date(2024, 0, 29);
console.log(createdDate.toDateString()); //Mon Jan 29 2024

//specific format date
let newCreatedDate = new Date("2024-01-29");
console.log(newCreatedDate.toDateString()); //Mon Jan 29 2024
// mm-dd-yyyy, yyyy-mm-dd

let myTimeStamp = Date.now();
// console.log(myTimeStamp);//1706524417341 ms since 1970
// console.log(createdDate.getTime());//1706466600000
console.log(Math.floor(Date.now() / 1000));//1706524586


