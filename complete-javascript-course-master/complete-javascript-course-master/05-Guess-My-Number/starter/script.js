'use strict';
// DOM manipulation and setting elements
// document.querySelector(`.message`).textContent;
// document.querySelector('.message').textContent = `Correct Number!`;

// document.querySelector(`.number`).textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

//initialize secretNumber for guess
let secretNumber = Math.floor(Math.random() * 20 + 1);

//initialize score counter
let score = 20;
document.querySelector('.score').textContent = score;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//initialize highscore
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

//Add event listener to check button and enable number verification and response
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //when no input
    displayMessage('No Number!');
  }

  //when guess is correct
  else if (guess === secretNumber) {
    displayMessage(`Correct Number!`);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    //updates highscore display if the current score is higher than stored variable
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }

    //responses for incorrect guesses.
  } else if (guess !== secretNumber) {
    if (score > 1)
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage(`Game Over!`);
    score = 0;
    document.querySelector('.score').textContent = score;
  }
});

//implementing reset button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = ` `;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage(`Start guessing...`);
});
