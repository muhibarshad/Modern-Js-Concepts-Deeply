"use strict";

//EVENT_LISTENER
let h1 = document.querySelector("h1");
let hoverMessage = (e) => {
  alert("Asslam Alaikum");
  h1.removeEventListener("mouseenter", hoverMessage);
};
h1.addEventListener("mouseenter", hoverMessage);
//Another way to add this is
h1.onclick = hoverMessage;
//Another Way is to add classically to direct to HTML





//Capturing , target and bubbling Concepts
/*Actually when we click on any eventListener then the event happens and it making true the other eventstill to its parent element.
*/
let randomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
let randomColor = () =>
  `rgb(${randomNumber(0, 255)},${randomNumber(0, 255)},${randomNumber(
    0,
    255
  )})`;
let nav = document.querySelector(".nav");
let lists = document.querySelector(".nav__links");
let link = document.querySelector(".nav__link");

link.addEventListener("click", (e) => {
  console.log("LINK",e.target,e.currentTarget);

//   e.stopPropagation();//To stop the propagation of the bubbling
});
lists.addEventListener("click", (e) => {
  console.log("LIST",e.target,e.currentTarget);
},true);

nav.addEventListener("click", (e) => {
  console.log("NAV",e.target,e.currentTarget);
},true);

//Note:
/*The e.target remains the same means that the same eventListener moves upward and show bubbling
Third parameter is to make true for the capturing and by default it is false and done bubbling
*/