/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./helper-array.js":
/*!*************************!*\
  !*** ./helper-array.js ***!
  \*************************/
/***/ ((module) => {

eval("const questionsAndAnswersArr = [\r\n  {\r\n    question: \"Which is the largest animal in the world?\",\r\n    answers: [\r\n      { text: \"Shark\", correct: false },\r\n      { text: \"Blue Whale\", correct: true },\r\n      { text: \"Elephant\", correct: false },\r\n      { text: \"Giraffe\", correct: false },\r\n    ],\r\n  },\r\n  {\r\n    question: \"What is the capital city of Australia?\",\r\n    answers: [\r\n      { text: \"Sydney\", correct: false },\r\n      { text: \"Melbourne\", correct: false },\r\n      { text: \"Canberra\", correct: true },\r\n      { text: \"Brisbane\", correct: false },\r\n    ],\r\n  },\r\n  {\r\n    question: \"What is the chemical symbol for Gold?\",\r\n    answers: [\r\n      { text: \"Gd\", correct: false },\r\n      { text: \"Go\", correct: false },\r\n      { text: \"Ag\", correct: false },\r\n      { text: \"Au\", correct: true },\r\n    ],\r\n  },\r\n  {\r\n    question: \"In what year was the first iPhone released?\",\r\n    answers: [\r\n      { text: \"2005\", correct: false },\r\n      { text: \"2007\", correct: true },\r\n      { text: \"2008\", correct: false },\r\n      { text: \"2010\", correct: false },\r\n    ],\r\n  },\r\n  {\r\n    question: \"What is the tallest mountain in the world?\",\r\n    answers: [\r\n      { text: \"K2\", correct: false },\r\n      { text: \"Mount Everest\", correct: true },\r\n      { text: \"Mount Kilimanjaro\", correct: false },\r\n      { text: \"Denali\", correct: false },\r\n    ],\r\n  },\r\n  {\r\n    question: \"Who painted the 'Mona Lisa'\",\r\n    answers: [\r\n      { text: \"Michelangelo\", correct: false },\r\n      { text: \"Leonardo da Vinci\", correct: true },\r\n      { text: \"Raphael\", correct: false },\r\n      { text: \"Caravaggio\", correct: false },\r\n    ],\r\n  },\r\n  {\r\n    question: \"Which planet is known as the 'Red Planet'\",\r\n    answers: [\r\n      { text: \"Venus\", correct: false },\r\n      { text: \"Mars\", correct: true },\r\n      { text: \"Jupiter\", correct: false },\r\n      { text: \"Saturn\", correct: false },\r\n    ],\r\n  },\r\n  {\r\n    question: \"Who discovered electricity?\",\r\n    answers: [\r\n      { text: \"Isaac Newton\", correct: false },\r\n      { text: \"Benjamin Franklin\", correct: true },\r\n      { text: \"Nikola Tesla\", correct: false },\r\n      { text: \"Michael Faraday\", correct: false },\r\n    ],\r\n  },\r\n  {\r\n    question: \"What is the world's largest ocean?\",\r\n    answers: [\r\n      { text: \"Southern Ocean\", correct: false },\r\n      { text: \"Pacific Ocean\", correct: true },\r\n      { text: \"Indian Ocean\", correct: false },\r\n      { text: \"Atlantic Ocean\", correct: false },\r\n    ],\r\n  },\r\n  {\r\n    question: \"Who came up with the theory of relativity?\",\r\n    answers: [\r\n      { text: \"Edgar Allan Poe\", correct: false },\r\n      { text: \"Albert Einstein\", correct: true },\r\n      { text: \"Galileo Galilei\", correct: false },\r\n      { text: \"Louis Pasteur\", correct: false },\r\n    ],\r\n  },\r\n  {\r\n    question: \"What language is spoken in Brazil?\",\r\n    answers: [\r\n      { text: \"Spanish\", correct: false },\r\n      { text: \"Portuguese \", correct: true },\r\n      { text: \"English\", correct: false },\r\n      { text: \"French\", correct: false },\r\n    ],\r\n  },\r\n  {\r\n    question: \"What is sushi traditionally wrapped in?\",\r\n    answers: [\r\n      { text: \"Rice Paper\", correct: false },\r\n      { text: \"Seaweed\", correct: true },\r\n      { text: \"Bamboo\", correct: false },\r\n      { text: \"Lettuce\", correct: false },\r\n    ],\r\n  }\r\n];\r\n\r\nmodule.exports = {questionsAndAnswersArr}\n\n//# sourceURL=webpack://simple-quiz-app/./helper-array.js?");

/***/ }),

