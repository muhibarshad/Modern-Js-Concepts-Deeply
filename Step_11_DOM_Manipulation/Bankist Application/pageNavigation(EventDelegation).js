"use strict";

//Firstly when we click on any navugation page bar then the bubbling comes and the parent events comes in, but on which the event occurs we can grab it by e.target then matches the classlist as it nots the parent classList, then take this tag href tag then implement the smooth scrolling bar

//Page_Navigation_Event_Delegation
document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
