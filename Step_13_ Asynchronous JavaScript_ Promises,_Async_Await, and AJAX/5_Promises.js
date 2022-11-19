"use strict";

/*
creating a immplicit promise new Promise is a class in which we can pass the constructor execuator function ehich takes two arugumentative callback functions  and we can use them for the resolve or reject puposes.
*/
/*Promisefying:
     When we are encapsulated the Async task(callBack based) inside the promise then this Async task become promise and we can access it firstly in the microtask services
*/
const lotteryTicket = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You win the lottery");
    } else {
      reject(new Error("You lose the lottery"));
    }
  }, 2000);
});

lotteryTicket
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

/*Encapuslating the callback setTimout functions and resolve the issue of the callback hell also
 */
const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};
wait(1)
  .then(() => {
    console.log("Wait for the 1 seconsds");
    return wait(1);
  })
  .then(() => {
    console.log("Wait for the 2 seconsds");
    return wait(1);
  })
  .then(() => {
    console.log("Wait for the 3 seconsds");
    return wait(1);
  })
  .then(() => {
    console.log("Wait for the 4 seconsds");
    return wait(1);
  });


/*Promise static functions
*/
Promise.resolve('Muhib Arshad').then(res=>{console.log(res)});
Promise.reject(new Error('Something when wrong')).catch(err=>{console.error(err)})