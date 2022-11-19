//Exporting Files
console.log("Exporting File");

const shopName = "Muhib Garments";
const carts = [];

export const addTocart = function (product, quantity) {
  carts.push({ product, quantity });
  console.log(`You are ordering ${quantity} of ${product} from ${shopName} `);
};
