// //implicit type declaration
// const score = 400;
// console.log(score); //400

// //explicit type declaration
// const balance = new Number(1000);
// console.log(balance); //[Number: 1000]

// console.log(balance.toString()); //1000

// console.log(balance.toFixed(2)); //1000.00

// const newNum = 23.9856;
// console.log(newNum.toPrecision(3)); //24.0

// const hundreds = 100000;
// console.log(hundreds.toLocaleString()); //1,00,000

// ************************ MATHS ***********************
console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.7234));
console.log(Math.ceil(4.11));
console.log(Math.floor(4.11));
console.log(Math.pow(2, 3));
console.log(Math.random()); //returns number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); //1-10, +1 avoids 0

//IMP
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/* 
*************** CONSTANTS ************

E: The base of the natural logarithm, approximately equal to 2.718281828459045.

LN10: The natural logarithm of 10, approximately equal to 2.302585092994046.

LN2: The natural logarithm of 2, approximately equal to 0.6931471805599453.

LOG10E: The base 10 logarithm of E, approximately equal to 0.4342944819032518.

LOG2E: The base 2 logarithm of E, approximately equal to 1.4426950408889634.

PI: The mathematical constant pi, approximately equal to 3.141592653589793.

SQRT1_2: The square root of 1/2, approximately equal to 0.7071067811865476.

SQRT2: The square root of 2, approximately equal to 1.4142135623730951.

*********** FUNCTIONS ************

abs(): Returns the absolute value of a number.


acos(): Returns the arccosine of a number in radians.


acosh(): Returns the hyperbolic arccosine of a number.


asin(): Returns the arcsine of a number in radians.


asinh(): Returns the hyperbolic arcsine of a number.


atan(): Returns the arctangent of a number in radians.


atan2(): Returns the arctangent of the quotient of its arguments.


atanh(): Returns the hyperbolic arctangent of a number.


cbrt(): Returns the cube root of a number.


ceil(): Returns the smallest integer greater than or equal to a number.


clz32(): Returns the number of leading zero bits in the 32-bit binary representation of a number.


cos(): Returns the cosine of a number in radians.


cosh(): Returns the hyperbolic cosine of a number.


exp(): Returns Ex, where x is the argument, and E is Euler's number (approximately 2.718).


expm1(): Returns Ex - 1, where x is the argument, and E is Euler's number.


floor(): Returns the largest integer less than or equal to a number.


fround(): Returns the nearest single precision float representation of a number.


hypot(): Returns the square root of the sum of squares of its arguments.


imul(): Returns the result of a 32-bit integer multiplication.


log(): Returns the natural logarithm (base E) of a number.


log10(): Returns the base 10 logarithm of a number.


log1p(): Returns the natural logarithm of 1 + a number.


log2(): Returns the base 2 logarithm of a number.


max(): Returns the largest of zero or more numbers.


min(): Returns the smallest of zero or more numbers.


pow(): Returns base to the exponent power, that is, baseexponent.


random(): Returns a pseudo-random number between 0 and 1.


round(): Returns the value of a number rounded to the nearest integer.


sign(): Returns the sign of a number, indicating whether the number is positive, negative, or zero.


sin(): Returns the sine of a number in radians.


sinh(): Returns the hyperbolic sine of a number.


sqrt(): Returns the square root of a number.


tan(): Returns the tangent of a number in radians.


tanh(): Returns the hyperbolic tangent of a number.


trunc(): Returns the integer part of a number by removing any fractional digits.


 */
