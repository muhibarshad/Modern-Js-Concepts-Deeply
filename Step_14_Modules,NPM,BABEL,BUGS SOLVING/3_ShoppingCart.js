console.log('Exporting cart')
const shopName = "Muhib shopping Cart";
const shippingCost = 200;
let quantity = 20;
export let carts=[];

export const addToCart = function (product, quantity) {
  carts.push({ product, quantity });
  console.log(`You have ordered ${quantity} of ${product} from ${shopName}`);
};

//fetching users
console.log('Fetching Users Started')
const users=await fetch('https://jsonplaceholder.typicode.com/users');
export const usersData=await users.json();
console.log('Fetching Users Completed')

