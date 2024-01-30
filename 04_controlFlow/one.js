//can combine with and(&&) , or(||) , not(!) operators
// *********** if statement *******
// if (condition) {
//     // code to be executed if condition is true
// }
if(2===2){
    console.log("2 is equal to 2");
}



// ************ if-else statement ********
// if (condition) {
//     // code to be executed if condition is true
// } else {
//     // code to be executed if condition is false
// }
if (5 < 4){
    console.log("5 is less than 4");
}else{
    console.log("5 is greater than 4");
}



//******************* if-else-if statement ********
// if (condition1) {
//     // code to be executed if condition1 is true
// } else if (condition2) {
//     // code to be executed if condition1 is false and condition2 is true
// } else {
//     // code to be executed if condition1 and condition2 are false
// }
if(5<5){
    console.log("5 is less than 4")
}else if(5 === 5){
    console.log("5 is equal to 5")
}



// ********************* switch statement ************
// switch (expression) {
//     case value1:
//         // code to be executed if expression is value1
//         break;
//     case value2:
//         // code to be executed if expression is value2
//         break;
//     default:
//         // code to be executed if expression is neither value1 nor value2
// }
switch(2){
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        console.log("enter valid input")
}



// ternary operator
// condition ? expression1 : expression2
console.log(10 < 11 ? "10 is less than 11" : "10 is greater than or equal to 11")




