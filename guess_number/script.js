// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let count = 0;

// function checkGuess() {
//   let userGuess = document.getElementById("guessInput").value;
//   let message = document.getElementById("message");
//   let attempts = document.getElementById("attempts");

//   count++;

//   if (userGuess == randomNumber) {
//     message.textContent = "🎉 Correct! You guessed it!";
//     attempts.textContent = "Attempts: " + count;
//   } 
//   else if (userGuess > randomNumber) {
//     message.textContent = "📉 Too High!";
//   } 
//   else {
//     message.textContent = "📈 Too Low!";
//   }
// }

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let count = 0;
// let maxAttempts = 5;

// function checkGuess() {
//   let userGuess = document.getElementById("guessInput").value;
//   let message = document.getElementById("message");
//   let attempts = document.getElementById("attempts");

//   if (count >= maxAttempts) {
//     message.textContent = "❌ Game Over! Number was " + randomNumber;
//     return;
//   }

//   count++;

//   if (userGuess == randomNumber) {
//     message.textContent = "🎉 Correct! You guessed it!";
//     attempts.textContent = "Attempts: " + count;
//   } 
//   else if (userGuess > randomNumber) {
//     message.textContent = "📉 Too High!";
//   } 
//   else {
//     message.textContent = "📈 Too Low!";
//   }

//   attempts.textContent = "Attempts: " + count + " / " + maxAttempts;

//   // Game Over after 5 attempts
//   if (count === maxAttempts && userGuess != randomNumber) {
//     message.textContent = "❌ Game Over! Number was " + randomNumber;
//   }
// }


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