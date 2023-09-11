const questions = [
    {
        question: "What is the capital of France?",
        choices: {
            A: "Berlin",
            B: "Madrid",
            C: "Paris",
            D: "Rome"
        },
        correctAnswer: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: {
            A: "Earth",
            B: "Mars",
            C: "Venus",
            D: "Jupiter"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the largest mammal in the world?",
        choices: {
            A: "Elephant",
            B: "Giraffe",
            C: "Blue Whale",
            D: "Kangaroo"
        },
        correctAnswer: "C"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choiceElements = {
    A: document.getElementById("choice-A"),
    B: document.getElementById("choice-B"),
    C: document.getElementById("choice-C"),
    D: document.getElementById("choice-D")
};
const submitButton = document.getElementById("submit-button");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    for (const choice in currentQuestion.choices) {
        choiceElements[choice].textContent = currentQuestion.choices[choice];
    }
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect. The correct answer is " + currentQuestion.choices[currentQuestion.correctAnswer];
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    questionElement.textContent = "Quiz Complete!";
    submitButton.style.display = "none";
    resultElement.textContent = "";
    scoreElement.textContent = "Your Score: " + score + " out of " + questions.length;
}

loadQuestion();

submitButton.addEventListener("click", function () {
    const selectedAnswer = document.querySelector('input[name="choice"]:checked');
    if (selectedAnswer) {
        checkAnswer(selectedAnswer.value);
        selectedAnswer.checked = false;
    } else {
        alert("Please select an answer.");
    }
});
