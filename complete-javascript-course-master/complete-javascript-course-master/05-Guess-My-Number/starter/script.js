'use strict';
// DOM manipulation and setting elements
// document.querySelector(`.message`).textContent;
// document.querySelector('.message').textContent = `Correct Number!`;

// document.querySelector(`.number`).textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

//initialize secretNumber for guess
const secretNumber = Math.floor(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;

//initialize score counter
let score = 20;
document.querySelector('.score').textContent = score;

//Add event listener to check button and enable number verification and response
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //when no input
    document.querySelector(`.message`).textContent = 'No Number!';
  }

  //when guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `Correct Number!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //responses for incorrect guesses.
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too high!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `Game Over!`;
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too low!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `Game Over!`;
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});
