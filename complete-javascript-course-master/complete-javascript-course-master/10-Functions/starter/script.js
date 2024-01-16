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

//----------The bind method---------
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

//bind allows you to set certain arguments for functions in stone.
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

//Bind with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application
// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

//if the 'this' keyword is not applicable, skip it in bind by using 'null'
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// const addTaxArrow = rate => value => value + value * rate;
// const addTaxArrow2 = addTaxArrow(0.23);
// console.log(addTaxArrow2(300));

//----------Coding challenge 1--------------------//
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0:JavaScript', '1:Python', '2:Rust', '3:C++'],
  answers: new Array(4).fill(0),

  // challenge 1

  registerNewAnswer: function () {
    let answer = Number(
      prompt(
        `${this.question}\n ${this.options.join(
          '\n'
        )} \nplease write option number`
      )
    );
    typeof answer === 'number' && answer < this.answers.length
      ? (poll.answers[answer] = poll.answers[answer]++)
      : alert('please provide a valid number');
    this.displayResults();
  },
  displayResults: function () {
    let answerStr = `The results stand as follows, \n`;
    for (const [i, option] of this.options) {
      answerStr += `${this.options[i].slice(2)} has a total of ${
        this.answers[i]
      } points! \n`;
    }
    console.log(answerStr);
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//-----------immediately invoked function expressions

// const runOnce = function () {
//   console.log(`This will never run again`);
// };
// runOnce();

// wrap the function in parentheses then immediately call it by putting the call outside (function ex (){})()
// (function () {
//   console.log(`This will never run again`);
// })();

//----------Closures--------

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();

booker();
booker();
booker();
// a function always has access to the variables contained within the execution context in which it was first created. THis is what makes closures possible.
