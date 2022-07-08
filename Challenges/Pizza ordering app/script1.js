"use strict";

/*First page*/

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
const error = document.querySelector(".error");
const pageOne = document.querySelector(".contanier");
const pageTwo = document.querySelector(".contanier-new");
let finalPrice = document.querySelector(".inner-total-price");
const pricesPizza = [
  [600, 500, 350, 400, 320, 250],
  [800, 650, 550, 630, 720, 670],
  [1200, 990, 1050, 890, 1000, 800],
];

//Data of pizza and customers
let pizzaIndex = 0;
let pizzaName = "";
let sizeName = "large";
let priceName = "";
let CurrentPersonOrders = [];
let totalOrders = [];

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
  pizzaMenu[index].addEventListener("click", function () {
    modelShow();
    pizzaIndex = index;
    pizzaName = pizzaMenu[index].innerText;
    priceName = pricesPizza[2][index];
    price.innerText = priceName;
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
  });
}

//initial-condition
const initial = function () {
  deafultSelection();
  defaultStarter();
  for (const [i, el] of pizzaMenu.entries()) {
    pizzaMenu[i].classList.remove("selected");
  }
  orderNow.classList.remove("confirm");
};

//OnCancel
cancel.addEventListener("click", initial);

//onOk
ok.addEventListener("click", function () {
  pizzaMenu[pizzaIndex].classList.add("selected");
  orderNow.classList.add("confirm");
  let orderDetails = {
    namePizza: pizzaName,
    sizePizza: sizeName,
    pricePizza: priceName,
    noOfpizza: 1,
  };
  CurrentPersonOrders.push(orderDetails);
  error.classList.contains("hidden") || error.classList.add("hidden");
});
//orderNow
let flag1 = false;
orderNow.addEventListener("click", function () {
  if (CurrentPersonOrders.length === 0) {
    error.classList.remove("hidden");
  } else {
    totalOrders.push(CurrentPersonOrders);
    //second page
    let table = document.querySelector(".tableOf2nd-new");
    let html = "";
    let totalPrice = 0;
    html = "";
    for (let {
      namePizza,
      sizePizza,
      pricePizza,
      noOfpizza,
    } of CurrentPersonOrders) {
      const tester = function () {
        console.log("ali");
      };
      html += `<table class="table2">
  <tr>
    <td>${namePizza}</td>
    <td>${sizePizza}</td>
    <td><button class="NO_OF_PIZZA">
      ${noOfpizza}
    </button>
    <button class="plusMinus  plus ">
      +
    </button>
    <button class="plusMinus  minus">
      -
    </button></td>
    <td>${pricePizza}</td>
  </tr>
  </table>`;
      totalPrice += pricePizza;
      flag1=true;
      console.log(flag1);
    }
    table.innerHTML = html;
    CurrentPersonOrders = [];
    pageOne.classList.add("hidden");
    pageTwo.classList.remove("hidden");
    finalPrice.innerText = totalPrice;
    initial();
  }
});
//cancelOrder
cancelOrder.addEventListener("click", function () {
  initial();
  CurrentPersonOrders = [];
});

/*Second page*/

//varibles
let flag = false;
let confirm = document.querySelector(".button");
let btnNew = document.querySelector(".btn-new");
let inputValues = document.querySelectorAll("input");

//confirm color changing on complete input field
document.addEventListener("keydown", function () {
  let count = 0;
  for (const [index, value] of inputValues.entries()) {
    if (value.value !== "") {
      count++;
      if (count === 4) {
        btnNew.style.backgroundColor = "rgb(0, 100, 188)";
        btnNew.style.color = "white";
      } else {
        btnNew.style.backgroundColor = "rgb(190, 225, 255)";
        btnNew.style.color = "black";
      }
    }
  }
});

//Input validation
confirm.addEventListener("click", function () {
  for (const [index, Value] of inputValues.entries()) {
    if (Value.value === "") {
      Value.placeholder = "Error ! 🚫  Input field is missing ⛔";
      Value.style.borderBottom = " 2px solid red";
      flag = true;
    }
  }
  if (flag === true) {
    for (const [indexs, valueQ] of inputValues.entries()) {
      document.addEventListener("keydown", function () {
        if (valueQ.value !== "") {
          valueQ.style.borderBottom = " 1px solid black";
        }
      });
    }
  }
});

const changeNo = document.querySelectorAll(".NO-new");
for (const item of changeNo) {
  item.addEventListener("change", function () {
    console.log(this.value);
  });
}

//calculate the price on no changing

/*********************PESUDOCODE REMAINING FUNCTIONS*************************/
/*Oredr page script*/
/****First part*/
//calculate the price on no changing
//chnage the total price according to it

/****Second part****/
//on confirm display the another page
//page having the payment method
//page also includes all the details
//on payment display the dialog box of all the details
//incudding date /time/cash delivered/person details/pizzadetails

//changing price on button click;
console.log(flag1);