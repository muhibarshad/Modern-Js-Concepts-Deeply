'use strict'
//Reveal Elements on the scroll
const allSections = document.querySelectorAll(".section");
const revealElements = new IntersectionObserver(
  (enteries, observer) => {
    const [entery] = enteries;
    if (!entery.isIntersecting) return;
    entery.target.classList.remove("section--hidden");
    observer.unobserve(entery.target);
  },
  {
    root: null,
    threshold: 0.15,
  }
);
allSections.forEach((section) => {
  revealElements.observe(section);
  section.classList.add("section--hidden");
});
