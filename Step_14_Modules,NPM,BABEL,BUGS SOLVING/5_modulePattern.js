/*Modules have actually all the data is private and it returns the public API.
This can be possible by making IIFE all the functioanlities , then return the object of exports and use it. All teh properties and methods in teh object has an access to all variables that are in its birthplace due to colure. This is a pattern of 
How moduls pattern actually be informed and worked before ES6 native modules?
*/

const ShoppingCart2 = (function () {
  const shopName = "Muhib shopping Cart";
  const shippingCost = 200;
  let quantity = 20;
  let carts = [];

  const addToCart = function (product, quantity) {
    carts.push({ product, quantity });
    console.log(` ${quantity} of ${product} added to cart`);
  };

  const order = function (product, quantity) {
    carts.push({ product, quantity });
    console.log(`You have ordered ${quantity} of ${product} added to cart`);
  };

  return {
    addToCart,
    order,
    carts,
  }
})();
ShoppingCart2.addToCart('Shirt',2);
// console.log(ShoppingCart2.quantity)//undefind
