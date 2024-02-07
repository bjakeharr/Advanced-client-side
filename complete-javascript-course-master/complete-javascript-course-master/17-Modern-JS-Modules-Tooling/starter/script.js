//importing module

//importing by specific name
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log(`importing module`);
// addToCart('bread', 5);
// console.log(price, tq);
//importing with all
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);

//default imports can be renamed when called upon
import add from './shoppingCart.js';
add('muffin', 7);
add('bread', 3);
add('pizza', 2);

console.log(ShoppingCart.cart);

//Top-level await can be used outside of an async function in modules only (ES2022) also blocks execution of code unlike its behavior in an async function

const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);
