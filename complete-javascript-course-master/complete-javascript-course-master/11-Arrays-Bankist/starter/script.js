'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i, arr) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
   <div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__date">3 days ago</div>
  <div class="movements__value">${mov}</div>
</div>
`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//-------- simple array method

//arrays themselves are treated as objects. hence why arrays have methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

//------------array slice method
//does not mutate original array but instead creates a new array with the selected slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

//slice method can create shallow copy of an array =like this
// console.log(arr.slice);
//you can also do the same with the spread operator
// console.log([...arr]);

//---------splice method
//This DOES mutate the original array
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// splice works as follows (starting index position, how many elements to be deleted)

//--------reverse method
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);
//The reverse method is one that also mutates the original array instead of returning a shallow copy.

//------concat  method
//does not mutate original array, just creates a copy
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

//------join method
//generates a string with the specified character but does not mutate the mentioned array.
// console.log(letters.join(' - '));
// console.log(letters);

//----------the new at method
//utilizes the same syntax as index numbers except called upon by varhere.at(indexhere)
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

//accessing the last element of an array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

//also works on strings
// console.log('jonas'.at(0));

//------- the for each method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   movement > 0
//     ? console.log(`Movement ${i + 1}: You deposited ${movement}`)
//     : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// }

//foreach passes through the array arguments in this order (element, index, and the whole array)
// console.log('FOREACH BEGINS HERE');
// movements.forEach(function (movement, index, array) {
//   movement > 0
//     ? console.log(`Movement ${index + 1} You deposited ${movement}`)
//     : console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
// });

//foreach loops cannot be broken out of with break or continue.

//-----------foreach with maps and sets

//map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//set
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR', 'USD']);
// console.log(currenciesUnique);
//when used on sets, the index value is the same as the value in a foreach
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
