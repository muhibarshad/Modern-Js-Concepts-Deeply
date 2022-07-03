"use strict";

const orders = [];
const orderFood = function (foodName, noOfItems=1, price=100*noOfItems) {

//   //classical way of default parameters
//   noOfItems ||= 1;
//   price ||= 100;
//   //modern ES6 way
//   //   set the values default in the paramters on arguments

  const order = {
    foodName,
    noOfItems,
    price,
  };
  orders.push(order);
  console.log(orders);
};
orderFood("Baryani");
orderFood("Baryani", 3);
orderFood("Baryani", 3, 900);
