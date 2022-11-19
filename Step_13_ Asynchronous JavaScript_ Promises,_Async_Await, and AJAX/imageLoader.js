"use strict";

const contanier = document.querySelector(".contanier");
let currentImg = "";
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement("img");
    img.src = `${imgPath}`;
    img.addEventListener("load", function () {
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Imgage not found"));
    });
  });
};

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

createImage(
  "/Step_13_ Asynchronous JavaScript_ Promises,_Async_Await, and AJAX/Jones_starter_file/img/img-1.jpg"
)
  .then((resImg) => {
    currentImg = resImg;
    contanier.append(currentImg);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return wait(2);
  })
  .then(() => {
    return createImage(
      "/Step_13_ Asynchronous JavaScript_ Promises,_Async_Await, and AJAX/Jones_starter_file/img/img-2.jpg"
    );
  })
  .then((resImg) => {
    currentImg = resImg;
    contanier.append(currentImg);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return wait(2);
  })
  .then(() => {
    return createImage(
      "/Step_13_ Asynchronous JavaScript_ Promises,_Async_Await, and AJAX/Jones_starter_file/img/img-3.jpg"
    );
  })
  .then((resImg) => {
    currentImg = resImg;
    contanier.append(currentImg);
    return wait(2);
  })
  .catch((err) => console.error(err));
