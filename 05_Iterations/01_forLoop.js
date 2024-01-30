// for loop
// for (let i = 0; i < 5; i++) {
//     if (i == 3) {
//         console.log("3 is printed");
//     }
//     console.log(i)
// }

//nested for loop
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`outer loop ${i} inner loop ${j}`);
//     }
// }

// const newArr = [1, 2, 3, 4, 5]

// for (let index = 0; index < newArr.length; index++) {
//     console.log(newArr[index]);

// }

// break and continue

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    console.log("3 is printed");
    break;
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    console.log("3 is printed");
    continue;
  }
  console.log(i);
}
