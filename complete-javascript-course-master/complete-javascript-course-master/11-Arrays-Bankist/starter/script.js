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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i, arr) {
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

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => mov + acc, 0);
  labelSumIn.textContent = `${incomes}`;
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);

  //display balance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);
};

//event listeners
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear inputfield
    inputLoginUsername.value = inputLoginPin.value = '';

    //lose focus
    inputLoginPin.blur();

    //update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
});
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

//------coding challenge 1

// const checkDogs = function (dogsJulia, dogsKate) {
//   let str = ``;
//   const dogsJuliaFixed = dogsJulia.slice(1, -2);
//   const dogsArr = dogsJuliaFixed.concat(dogsKate);
//   dogsArr.forEach(function (val, i, arr) {
//     val > 2
//       ? (str = `Dog number ${i + 1} is an adult, and is ${val} years old`)
//       : (str = `Dog number ${i + 1} is still a puppy`);
//     console.log(str);
//   });
// };

//data test 1
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log(`END TEST DATA 1`);
//data test 2
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//--------Map , filter, and reduce

//map loops through an array and applies a request to each element in the array and generates a new array with the operation applied

//filter will create a new array that pass the listed requirement

//reduce will boil down all the elements of an array to a single value

//------- the map method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// const movementsUSDArrow = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDFor = [];
// for (const mov of movements) {
//   movementsUSDFor.push(mov * eurToUsd);
// }

// console.log(movementsUSDFor);

// const movementsDescriptions = movements.map(
//   (mov, i, arr) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

//---------The filter method
//callback function array.filter(function (value,i,array){boolean ex: value > 0})

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);
// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(withdrawals);

//---- the reduce method
//the reduce method returns a single value instead of an array
//syntax array.reduce(function(accumulator, current element value, index, array){function parameter goes here}, starting point of the accumulator 0 for from the beginning)
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   return acc + curr;
// }, 0);
// console.log(balance);

//maximum value
// const max = movements.reduce((acc, curr) => {
//   if (acc > curr) return acc;
//   else return curr;
// }, movements[0]);
// console.log(max);

//--------Coding challenge 2
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18);
//   const average =
//     humanAges.reduce((accu, age, i) => accu + age, 0) / humanAges.length;
//   return average;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

//------chaining methods
// const euroToUsd = 1.1;

//pipeline
// const totalInUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalInUSD);

//coding challenge 3
// const calcAverageHumanAgeArrowChain = ages =>
//   ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => age / arr.length + acc, 0);

// console.log(calcAverageHumanAgeArrowChain([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAgeArrowChain([16, 6, 10, 5, 6, 1, 4]));

//--------The find method
//uses a callback function and like filter requires a boolean. will stop at first instance of true in the array and grabs that variable.

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

//-----The findindex method
//returns the index of the found element instead of the rlement itself

//------- some and every

//checks equality
// console.log(movements);
// console.log(movements.includes(-130));

// (some) checks conditions
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

//every only returns true if every element in the boolean comes back as true

// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

//separate callback
// const deposit = mov => mov > 0;

// console.log(movements.filter(deposit));

//--flat and flatmap
//flat can turn sub arrays within arrays into a singular array one level deep by default. you can adjust this by changing the number in the parentheses
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [
//   [[1, 2], 3],
//   [4, [5, 6], 7, 8],
// ];
// console.log(arrDeep.flat(2));

//flat
// console.log(
//   accounts
//     .map(acc => acc.movements)
//     .flat()
//     .reduce((acc, mov) => acc + mov, 0)
// );

//flatmap flatmap is limited to one layer deep
// console.log(
//   accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
// );

//------ sorting arrays
//strings
// const owners = ['jonas', 'zack', 'adam', 'martha'];
// console.log(owners.sort()); // mutates original array alphabetically

//numbers
//ascending
// console.log(movements);
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);

//----------more ways of creating and filling arrays
// const x = new Array(7); // creates an array with 7 empty variables.
// console.log(x);
// x.fill(1); // mutates the array by filling with ones;
// x.fill(1, 3); // can specify a begin parameter in this case index 3

//array.from syntax Array.from({object with length:x}, (current element, index)=> condition to be applied through the loop)
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// const z = Array.from({ length: 7 }, (cur, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent)
//   );
//   console.log(movementsUI);
// });

//--------Array methods practice
//1
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(bankDepositSum);

//2
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   // .filter(mov => mov >= 1000).length;
//   .reduce((acc, el, i) => (el >= 1000 ? acc + 1 : acc), 0);
// console.log(numDeposits1000);

//3
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       //   cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       //   return sums;
//       // }
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

//4
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'and', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };
// console.log(convertTitleCase(`this is a nice title`));
// console.log(convertTitleCase(`this is a LONG title but not too long`));
// console.log(convertTitleCase(`and here is another title with an EXAMPLE`));

//coding challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1
dogs.forEach((element, index, array) => {
  const recommendedFood = element.weight ** 0.75 * 28;
  console.log(
    `The recommended portion size for dog ${index + 1} is ${
      recommendedFood / 1000
    } kgs.`
  );
});

//2
dogs.forEach;
