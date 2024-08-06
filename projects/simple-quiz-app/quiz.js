//https://www.youtube.com/watch?v=PBcqGxrr9g8&list=PLjwm_8O3suyOgDS_Z8AWbbq3zpCmR-WE9&index=3

const { questionsAndAnswersArr } = require("./helper-array");

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const scoreElement = document.getElementById("score")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questionsAndAnswersArr[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}

startQuiz();
