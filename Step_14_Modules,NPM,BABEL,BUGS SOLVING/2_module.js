import * as ShoppingCart from "./ShoppingCart.js";
console.log("importing cart");

ShoppingCart.addToCart("Paint", 2);
ShoppingCart.addToCart("Paint", 2);
ShoppingCart.addToCart("Paint", 2);
console.log(ShoppingCart.carts);

//Top-level-await
/*Top level await is just works in modules added in ES2022, mens await keyword is also works outside the async function.It can actually blocks the code and execuation at the background.
When we use the type="module" with the script and import the file then the importing file should also become the module.Firstly all the code and top level awaits work in the module then the imported file works.
*/

//Top-level-awaits works block the code execuation here
const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await posts.json();
console.log(data);

//usage(use the return values from aysn promise return response as a value by await)
const getLastPost = async function () {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await posts.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost=await getLastPost();
console.log(lastPost);
console.log(ShoppingCart.usersData);