//https://www.youtube.com/watch?v=PBcqGxrr9g8&list=PLjwm_8O3suyOgDS_Z8AWbbq3zpCmR-WE9&index=3

const { questionsAndAnswersArr } = require("./helper-array");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questionsAndAnswersArr[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    scoreElement.innerHTML += "🔥";
  } else {
    selectedBtn.classList.add("incorrect");
    scoreElement.innerHTML += "❌";
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
    nextBtn.style.display = "block";
  });
}

nextBtn.addEventListener("click", nextQuestion);

function nextQuestion() {
  if (currentQuestionIndex < questionsAndAnswersArr.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionsAndAnswersArr.length) {
    showQuestion();
  } else {
    showScore();
    scoreElement.innerHTML = "";
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questionsAndAnswersArr.length}`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

startQuiz();
