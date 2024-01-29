const marvel_heroes = ["spiderman", "thor", "hulk", "ironman"];
const dc_heroes = ["batman", "superman", "wonderwoman", "aquaman"];

// marvel_heroes.push(dc_heroes); //inserts an array inside the array

// console.log(marvel_heroes);
// console.log(marvel_heroes[4][2]);//wonderwoman

// const newArray=marvel_heroes.concat(dc_heroes)//concat returns a new array
// console.log(newArray);

//spread operator
// const all_heroes=[...marvel_heroes,...dc_heroes]
// console.log(all_heroes);

//********* IMP ***************
// const newArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const usable_array = newArray.flat(3);
// console.log(usable_array);

console.log(Array.isArray("tushar"));
//converts everything to array
console.log(Array.from("tushar"));

console.log(Array.from({ name: "tushar" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
