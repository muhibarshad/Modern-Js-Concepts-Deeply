//Exporting Files
console.log("Exporting File");

const shippingCost = 10;
const shopName = "Muhib Garments";
export let carts = [];

export const addTocart = function (product, quantity) {
  carts.push({ product, quantity });
  console.log(`You are ordering ${quantity} of ${product} from ${shopName}`);
};

export default "ali";
// export{carts as cartsArr,shippingCost,shopName}
