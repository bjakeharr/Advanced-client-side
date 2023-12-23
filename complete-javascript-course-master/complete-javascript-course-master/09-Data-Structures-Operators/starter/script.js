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

  order: function(starterIndex, mainIndex) {
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time=`20:00`  , address}) {
    console.log(
    `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
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

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

//can change names of object pieces by using the colon : then renaming them in the destructuring process
const {name: restaurantName, openingHours: hours, categories:tags} = restaurant;
console.log(restaurantName,hours,categories);

//setting default values in case values arent present
const {menu = [],starterMenu: starters= []} = restaurant;
console.log(menu,starters);

//mutating variables
let a =111;
let b = 999;
const obj = {a:23,b:7,c:14};

//opening a code line with just curly braces {} will result in a syntax error. wrap in parentheses to avoid that ()
({a,b} = obj);

console.log(a,b);

//nested objects
const {fri: {open, close}} = openingHours;
console.log(open,close);

//destructuring while calling within a function
// you can pass an object as an argument into a funciton call names just need to be the same when passed as arguments and predefined arguments when defining the function.
restaurant.orderDelivery({
  time:`22:30`,
  address: `Via del Sole,21`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: `Via del Sole,21`,
  starterIndex: 1,
});