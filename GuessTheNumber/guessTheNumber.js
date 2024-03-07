const randomNumber = Math.ceil(Math.random() * 100);
const previosGuess = document.querySelector('.guesses');
let previousGuessArray = [];
console.log(randomNumber);
let maxGuess = document.querySelector('.lastResult').innerHTML;
let submit = document.getElementById('subt');
const form = document.querySelector('.form');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  let guessedInput = document.getElementById('guessField').value;

  if (previousGuessArray.includes(guessedInput)) {
    window.alert('Please enter new number');
  } else if (guessedInput && 100 > guessedInput > 0) {
    maxGuess -= 1;
    document.querySelector('.lastResult').innerHTML = maxGuess;
    previousGuessArray.push(guessedInput);
    previosGuess.innerHTML = previousGuessArray.join(', ');
    document.getElementById('guessField').value = '';
    if (guessedInput == randomNumber) {
      showWonNotificationAndResetFields();
    }
  } else {
    window.alert('Enter Valid Number');
  }

  if (maxGuess < 1) {
    document.getElementById('guessField').disabled = true;
    showLostNotificationAndResetFields();
  }
});

function showWonNotificationAndResetFields() {
  window.alert('Congratulation!!! you won');
  location.reload();
}

function showLostNotificationAndResetFields() {
  window.alert('You Lost. Please click OK to start new game.');
  location.reload();
}
