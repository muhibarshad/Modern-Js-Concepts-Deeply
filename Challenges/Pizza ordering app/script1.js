"use strict";

//varaibles
const pizzaMenu = document.querySelectorAll("td");
const overlay = document.querySelector(".size");
const okCancel = document.querySelectorAll(".btn");
const sizeMenu = document.querySelectorAll(".s");
const cancel = document.querySelector(".cancel");
const ok = document.querySelector(".OK");
const price = document.querySelector(".price");
const orderNow = document.querySelector(".order");
const cancelOrder = document.querySelector(".cancelOrder");
const pricesPizza = [
  [600, 500, 350, 400, 320, 250],
  [800, 650, 550, 630, 720, 670],
  [1200, 990, 1050, 890, 1000, 800],
];

let pizzaIndex = 0;
let pizzaName = "";
let sizeName = "large";
let priceName = "";
//Data of pizza
let orderDetails =  {
  namePizza: "",
  sizePizza: sizeName,
  pricePizza: "",
  noOfpizza: 1,
};
let CurrentPersonOrders = [];
const totalOrders = [];

//supporting-functions
const modelShow = function () {
  overlay.classList.toggle("hidden");
};
const deafultSelection = function () {
  for (let i = 0; i < sizeMenu.length; i++) {
    sizeMenu[i].style.backgroundColor = "rgb(202, 124, 0)";
  }
};
const defaultStarter = function () {
  sizeMenu[2].style.backgroundColor = "green";
};

//default starters
defaultStarter();

//show model-pizzaSelection
for (const [index, ele] of pizzaMenu.entries()) {
  pizzaMenu[index].addEventListener("click", modelShow);
  pizzaMenu[index].addEventListener("click", function () {
    pizzaName = pizzaMenu[index].innerText;
    priceName = pricesPizza[2][index];
    price.innerText = priceName;
    orderDetails.pricePizza = priceName;
    pizzaIndex = index;
    orderDetails.namePizza = pizzaName;
    document.querySelector(".name").innerText = pizzaName;
  });
}

//remove model
for (const [index, ele] of okCancel.entries())
  okCancel[index].addEventListener("click", modelShow);

//selectSize
for (const [index, ele] of sizeMenu.entries()) {
  sizeMenu[index].addEventListener("click", function () {
    deafultSelection();
    sizeMenu[index].style.backgroundColor = "green";
    priceName = pricesPizza[index][pizzaIndex];
    price.innerText = priceName;
    sizeName = sizeMenu[index].innerText;
    orderDetails.sizePizza = sizeName;
    orderDetails.pricePizza = priceName;
  });
}
//OnCancel
cancel.addEventListener("click", function () {
  deafultSelection();
  defaultStarter();
});

//onOk
ok.addEventListener("click", function () {
  pizzaMenu[pizzaIndex].classList.add("selected");
  orderNow.classList.add("confirm");
  CurrentPersonOrders.push(orderDetails);
  console.log(orderDetails);
  console.log(CurrentPersonOrders);
});
//cancelOrder
cancelOrder.addEventListener("click", function () {
  pizzaMenu[pizzaIndex].classList.remove("selected");
  orderNow.classList.remove("confirm");
});
