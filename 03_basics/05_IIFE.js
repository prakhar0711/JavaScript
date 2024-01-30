// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
//to prevent problem caused from global scope pollution
(function chai() {
  // named IIFE
  console.log("tushar");
})();

(() => {
  console.log("hello");
})();

((name) => {
  console.log(`${name}`);
})("tushar123");
