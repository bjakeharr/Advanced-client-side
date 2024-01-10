'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Modern method notation within an object no longer requires the 'function' keyword. You can still write the classic name: function () {} but its not necessary.
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  //ES6 enhanced object literals. Defined outside of current object and any changes will affect both versions of the object since they are considered the same thing
  openingHours,
};

//looping objects

//looping property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open ${properties.length} days of the week: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

//looping property Values
const values = Object.values(openingHours);
console.log(values);

//entire object
// const entries = Object.entries(openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

//with optional chaining. Checks whether the data up to '?' exists and if it doesn't, it sends back an undefined instead of an error.
// console.log(restaurant.openingHours.mon?.open);

//example with chaining
// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we open at ${open}`);
// }

//optional chaining with methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//optional chaining on arrays
// const users = [{ name: 'jonas', email: 'hello@jonas.io' }];
// const users = [];

// console.log(users[0]?.name ?? 'user array empty');

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

//coding challenge 2
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

// //1

// for (const [i, player] of game.scored.entries()) {
//   console.log(`goal number ${Number(i) + 1} was scored by ${player}`);
// }

// //2
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }
// console.log(average / odds.length);

// //3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odds of ${teamStr} ${odd}`);
// }
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// sets ---------------------

// sets are defined as a selection of 'unique values. cannot have copies any duplicates are eliminated.

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// //checks length of set
// console.log(ordersSet.size);

// //checks if a search term is located in the set
// console.log(ordersSet.has('Bread'));

// //adds new item to the set
// ordersSet.add('Garlic Bread');

// //deletes set item
// ordersSet.delete('Risotto');

// //deletes entire set
// // ordersSet.clear();

// //cant extract values from a set. better to use an array for storing

// //sets can be looped through since they are an iterable
// for (const order of ordersSet) console.log(order);

// //use case of sets. typically used to remove duplicates

// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const staffUnique = [...new Set(staff)]; //can use the spread operator and [] to generate another array.
// console.log(staffUnique);

//--------maps fundamentals

//A map is a data structure that can attach values to keys
// map keys cna be of any type (string, numbers,obj etc)

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

//when defining keys for a map they can me chained in one command. just use .set
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

//retrieving values from a map uses the 'get' command paired with the desired key.
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// by running the calculation and comparing, the result will be returned as the true response. If the true response were not enabled, the result would be undefined.

// one of the main strengths of maps is being able to key boolean values.
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//can check if a map has a key defined by using 'has'
// console.log(rest.has('categories'));

//keys can be removed from maps using mapName.delete(key)
// rest.delete(2);

//the .clear() method can be used to remove all elements from a map.

//can use .size to show how many keys are contained in a map
// console.log(rest.size);

//arrays can be used as keys but need ot be attached to a defined variable in order to be called.\
// const arr = [1, 2];
// rest.set(arr, 'test');

// console.log(rest.get(arr));

//------------maps iteration

// you cna populate a new Map by using an array within an array
// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);

//this method is the same format as using the Object.entries method
//you can use this to convert objects to maps.

// const hoursMap = new Map(Object.entries(openingHours)); //this converts the openinghours object to a map.

//Maps are iterable
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = 3;
// console.log(answer, typeof answer);

// console.log(question.get(answer === question.get('correct')));

//converting map to an array
// console.log([...question]);

//coding  challenge 3
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

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

//1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

//2
// gameEvents.delete(64);
// console.log(gameEvents);

//3
// console.log(
//   `An event happened, on average every ${90 / gameEvents.size} minutes`
// );

//4
// for (const [minute, event] of gameEvents) {
//   const half = minute <= 45 ? `First` : `Second`;
//   console.log(`[${half} HALF] ${minute} ${event}`);
// }

//........working with strings part 1
// const airline = 'TAP air Portugal';
// const plane = 'A320';

//index numbers on strings correspond to the character at the given index
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

//the length property can tell you the total character number ina given string (this includes spaces)

// console.log(airline.length);

//can also use indexof on strings
// console.log(airline.indexOf('r'));
//lastindexof will find last occurence of a given character or word
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

//--------slice method
//strings cannot be mutated. If any changes need to happen, they need ot be assigned to a new variable.
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//negative values will pull backwards on a string with the slice method
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('This is a middle seat');
//   } else console.log('This is not a middle seat');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

//................working with strings part 2

//switching the case
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

//fixing name capitalization
// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();
// const passengerFixed =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerFixed);

//defining correction function challenge
// const passSpellCheck = function (passenger) {
//   const passengerLower = passenger.toLowerCase();
//   const passengerFixed =
//     passengerLower[0].toUpperCase() + passengerLower.slice(1);
//   console.log(passengerFixed);
// };
// passSpellCheck('jAKoB');

//comparing email
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
//.trim() removes whitespace from both ends of a string. has a subcommand for beginning and end.
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

//.....Replacing strings (the replace method is case sensitive)
// const priceGB = '288,97';
// const priceUS = priceGB.replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers please report to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

//booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));

// if (plane.startsWith('airbus') && plane.endsWith('neo')) {
//   console.log('Part of the new airbus family');
// }

//practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('No weapons on a plane Rambo');
//   } else console.log('Enjoy your flight');
// };
// checkBaggage('I have a laptop, some Food, and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//.........Working with strings part 3

//split will create an array that separates a string at the given trigger character
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

//join cna put strings together
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const arr = [];
//   for (const n of names) {
//     arr.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(arr.join(' '));
// };
// const passenger = 'jessica ann smith davis';

// capitalizeName(passenger);

//padding a string
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));

//real world example

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const masked = str.slice(-4).padStart(str.length, '*');
//   return masked;
// };
// console.log(maskCreditCard(1234567812345678));

//repeat method
// const message2 = 'Bad weather... All Departures Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'*'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

//coding challenge number 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const toCamelCase = function () {
  const text = document.querySelector('textarea').value;

  //enabling empty string for checks to be added in the loop
  let checks = '';

  //splitting the input field by the 'enter keystrokes
  const arr = text.split('\n');

  //initializing forof loop
  for (const word of arr) {
    //progressively adding checks through the loop
    checks += '+';

    //splitting the words by the underscore
    const [firstWord, secondWord] = word.toLowerCase().trim().split('_');

    //assigning variable to, and correcting first letter of second word
    const secondFixed = secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    );

    //putting the two words back together then joining the string to the progressively longer checks string
    const fixedCase = [firstWord, secondFixed].join('');
    console.log([fixedCase.padEnd(20), checks].join(' '));
  }
};

document.querySelector('button').addEventListener('click', toCamelCase);
// const test = `underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure`;
// toCamelCase(test);

// string methods practice section
const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25
  +_Arrival;bru0943384722;fao93766109;11:45
  +_Delayed_Arrival;hel7439299980;fao93766109;12:05
  +_Departure;fao93766109;lis2323639855;12:30`;

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.replaceAll('_', ' ')} from ${from
    .toUpperCase()
    .slice(0, 3)} to ${to.toUpperCase().slice(0, 3)} (${time.replace(
    ':',
    'h'
  )})`;
  console.log(output.padStart(36));
}
