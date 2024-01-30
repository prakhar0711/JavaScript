function calculateCartPrice(val1, val2, ...num1) {
  //rest operator,  2 and 3 goes to val1 and val2 rest to num1
  return num1;
}

// console.log(calculateCartPrice(2, 3, 4, 5, 6, 7, 8, 9));

const user = {
  username: "tushar",
  price: 200,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
// handleObject(user);
// handleObject({
//   username: "sam",
//   price: 300,
// });

const myNewArray = [200, 400, 100];
function handleArray(anyArray) {
  console.log(`${anyArray[2]}`);
}
handleArray(myNewArray);
