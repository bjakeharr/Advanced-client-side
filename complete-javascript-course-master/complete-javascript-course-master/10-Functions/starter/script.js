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
