let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// creating a paragraph element
const p = document.createElement('p');

let prevGuessArray = [];
let numGuess = 1;

let playGame = true;

if (playGame == true) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validGuess(guess);
  });
}

function validGuess(guess) {
  // checks if the user input value is a number &
  // checks if it is in between 1 to 100
  if (isNaN(guess) == true) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Enter a number greater than 1`);
  } else if (guess > 100) {
    alert(`Enter a number less than 100`);
  } else {
    //guess is a valid number
    prevGuessArray.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over. The random number was: ${randomNum}`);
      endGame();
    } else {
      //numGuess<10
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // checks the relation btw the user input value and the Answer
  if (guess == randomNum) {
    displayMessage(`You guessed it right!`);
  } else if (guess < randomNum) {
    displayMessage(`Your guess is TOOO Low`);
  } else if (guess > randomNum) {
    displayMessage(`Your guess is TOOO High`);
  }
}

function displayGuess(guess) {
  // cleans the already entered value
  userInput.value = '';

  // updates the 'prevGuessArray' array
  guessSlot.innerHTML += `${guess}, `; // += pushes the values in the array

  // updates numGuess
  numGuess++;

  // updates the remaining guesses
  remainingGuesses.innerHTML = `${10 - numGuess + 1}`;
}

function displayMessage(message) {
  // just prints a message based on the value of the variable 'hint'
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  playGame = false;

  // cleaning the value of userInput
  userInput.value = '';

  // more values can't be added in the userInput
  userInput.setAttribute('disabled', ''); // setAttribute is a key, value pair so, we had to add '' as value

  // making a start button
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuessArray = [];
    guessSlot.innerHTML = '';
    numGuess = 1;
    remainingGuesses.innerHTML = 10;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}