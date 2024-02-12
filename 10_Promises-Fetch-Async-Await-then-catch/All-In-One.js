//#1
//Try each snippet with error=true and false
const promiseOne = new Promise(function (resolve, reject) {
  //do an async task
  //DB calls
  //Cryptography related tasks
  //network related tasks
  setTimeout(function () {
    console.log("async task is complete");
    //connect resolve and .then
    resolve();
  }, 1000);
});
//consumption
promiseOne.then(function () {
  console.log("promise consumed successfully");
});

//#2 another way of doing it
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

//#3
new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "prakhar",
      email: "abc@gmail.com",
    });
  }, 1000);
}).then(function (user) {
  console.log(user);
});

//#4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "tushar",
        email: "xyz@gmail.com",
      });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});
//.then chaining
promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("all process completed");
  });
//.finally runs no matter what promise is resolve or rejected

//#5-need not neccessary to use .then .catch we can use async and await
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        username: "promise5",
        email: "promise5@gmail.com",
      });
    } else {
      reject("promise5 went wrong");
    }
  }, 1000);
});

/**
 * Asynchronously consumes promiseFive and logs the response or any error
 */
async function consumePromiseFive() {
  try {
    // Await the promise and store the response
    const response = await promiseFive;
    // Log the response
    console.log(response);
  } catch (err) {
    // Log any errors
    console.log(err);
  }
}
consumePromiseFive();

//#6 fetch async await
/**
 * Fetches user data from a remote API and logs the result.
 */
async function getUsers() {
  try {
    // Fetch user data
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // Extract JSON data
    const data = await response.json();
    // Log the user data
    console.log(data);
  } catch (error) {
    // Log any errors
    console.log("Error fetching user data: ", error);
  }
}
getUsers();

//#7 fetch with .then amd catch

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// fetch initialises a special type of queue called micro task queue which is faster than task queue
//so fetch has the highest priority
