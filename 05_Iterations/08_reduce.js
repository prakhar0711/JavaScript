const num = [1, 2, 3, 4];

// const sum = num.reduce(function (acc, currval) {
//   console.log(`acc=${acc} currval=${currval}`);
//   return acc + currval;
// }, 0);
// console.log(sum);

const shoppingCart = [
  {
    itemName: "abc",
    price: 6000,
  },
  {
    itemName: "xyz",
    price: 5000,
  },
  {
    itemName: "lmn",
    price: 3000,
  },
];

const totalprice = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(totalprice);
