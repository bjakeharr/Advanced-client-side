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
