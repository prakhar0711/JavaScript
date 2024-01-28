// console.log(2 > 1);
// console.log(2 <= 1);
// console.log(2 == 2);
// console.log(2 != 1);

// console.log("2" > 1); //auto conversion


/*  
comparison(<,>,>=,<=) and equality check(==) work differently.Compariosn convert null to a number, treating it as 0
*/
// console.log(null > 0);         //false
// console.log(null == 0);        //false
// console.log(null >= 0);        //true

// console.log(undefined > 0);    //false
// console.log(undefined == 0);   //false
// console.log(undefined >= 0);   //false

// (===) strict check,checks data types also
console.log("2"==2);  //true
console.log("2"===2); //false