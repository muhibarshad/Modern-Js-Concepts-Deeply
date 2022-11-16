/*JAvsScript run-tinme engine is a place where the javascript code will runs.Javscript engine is composite of callStack , heap.Javscript is a single thread execuation language, means one task performs at one time, no multiple portions of code will run at a same time.But stop What the f*ck ?😟 Javscript is Asynchornous aslo then how Javscript performs its non-blocking behaviour in Asynchoronus tasks.
let now answer it.
Answer:
 To performm the Asynchornous task 4 operations work together to perform Async. task with non-blocking the execuation.
 1.callStack execuation context
 2.callback queue
 3.web APIs enviornment
 4.Event loop
 One thing that I have to include here is that when we are fetching data from the APIs with promises then One additional fifth point will be added here is 
 5.microtasks queue 
 I will firstly discuss the other Aysnc. task how works and in the end i will discuss about the promises also
 Now starts performing task for the image loading with the DOM API or doing setTimeout() or addEventListener of 'load' event type Async. tasks aving callBack functions.When our interpreted line of code reaches at the Async. task then the Async task go to the web API enviornment and runs in it. And the other code continues it executaion in the call stack.The callBack functions alos goes to the Web Api enviornment , when the Async task is completed and the event is fired then the callback functions put or goes to the callback queue from where the event loop waits the execation stack is empty then event loop put the callback function from the callback queue to the callSatck execuation context where it executes. and thats it.
 In the case of promises the callBack function after the event is fired not goes to the callBack queue it goes to teh microtasks queue , event loop puts firstly the callbacks from the microtask queue and then from the callback queue.Actually the microstasks queue has a priority on the callback queue.
 And this is how the non-blocking async. functionality of the javascript actually works behind the scenes.

 So,when there is the timers API in the callback queue is 1 second and the prmoise callback in the queue is operated first and suppose it take time for 4 seconds to execute then firstly event loop put this microtask queue callback to the execuation context and executes it and takr 4 seconds then when the call stack and the microtask queue is empty then the callback queue timer of 1 second goes to the execuation context by event loop and execute. so this means that timer is actually runs after the 5 seconds not 1 second  so timers are not gurante to perform at the time given when we are dealing with the both timers and promises.


*/
console.log("First line"); //1.

setTimeout(() => {
  console.log("Muhib Arshad");
}, 0);//5.

Promise.resolve("Ali Abdullah").then((res) => {
  console.log(res);
}); //3.

Promise.resolve("Bilal Sharafat").then((res) => {
  console.log(res);
});  //4.

console.log("Last line"); //2.
