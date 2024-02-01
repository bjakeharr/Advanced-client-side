'use strict';
//===constructor function
//typical naming structure of constructors includes a beginning capital letter.
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//dont create methods inside of constructor functions. THis bogs down resulting objects
//   this.calcAge = function(){
//     console.log(2037-birthYear);
//   }
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

//prototypes
//All objects made by a constructor function can inherit methods and variables assigned to the original by way of prototypal inheritance.
// Person.prototype.calcAge = function () {
// console.log(2037 - this.birthYear);
// };

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

//===========ES6 classes

//class expression
// const PersonCl = class{}

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Methods defined within class declaration are added to prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert('Please provide a full name');
    }
  }
  get fullName() {
    return this._fullName;
  }

  //static method can only be called by referencing original. not inherited
  static hey() {
    console.log('hello');
  }
}
//you can still manually add methods and variables to classes by using .prototype
PersonCl.prototype.greeting = function () {
  console.log(`Hello ${this.fullName}`);
};

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// jessica.greeting();

//Classes are not hoisted (they cannot be called before being declared in the code)

//Classes are only executed in STRICT mode

//================Setters and Getters=========
//-----getters and setters for object literals
// const account = {
//   owner: jonas,
//   movements: [100, 500, 300, 200],
//   //Put prepositon GET to turn into a getter
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   //use prepopsition SET to turn to setter
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

//run the getter as a property instead of as a function
// console.log(account.latest);

// calling setter
//use a setter just like an expression
// account.latest = 50;
// console.log(account.movements);

//-------getters and setters for classes--------
//getter in a class is called the same way as with object literals.
// console.log(jessica.age);

//======Static methods
// Array.from(document.querySelectorAll('h1'));

// Person.hey = function () {
//   console.log('Hey');
// };

//=======object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

//============Coding challenge 2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is accelerating to ${this.speedUS}mp/h `);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is decelerating to ${this.speedUS}mp/h `);
//   }
// }

// const ford = new CarCl('ford', 100);

// ford.accelerate();
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford);

//==============Inheritance between classes -cosntructor functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

//Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`Hello my name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();

// mike.calcAge();
// console.log(mike.__proto__);

//========Coding challenge 3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;

//   console.log(`${this.make} has accelerated to ${this.speed}Km/h!`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} has decelerated to ${this.speed}Km/h!`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(`${this.make} has been charged to ${this.charge} percent`);
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} has accelerated to ${this.speed} km/ph and is now at a battery level of ${this.charge} percent`
//   );
// };

// const prius = new EV('Prius', 100, 50);
// prius.chargeBattery(70);
// console.log(prius.__proto__);
// prius.accelerate();
// prius.brake();

//===========Inheritance between classes ES6

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //super() always needs to be used first
//     super(fullName, birthYear);
//     this.course = course;
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.calcAge();

//==============Inheritance Between classes using object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear, course);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

//==========Another class example
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.local = navigator.language;

//     console.log(`Thanks for opening an account ${owner}`);
//   }

//   deposit(val) {
//     this.movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   approveLoan(val) {
//     return true;
//   }

//   requestLoan(val){
//     if(this.approveLoan(val)){
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
// acc1.deposit(250);
// acc1.withdraw(140);
// console.log(acc1);
