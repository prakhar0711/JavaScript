const coding = ["js", "C++", "java"];
// callback function does not contain a function name
// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "javascript",
    languagefilename: "js",
  },
  {
    languageName: "python",
    languagefilename: "py",
  },
  {
    languageName: "java",
    languagefilename: "java",
  },
];

myCoding.forEach((item, index) => {
  console.log(index, item);
});

myCoding.forEach((item, index) => {
  console.log(index, item.languageName);
});

myCoding.forEach((item, index) => {
  console.log(index, item.languagefilename);
});
