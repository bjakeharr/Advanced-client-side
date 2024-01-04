'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// //OR assignment operator
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //AND assignment operator
// rest2.owner = rest2.owner && '<anon>';
// rest1.owner = rest1.owner && '<anon>';
// rest1.owner &&= '<anon>';
// rest2.owner &&= '<anon>';

// console.log(rest1);
// console.log(rest2);
/////////////////destructuring arrays//////////////

// //create example array
// const arr= [2,3,4];
// const a= arr[0];
// const b= [1];
// const c= [2];

// //destructuring an array
// const [x,y,z] = arr;
// console.log(x,y,z);

// //to skip items in an array when destructuring, you can leave a spot blank.
// let [main, ,secondary]= restaurant.categories;
// console.log(main,secondary);

// [main, secondary] = [secondary,main];

// //receive 2 return values from a function
// console.log(restaurant.order(2,0));
// const [starter,mainCourse] = restaurant.order(2,0);
// console.log(starter,mainCourse);

// //nested destructuring
// const nested = [2,4,[5,6]];
// // const[i, ,j]=nested;
// // console.log(i,j);
// const [i, , [j,k]]= nested;
// console.log(i,j,k);

// //default values
// //you can assign default values to the deconstruct component if you dont know the exact length of an array to avoid an undefined variable.
// const[p=1,q=1,r=1]= [8,9];
// console.log(p,q,r);

////////////////destructuring objects//////////////////
//destructuring objects uses {}

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// //can change names of object pieces by using the colon : then renaming them in the destructuring process
// const {name: restaurantName, openingHours: hours, categories:tags} = restaurant;
// console.log(restaurantName,hours,categories);

// //setting default values in case values arent present
// const {menu = [],starterMenu: starters= []} = restaurant;
// console.log(menu,starters);

// //mutating variables
// let a =111;
// let b = 999;
// const obj = {a:23,b:7,c:14};

// //opening a code line with just curly braces {} will result in a syntax error. wrap in parentheses to avoid that ()
// ({a,b} = obj);

// console.log(a,b);

// //nested objects
// const {fri: {open, close}} = openingHours;
// console.log(open,close);

// //destructuring while calling within a function
// // you can pass an object as an argument into a function call names just need to be the same when passed as arguments and predefined arguments when defining the function.
// restaurant.orderDelivery({
//   time:`22:30`,
//   address: `Via del Sole,21`,
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: `Via del Sole,21`,
//   starterIndex: 1,
// });

///////////The spread operator////////////

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// //The spread operator ... is used when multiple elements from an array need to be used at once.
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'gnocci'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //iterables are arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// //the spread operator cannot be used within a template literal ${} in a string. Designed for single values.

// //real world example
// // const ingredients = [
// //   prompt(`Let\'s make Pasta! Ingredient 1?`),
// //   prompt(`Ingredient 2?`),
// //   prompt(`Ingredient 3?`),
// // ];

// // restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

////Rest operator/////
//spread exists on right hand side of assignment operator
// const arr = [1, 2, ...[3, 4]];

// //rest operator sits on left hand side of assignment operator '='. will pack following array items into an array.
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `spinach`);
// restaurant.orderPizza('mushrooms');

/////////Short circuiting && and || ////////////////////

//Logical operators can use and return any data type
// console.log(3 || 'Jonas');

// //short circuiting means that when the first operant is a truthy value, it will immediately return

// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// //short circuits to the first 'truthy' value
// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //the && operator short circuits to the first 'falsy value'
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//////Nullish operator//////////////
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;

//coding challenge one
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1.
// let [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// //2.
// let [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.
// let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5.
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// //6.

// const printGoals = function (...playerNames) {
//   console.log(`${playerNames.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// //7.
// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team2 < team1 && console.log(`Team 2 is more likely to win`);

//The for of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

//entries() allows you to get the index of each item in the given array
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }

//will show the items as individual arrays within a larger array that contains the index number within the large array as well as their value.
// console.log([...menu.entries()]);
