const questions = [
    {
        question: "What is JavaScript?",
        answer:[
            { text: "Programming Language", correct: "true"},
            { text: "Markup Language", correct: "false"},
            { text: "Database", correct: "false"},
            { text: "OS", correct: "false"},
        ]
    },
    {
        question: "Which keyword is used to declare a variable??",
        answer:[
            { text: "int", correct: "false"},
            { text: "string", correct: "false"},
            { text: "var", correct: "true"},
            { text: "float", correct: "false"},
        ]
    },
    {
        question: "Which symbol is used for comments?",
        answer:[
            { text: "##", correct: "false"},
            { text: "//", correct: "true"},
            { text: "!=", correct: "false"},
            { text: "**", correct: "false"},
        ]
    },
    {
        question: "What will typeof null return?",
        answer:[
            { text: "null", correct: "false"},
            { text: "undefined", correct: "false"},
            { text: "string", correct: "false"},
            { text: "object", correct: "true"},
        ]
    },
    {
        question: "Which is a correct variable name?",
        answer:[
            { text: "1name", correct: "false"},
            { text: "_name", correct: "true"},
            { text: "@name", correct: "false"},
            { text: "#name", correct: "false"},
        ]
    },
    {
        question: "Which method is used to print in console?",
        answer:[
            { text: "print()", correct: "false"},
            { text: "log()", correct: "false"},
            { text: "console.log()", correct: "true"},
            { text: "echo()", correct: "false"},
        ]
    },
    {
        question: "Which operator is strict equality?",
        answer:[
            { text: "==", correct: "false"},
            { text: "===", correct: "true"},
            { text: "=", correct: "false"},
            { text: "!=", correct: "false"},
        ]
    },
    {
        question: "What is NaN?",
        answer:[
            { text: "Not a Number", correct: "true"},
            { text: "Not a Name", correct: "false"},
            { text: "New Array Name", correct: "false"},
            { text: "None", correct: "false"},
        ]
    },
    {
        question: "What is an array?",
        answer:[
            { text: "Single value", correct: "false"},
            { text: "Function", correct: "false"},
            { text: "Loop", correct: "false"},
            { text: "Collection of values", correct: "true"},
        ]
    },
    {
        question: "What is a function?",
        answer:[
            { text: "Block of code", correct: "true"},
            { text: "Variable", correct: "false"},
            { text: "Loop", correct: "false"},
            { text: "Object", correct: "false"},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;


    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again..";
    nextButton.style.display = "block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();