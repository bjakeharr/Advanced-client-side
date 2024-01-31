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
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

//prototypes
//All objects made by a constructor function can inherit methods and variables assigned to the original by way of prototypal inheritance.
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
console.log(jonas);
