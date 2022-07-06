// "use strict";

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
orderNow.addEventListener("click", function () {
  if (CurrentPersonOrders.length === 0) {
    error.classList.remove("hidden");
  } else {
    totalOrders.push(CurrentPersonOrders);
    CurrentPersonOrders = [];
    initial();
    pageOne.classList.add('hidden');
    pageTwo.classList.remove('hidden');
  }
});
//cancelOrder
cancelOrder.addEventListener("click", function () {
  initial();
  CurrentPersonOrders = [];
});
export{totalOrders};
/*Oredr page script*/
/****First part*/
//adding pizza details in pizza details table
//checking all inputs are filled are not
//color chnging the confirm
//calculate the price on no changing
//chnage the total price according to it

/****Second part****/
//on confirm display the another page
//page having the payment method
//page also includes all the details
//on payment display the dialog box of all the details
//incudding date /time/cash delivered/person details/pizzadetails
// export {totalOrders};/
    //second page
  //   let table = document.querySelector(".tableOf2nd");
  //   let html = "";
  //   html = "";
  //   for (const [
  //     { namePizza, sizePizza, pricePizza, noOfpizza },
  //     ...others
  //   ] of totalOrders) {
  //     html += `<table>
  // <tr>
  //   <td>${namePizza}</td>
  //   <td>${sizePizza}</td>
  //   <td><input type="number" name="" class="NO" value=${noOfpizza} /></td>
  //   <td>${pricePizza}</td>
  // </tr>
  // </table>`;
  //   }
  //   table.innerHTML = html;