// 'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 50;
// console.log(document.querySelector('.guess').value);

//secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Update Score
let score = 20;
let highScore = 0;

//EventListener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //when there is no inputs
    document.querySelector('.message').textContent = '⛔ No Number';
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = `😃 That's Correct...`;
    document.querySelector('body').style.background = 'Green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      //when guess is too high
      document.querySelector('.message').textContent = `😲 Too High...`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `🥴 You lost the Game.`;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `😲 Too Low...`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `😏 You lost the Game.`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

//EventListener for Reset

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  highScore = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = '🤔 Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
});
