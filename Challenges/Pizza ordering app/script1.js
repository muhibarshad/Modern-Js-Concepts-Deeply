"use strict";
const pizza = document.querySelectorAll("td");
const overlay = document.querySelector(".size");
const okCancel = document.querySelectorAll(".btn");
const sizeMenu = document.querySelectorAll(".s");

const modelShow = function () {
  overlay.classList.toggle("hidden");
};

//show model
for (const [index, ele] of pizza.entries())
  pizza[index].addEventListener("click", modelShow);

//remove model
for (const [index, ele] of okCancel.entries())
  okCancel[index].addEventListener("click", modelShow);

for (const [index, ele] of sizeMenu.entries()) {
  sizeMenu[index].addEventListener("click", function () {
    for (let i = 0; i < sizeMenu.length; i++) {
      sizeMenu[i].style.backgroundColor = "rgb(202, 124, 0)";
    }
    sizeMenu[index].style.backgroundColor == "green"
      ? (sizeMenu[index].style.backgroundColor = "rgb(202, 124, 0)")
      : (sizeMenu[index].style.backgroundColor = "green");
  });
}
