'use strict';
//===constructor function
//typical naming structure of constructors includes a beginning capital letter.
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //dont create methods inside of constructor functions. THis bogs down resulting objects
  //   this.calcAge = function(){
  //     console.log(2037-birthYear);
  //   }
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

//prototypes
//All objects made by a constructor function can inherit methods and variables assigned to the original by way of prototypal inheritance.
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// jonas.calcAge();
// console.log(jonas);

// console.log(jonas.__proto__);
//object.prototype is typically top of chain
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

const arr = [3, 6, 5, 5, 7, 9, 3, 6, 7, 8, 9];

console.log(arr.__proto__.__proto__);

//you can attach a method to a prototype of a constructor. (dont do this though due to updates)
Array.prototype.unique = function () {
  return [...new Set(this)];
};
// console.log(arr.unique());

const h1 = document.querySelector('h1');

//==============Coding Challenge 1 =================
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const mustang = new Car('Mustang', 100);
// const durango = new Car('Durango', 80);

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} has accelerated to ${this.speed}Km/h!`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} has decelerated to ${this.speed}Km/h!`);
// };

// mustang.accelerate();
// durango.accelerate();
// mustang.brake();
