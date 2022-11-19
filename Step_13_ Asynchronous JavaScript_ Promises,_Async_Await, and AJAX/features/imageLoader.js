"use strict";

///Step_13_ Asynchronous JavaScript_ Promises,_Async_Await, and AJAX/Jones_starter_file/img/img-2.jpg
let currentImage = "";
const contanier = document.querySelector(".container");
const imgContanier = document.querySelector(".images");
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = `${imgPath}`;
    img.addEventListener("load", () => {
      imgContanier.append(img);
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("Error:Image path not found!"));
    });
  });
};
const wait = function (sec) {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};
const imageLoading = async function (path) {
  currentImage = await createImage(path);
  imgContanier.append(currentImage);
  await wait(2);
  currentImage.style.display = "none";
  await wait(2);
};

// To get the changing images continously
const loadNPause = async function () {
  try {
    await imageLoading(
      "/Step_13_ Asynchronous JavaScript_ Promises,_Async_Await, and AJAX/Jones_starter_file/img/img-1.jpg"
    );
    await imageLoading(
      "/Step_13_ Asynchronous JavaScript_ Promises,_Async_Await, and AJAX/Jones_starter_file/img/img-2.jpg"
    );
    await imageLoading(
      "/Step_13_ Asynchronous JavaScript_ Promises,_Async_Await, and AJAX/Jones_starter_file/img/img-3.jpg"
    );
  } catch (err) {
    console.error(`${err.message}`);
  }
};
loadNPause();

//Laod ll teh images at the same time
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgsArr = await Promise.all(imgs);
    imgsArr.forEach((img) => {
      img.classList.add("parallel");
    });
  } catch (err) {
    console.error(err);
  }
};

const arr = [
  "/Step_13_ Asynchronous JavaScript_ Promises,_Async_Await, and AJAX/Jones_starter_file/img/img-1.jpg",
  "/Step_13_ Asynchronous JavaScript_ Promises,_Async_Await, and AJAX/Jones_starter_file/img/img-2.jpg",
  "/Step_13_ Asynchronous JavaScript_ Promises,_Async_Await, and AJAX/Jones_starter_file/img/img-3.jpg",
];

loadAll(arr);
