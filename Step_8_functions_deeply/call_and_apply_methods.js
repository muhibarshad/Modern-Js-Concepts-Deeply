"use strict";
/*The this has its own scope.We know that so if we want to implement the 
one function with its own this keyword and we want to change its calling object according 
to its call is call and apply method.

*/

//call method
const foodShop1 = {
  name: "Mcdonalds",
  location: "Near multan chungi ,lahore ",
  orders: [],
  getOrder(dish, noOfItems) {
    this.orders.push({ dish, noOfItems });
    return `You have order ${noOfItems} no of  ${dish} from the ${this.name}
    located as ${this.location} `;
  },
};
const foodShop2 = {
  name: "Forh & knives",
  location: "Near the Moon Market ,Lahore",
  orders: [],
};

const foodShop3 = {
  name: "KFC burger HUB",
  location: "Near the Barket Market ,Lahore",
  orders: [],
};

const orderNow = foodShop1.getOrder; //this ordernow function stores the foodShop1 orderget function
//so its has only this for the foodshop1 we cannot implement it for orederShop2 and orderShop3

console.log(orderNow.call(foodShop1, "Fajeeta Pizza large", 2));
console.log(foodShop1);

console.log(orderNow.call(foodShop2, "Burgers", 15));
console.log(foodShop2);

console.log(orderNow.call(foodShop3, "Chinese Pasta", 8));
console.log(foodShop3);

//apply method--use for the array passing as arguments
const foodShop4 = {
  name: "Karachi Baryani",
  location: "Near the A.M garments ,kabirwala",
  orders: [],
};

const BaryaniOrder = ["Chicken Baryani", 6];
console.log(orderNow.apply(foodShop4, BaryaniOrder));

// //better way-(due to spread operaters the apply method is gona away in modern Es6)
// console.log(orderNow.call(foodShop4,...BaryaniOrder));
