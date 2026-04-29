

const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const result = document.getElementById('result');
const randomNumber = Math.floor(Math.random() * 100) + 1;

guessBtn.addEventListener('click', ()=> {
  const guess = parseInt(guessInput.value);
  if(isNaN(guess) || guess < 1 || guess > 100){
    result.textContent = 'Please enter a valid number between 1 and 100';
    result.style.fontSize = "1rem";
  }else if(guess === randomNumber){
    result.textContent = 'Congratulations! You guessed the number!';
    result.style.fontSize = "1rem";
  }else if(guess < randomNumber){
    result.textContent = 'Too low! Try again.';
  }else{
    result.textContent = 'Too high! try again.';
  }
});