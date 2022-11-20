/*There are some old modules in javascript. AMD modules and common SJ modules. Common JS modules are actully work in node.js and present in the NPM repository. But now these are used in the whole world of the javascript.

Common JS modules only work in the web server runtime as node.js not in the other browsers.
used the require method to import them
*/
//Export
export.addToCart=function (product, quantity) {
    carts.push({ product, quantity });
    console.log(` ${quantity} of ${product} added to cart`);
  };

//Import
const {addToCart}=require('./ShoppingCart.js');