/***/ "./quiz.js":
/*!*****************!*\
  !*** ./quiz.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//https://www.youtube.com/watch?v=PBcqGxrr9g8&list=PLjwm_8O3suyOgDS_Z8AWbbq3zpCmR-WE9&index=3\r\n\r\nconst { questionsAndAnswersArr } = __webpack_require__(/*! ./helper-array */ \"./helper-array.js\");\r\n\r\nconst questionElement = document.getElementById(\"question\");\r\nconst answerButtons = document.getElementById(\"answer-buttons\");\r\nconst nextBtn = document.getElementById(\"next-btn\");\r\nconst scoreElement = document.getElementById(\"score\");\r\n\r\nlet currentQuestionIndex = 0;\r\nlet score = 0;\r\n\r\nfunction startQuiz() {\r\n  currentQuestionIndex = 0;\r\n  score = 0;\r\n  nextBtn.innerHTML = \"Next\";\r\n  showQuestion();\r\n}\r\n\r\nfunction showQuestion() {\r\n  resetState();\r\n  let currentQuestion = questionsAndAnswersArr[currentQuestionIndex];\r\n  let questionNum = currentQuestionIndex + 1;\r\n  questionElement.innerHTML = questionNum + \". \" + currentQuestion.question;\r\n\r\n  currentQuestion.answers.forEach((answer) => {\r\n    const button = document.createElement(\"button\");\r\n    button.innerHTML = answer.text;\r\n    button.classList.add(\"btn\");\r\n    answerButtons.appendChild(button);\r\n\r\n    if (answer.correct) {\r\n      button.dataset.correct = answer.correct;\r\n    }\r\n    button.addEventListener(\"click\", selectAnswer);\r\n  });\r\n}\r\n\r\nfunction resetState() {\r\n  nextBtn.style.display = \"none\";\r\n  while (answerButtons.firstChild) {\r\n    answerButtons.removeChild(answerButtons.firstChild);\r\n  }\r\n}\r\n\r\nfunction selectAnswer(e) {\r\n  const selectedBtn = e.target;\r\n  const isCorrect = selectedBtn.dataset.correct === \"true\";\r\n\r\n  if (isCorrect) {\r\n    selectedBtn.classList.add(\"correct\");\r\n    score++;\r\n    scoreElement.innerHTML += \"🔥\";\r\n  } else {\r\n    selectedBtn.classList.add(\"incorrect\");\r\n    scoreElement.innerHTML += \"❌\";\r\n  }\r\n\r\n  Array.from(answerButtons.children).forEach((button) => {\r\n    if (button.dataset.correct === \"true\") {\r\n      button.classList.add(\"correct\");\r\n    }\r\n    button.disabled = true;\r\n    nextBtn.style.display = \"block\";\r\n  });\r\n}\r\n\r\nnextBtn.addEventListener(\"click\", nextQuestion);\r\n\r\nfunction nextQuestion() {\r\n  if (currentQuestionIndex < questionsAndAnswersArr.length) {\r\n    handleNextButton();\r\n  } else {\r\n    startQuiz();\r\n  }\r\n}\r\n\r\nfunction handleNextButton() {\r\n  currentQuestionIndex++;\r\n  if (currentQuestionIndex < questionsAndAnswersArr.length) {\r\n    showQuestion();\r\n  } else {\r\n    showScore();\r\n    scoreElement.innerHTML = \"\";\r\n  }\r\n}\r\n\r\nfunction showScore() {\r\n  resetState();\r\n  questionElement.innerHTML = `You scored ${score} out of ${questionsAndAnswersArr.length}`;\r\n  nextBtn.innerHTML = \"Play Again\";\r\n  nextBtn.style.display = \"block\";\r\n}\r\n\r\nstartQuiz();\r\n\n\n//# sourceURL=webpack://simple-quiz-app/./quiz.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./quiz.js");
/******/ 	
/******/ })()
;