let myName = "Tushar";
//myName will have some properties by default such as .length
console.log(myName.length); //returns 6

//now consider the below example
let myName2 = "Tushar         ";
console.log(myName2.length); //returns 15 counts the spaces also

//we will create a method truelength that will consist of trim.lenght function to only count the characters and not the whitespaces
//before creating that we will first understand a few things

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};

/**
 * This prototype adds a method to all objects.
 */
Object.prototype.tushar = function () {
  console.log("tushar is present in all objects");
};

//now both the array and the object contains the method tushar()
heroPower.tushar();
myHeroes.tushar();

/**
 * Adds a new function heyTushar to the Array prototype.
 * This function logs a greeting from Tushar.
 */
Array.prototype.heyTushar = function () {
  console.log("tushar says hello");
};

//heroPower.heyTushar();//gives error
myHeroes.heyTushar(); // returns 'tushar says hello'


//from lines 32-37 we can conclude that if a prototype if give to an array it is not reflected to Object
//but if prototype is injected to an Object data type then it will work on all data with typeof object