'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const styleBody = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const styleNumber = function (width) {
  document.querySelector('.number').style.width = width;
};

//check btn
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //When there's no input
  if (!guess) {
    displayMessage('⛔ No number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    styleBody('#60b347');
    styleNumber('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess if wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

//again btn
document.querySelector('.again').addEventListener('click', function () {
  //reset score
  score = 20;
  displayScore(score);
  //reset random
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  //reset fields
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  //reset css
  styleBody('#222');
  styleNumber('15rem');
});
