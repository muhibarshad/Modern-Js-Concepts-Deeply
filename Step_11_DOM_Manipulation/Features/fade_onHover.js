//Fade__onHover()
/*Actually when we simply calls the function in the event listener with the parameters then it returs some value but her we use the function that is returing nothing, so we use the bind method that uses this and return the copy of this function all the parameters in the bind method are in the this keyword so, we can use them in the function directly by using the this keyword. Every this referes to the copy of made by bind method.To pass more thena one arguments we can use them by arrays and objects.
 */
const navBar = document.querySelector(".nav");
const fadingNav__links = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const targetElement = e.target;
    const siblings = targetElement
      .closest(".nav")
      .querySelectorAll(".nav__link");
    const logo = targetElement.closest(".nav").querySelector("img");
    siblings.forEach((sibling) => {
      if (sibling != targetElement) sibling.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
navBar.addEventListener("mouseover", fadingNav__links.bind(0.5));
navBar.addEventListener("mouseout", fadingNav__links.bind(1));