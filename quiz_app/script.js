// const questions = [
//   {
//     question: "What is 2 + 2?",
//     answers: [
//       { text: "3", correct: false },
//       { text: "4", correct: true },
//       { text: "5", correct: false },
//       { text: "6", correct: false }
//     ]
//   },
//   {
//     question: "Which language runs in browser?",
//     answers: [
//       { text: "Python", correct: false },
//       { text: "Java", correct: false },
//       { text: "JavaScript", correct: true },
//       { text: "C++", correct: false }
//     ]
//   }
// ];

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerText = "Next";
//   showQuestion();
// }

// function showQuestion() {
//   resetState();
//   let currentQuestion = questions[currentQuestionIndex];
//   questionElement.innerText = currentQuestion.question;

//   currentQuestion.answers.forEach(answer => {
//     const button = document.createElement("button");
//     button.innerText = answer.text;
//     button.classList.add("btn");
//     answerButtons.appendChild(button);

//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }

//     button.addEventListener("click", selectAnswer);
//   });
// }

// function resetState() {
//   nextButton.style.display = "none";
//   answerButtons.innerHTML = "";
// }

// function selectAnswer(e) {
//   const selectedBtn = e.target;
//   const correct = selectedBtn.dataset.correct === "true";

//   if (correct) {
//     selectedBtn.classList.add("correct");
//     score++;
//   } else {
//     selectedBtn.classList.add("wrong");
//   }

//   Array.from(answerButtons.children).forEach(button => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });

//   nextButton.style.display = "block";
// }

// function showScore() {
//   resetState();
//   questionElement.innerText = `Your Score: ${score}/${questions.length}`;
//   nextButton.innerText = "Restart";
//   nextButton.style.display = "block";
// }

// function handleNextButton() {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     showQuestion();
//   } else {
//     showScore();
//   }
// }

// nextButton.addEventListener("click", () => {
//   if (currentQuestionIndex < questions.length) {
//     handleNextButton();
//   } else {
//     startQuiz();
//   }
// });

// startQuiz();




const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false }
    ]
  },
  {
    question: "Which language runs in browser?",
    answers: [
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// 👉 Timer element (HTML me add karna hoga)
let timerElement = document.createElement("h3");
document.querySelector(".quiz-container").prepend(timerElement);

let currentQuestionIndex = 0;
let score = 0;

// ⏱️ Timer variables
let timeLeft = 30; // total time (seconds)
let timer;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 30;

  startTimer();
  showQuestion();
}

// ⏱️ Timer start
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerElement.innerText = "Time Left: " + timeLeft + "s";

    if (timeLeft <= 0) {
      clearInterval(timer);
      showScore();
    }
  }, 1000);
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

  if (correct) score++;

  nextButton.style.display = "block";
}

function showScore() {
  clearInterval(timer); // ⛔ timer stop
  resetState();
  questionElement.innerText = `Your Score: ${score}/${questions.length}`;
  nextButton.innerText = "Restart";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();