"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const openModal = function (e) {
  e.preventDefault();
  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;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//ADDING_COOKIES(SELECTING_CREATING_DELETING_ELEMENTS)
const header = document.querySelector(".header");
const cookieMessage = document.createElement("div");
cookieMessage.classList.add("cookie-message");
cookieMessage.innerHTML =
  'We have use your functionality and add it to the cookies <button class="btn btn--close--cookie">Got it!</button>';
header.append(cookieMessage);
document
  .querySelector(".cookie-message")
  .addEventListener("click", function () {
    cookieMessage.remove();
  });

//SmoothScrolling
let btnScroll = document.querySelector(".btn--scroll-to");
let sectionToScroll = document.querySelector("#section--1");
btnScroll.addEventListener("click", (e) => {
  sectionToScroll.scrollIntoView({ behavior: "smooth" });
});

//Page_Navigation_Event_Delegation
document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//Tabbed Component_on_every_click the random page changes
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
tabsContainer.addEventListener("click", (e) => {
  const elementClicked = e.target.closest(".operations__tab");
  if (!elementClicked) return;
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  elementClicked.classList.add("operations__tab--active");
  tabsContent.forEach((tab) =>
    tab.classList.remove("operations__content--active")
  );
  document
    .querySelector(`.operations__content--${elementClicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//Fade__onHover()
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

//Scrolling_Sticky_NavBar
//IntersectingAPI_with the observer
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
  // section.classList.add("section--hidden");
});

//Lazy_Loading_Images
const allImages = document.querySelectorAll("img[data-src]");
const loadingImages = new IntersectionObserver(
  (enteries, observer) => {
    const [entery] = enteries;
    if (!entery.isIntersecting) return;
    entery.target.src = entery.target.dataset.src;
    entery.target.addEventListener("load", () => {
      entery.target.classList.remove("lazy-img");
    });
    observer.unobserve(entery.target);
  },
  {
    root: null,
    rootMargin: "-200px", //run fucntion before 200px of the image reaching
    threshold: 0,
  }
);
allImages.forEach((img) => loadingImages.observe(img));

// DOM_lifeCycle(stay_on_page)
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});

//Slider
const movingSlider = function () {
  //variables
  const leftSlide_btn = document.querySelector(".slider__btn--left");
  const rightSlide_btn = document.querySelector(".slider__btn--right");
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");
  const dotsContanier = document.querySelector(".dots");
  let maxSlides = slides.length;
  let curSlide = 0;
  //By Buttons
  const sliderMovement = (curSlide) => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
    });
  };
  const nextSlide = () => {
    curSlide === maxSlides - 1 ? (curSlide = 0) : curSlide++;
    sliderMovement(curSlide);
    activeDot(curSlide);
  };
  const previousSlide = () => {
    curSlide === 0 ? (curSlide = maxSlides - 1) : curSlide--;
    sliderMovement(curSlide);
    activeDot(curSlide);
  };
  //By Dots
  const creatingDots = function () {
    slides.forEach((_, index) => {
      dotsContanier.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${index}"></button>`
      );
    });
  };
  const activeDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };
  dotsContanier.addEventListener("click", function (e) {
    const { slide } = e.target.dataset;
    sliderMovement(slide);
    activeDot(slide);
  });
  //By arrowKeys
  document.addEventListener("keydown", (e) => {
    e.key === "ArrowRight" && nextSlide();
    e.key === "ArrowLeft" && previousSlide();
    activeDot(curSlide);
  });
  //Initilazer
  const init = () => {
    sliderMovement(0);
    creatingDots();
    activeDot(0);
  };
  init();
  rightSlide_btn.addEventListener("click", nextSlide);
  leftSlide_btn.addEventListener("click", previousSlide);
};
movingSlider();




