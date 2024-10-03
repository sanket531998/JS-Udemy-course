'use strict';

// Buttons
const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

//dice
const dice = document.querySelector('.dice');

//Scores
let player0TotalScore = document.getElementById('score--0');
let player1TotalScore = document.getElementById('score--1');
let player0CurrentScore = document.getElementById('current--0');
let player1CurrentScore = document.getElementById('current--1');

// Sections
const player0Section = document.querySelector('.player--0');
const player1Section = document.querySelector('.player--1');

//current player
let activePlayer = 0;

// New Button onClick
newGameBtn.addEventListener('click', function () {
  player0TotalScore.textContent = 0;
  player1TotalScore.textContent = 0;
  player0CurrentScore.textContent = 0;
  player1CurrentScore.textContent = 0;
  activePlayer = 0;
  player0Section.classList.add('player--active');
  player1Section.classList.remove('player--active');
});

// Roll Dice Button onClick
rollDiceBtn?.addEventListener('click', function () {
  const randomNum = Math.floor(Math.random() * 6 + 1);
  dice.src = `http://127.0.0.1:5501/JS-Udemy-course/07-Pig-Game/starter/dice-${randomNum}.png`;

  manipulateScore(randomNum);
});

// Hold Button onClick
holdBtn.addEventListener('click', function () {
  if (player0TotalScore >= 20) {
    alert('Player 1 wins');
  } else if (player1TotalScore >= 20) {
    alert('Player 2 wins');
  }

  if (activePlayer === 0) {
    activePlayer = 1;

    player0TotalScore.textContent =
      Number(player0TotalScore.textContent) +
      Number(player0CurrentScore.textContent);
    player0CurrentScore.textContent = 0;

    player0Section.classList.remove('player--active');
    player1Section.classList.add('player--active');
  } else {
    activePlayer = 0;

    player1TotalScore.textContent =
      Number(player1CurrentScore.textContent) +
      Number(player1TotalScore.textContent);

    player1CurrentScore.textContent = 0;

    player0Section.classList.add('player--active');
    player1Section.classList.remove('player--active');
  }
});

function manipulateScore(randomNum) {
  if (activePlayer === 0) {
    if (Number(randomNum) === 1) {
      player0CurrentScore.textContent = 0;
      activePlayer = 1;
      player0Section.classList.remove('player--active');
      player1Section.classList.add('player--active');
    } else {
      player0CurrentScore.textContent =
        Number(player0CurrentScore.textContent) + Number(randomNum);
    }
  } else if (activePlayer === 1) {
    if (randomNum === 1) {
      player1CurrentScore.textContent = 0;
      activePlayer = 0;
      player0Section.classList.add('player--active');
      player1Section.classList.remove('player--active');
    } else {
      player1CurrentScore.textContent =
        Number(player1CurrentScore.textContent) + Number(randomNum);
    }
  }
}
