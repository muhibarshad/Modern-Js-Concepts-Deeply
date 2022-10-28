'use strict';

//===========METHOD:01=================(Very Bad way)
// Scrolling_Sticky_NavBar
const initialCoordinates = sectionToScroll.getBoundingClientRect();
window.addEventListener("scroll", () => {
  let currentPos = window.scrollY;
  currentPos > initialCoordinates.top
    ? navBar.classList.add("sticky")
    : navBar.classList.remove("sticky");
});


//===========METHOD:02=================(Very Effiecient way)
// Scrolling_Sticky_NavBar
//IntersectingAPI_with the observer
/*Actually, when the certain target element comes intersebt with the other element on which we apply the intersecting api then the certain function calls. The intersection happens when the object of API interseting root comes true, by doing this we can not have to call every time the scroll function as we can already done in teh above portion.root margin can fix the problem of rootMargin*/
const heade = document.querySelector(".header");
const navBar_height = navBar.getBoundingClientRect().height;
const observer = new IntersectionObserver(
  (enteries) => {
    const [entry] = enteries;
    !entry.isIntersecting
      ? navBar.classList.add("sticky")
      : navBar.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `${navBar_height}px`,
  }
);
observer.observe(heade);