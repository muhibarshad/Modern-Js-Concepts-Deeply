'use strict';
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
    rootMargin: "-200px",
    threshold: 0,
  }
);

allImages.forEach((img) => loadingImages.observe(img));