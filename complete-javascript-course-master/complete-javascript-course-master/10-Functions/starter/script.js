'use strict';
//-----------Default parameters-------

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//ES5 method
//   numPassengers = numPassengers || 1;
//   price = price ||199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

//setting a parameter to undefined allows the default value to still be used.
// createBooking('LH123', undefined, 1000);

//---------------How passing arguments woks: value versus reference-------------

// const flight = 'Lh234';
// const jonas = {
//   name: 'Jonas Schmedttman',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   passenger.passport === 24739479284
// ? alert('checked in')
//     : alert('wrong passport');
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//----------- First class and higher order functions-----------

//in JS functions are treated as values
//functions are just another type of object

//A higher order function is a function that receives a function as an argument, that returns a new function, or both.

//example
//const greet = () => console.log('Hey Jonas');
//btnclose.//this is the higher order function // addEventListener('click',//this is the callback funcitongreet);

//--------------Functions accepting callback functions------------

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

//this is a higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`transformed by ${fn.name}`);
// };
// transformer('Javascript is the best', upperFirstWord);

// transformer('Javascript is the best', oneWord);

// const high5 = function () {
//   console.log('hello');
// };

// document.body.addEventListener('click', high5);

// ['jonas', 'martha', 'adam'].forEach(high5);

//----------------Functions that return functions----------

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('hey');
// greeterHey('Jonas');
// greeterHey('Steven');

//arrow challenge
// const arrowGreet = greeting => name => console.log(`${greeting} ${name}`);
// arrowGreet('Hello')('Jake');

//----------The call and apply methods----------

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// does not work book(23, 'Sarah Williams');

//call allows you to explicity set the object value for the 'this' keyword to refer to
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

//Apply Method
//apply requires an array in the second argument.
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);
