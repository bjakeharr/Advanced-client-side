//importing module

//importing by specific name
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log(`importing module`);
// addToCart('bread', 5);
// console.log(price, tq);
//importing with all
import shoppingCart, * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);

//default imports can be renamed when called upon
import add from './shoppingCart.js';
add('muffin', 7);
add('bread', 3);
add('pizza', 2);

console.log(ShoppingCart.cart);

//Top-level await can be used outside of an async function in modules only (ES2022) also blocks execution of code unlike its behavior in an async function

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);

//the moduule pattern
//requires ife
// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push((product, quantity));
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart2.addToCart('apple', 4);
// shoppingCart2.addToCart('pizza', 2);
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);
state.user.loggedIn = false;
console.log(stateClone);
