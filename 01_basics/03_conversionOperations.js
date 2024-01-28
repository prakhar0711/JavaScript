/*
"33" -> 33
"33abc" -> NaN
true -> 1
false -> 0
null -> 0
undefined -> NaN
*/

// let score="33";
// console.log(typeof score);
// console.log(typeof(score));
// let valueInNumber=Number(score) //convert to number
// console.log(typeof valueInNumber);//returns number
// console.log(valueInNumber) //returns 33

// let score = "abc33";
// console.log(typeof score);
// console.log(typeof score);
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);//returns number
// console.log(valueInNumber);//returns NaN

// let score = null;
// console.log(typeof score);
// console.log(typeof score);
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); //returns number
// console.log(valueInNumber);  //returns 0

// let score = undefined;
// console.log(typeof score);
// console.log(typeof score);
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); //returns number
// console.log(valueInNumber); //returns NaN

/*
1=>  true 0=>false
""=>false
"asds"=>true
*/

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); //returns true

// let someNum=33
// let stringNum=String(someNum);
// console.log(stringNum);
// console.log(typeof stringNum);

//  ****************OPERATIONS**********************

let value = 3;
let negValue = -value;
// console.log(negValue); //returns -3

//operations
// console.table([ 2+2,2-2,2*2,10/2,2**9,10%3]);

// let str1="abc";
// let str2="xyz";
// console.log(str1+str2); //returns abcxyz
// console.log(str1+" "+str2); //returns abc xyz
// console.log(`${str1} ${str2}`); //returns abc xyz

// console.log("1"+2); //12
// console.log(1+"2"); //12

// let a=1
// let b="2"
// let c=a+b
// console.log(c);
// console.log(typeof c);

// console.log("1" + 2 + 2);//122
// console.log(2 + 2 + "1");//41

// bad practice
// let num1,num2,num3
// num1=num2=num3=2+2

// prefix and postfix , study mdn docs
let gcounter=100
gcounter++
console.log(gcounter);