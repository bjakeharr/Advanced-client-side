//exporting module
console.log(`exporting module`);

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push((product, quantity));
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

//default exports are used for single values and do not have a name when it is a function;
export default function (product, quantity) {
  cart.push([product, quantity]);
  console.log(`${quantity} ${product} added to cart`);
}
