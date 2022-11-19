"use strict";

///Step_13_ Asynchronous JavaScript_ Promises,_Async_Await, and AJAX/Jones_starter_file/img/img-2.jpg
let currentImage = "";
const contanier = document.querySelector(".container");
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = `${imgPath}`;
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("Error:Image path not found!"));
    });
  });
};

const wait = function (sec) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2 * 1000);
  });
};

const loadNPause = async function (imgPath) {
  currentImage = await createImage(imgPath);
  console.log(currentImage)
  // contanier.append(currentImage);

};
loadNPause(
  "/Jones_starter_file/img/img-1.jpg"
);
