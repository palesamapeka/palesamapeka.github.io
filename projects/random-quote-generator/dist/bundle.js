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

/***/ "../global-functions/text-to-speech.js":
/*!*********************************************!*\
  !*** ../global-functions/text-to-speech.js ***!
  \*********************************************/
/***/ ((module) => {

eval("let voices = [];\r\n\r\nwindow.speechSynthesis.onvoiceschanged = () => {\r\n  voices = window.speechSynthesis.getVoices(); //gets list of voice available on device\r\n\r\n  // Set the first available voice as default\r\n  if (voices.length > 0) {\r\n    console.log(\"Voices Loaded\");\r\n  }\r\n};\r\n\r\nfunction textToSpeech(text) {\r\n  const utterance = new SpeechSynthesisUtterance(text);\r\n  if (voices.length > 0) {\r\n    utterance.voice = voices[0];\r\n  }\r\n  window.speechSynthesis.speak(utterance);\r\n}\r\n\r\nfunction textToSpeechOnHover(element) {\r\n  element.addEventListener(\"mouseover\", function () {\r\n    textToSpeech(this.innerText);\r\n  });\r\n}\r\nmodule.exports = {textToSpeechOnHover}\n\n//# sourceURL=webpack://random-quote-generator/../global-functions/text-to-speech.js?");

/***/ }),

/***/ "./random-quote.js":
/*!*************************!*\
  !*** ./random-quote.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {textToSpeechOnHover} = __webpack_require__(/*! ../global-functions/text-to-speech */ \"../global-functions/text-to-speech.js\");\r\nconst apiUrl = \"https://api.quotable.io/random\";\r\nconst quote = document.getElementById(\"quote\");\r\nconst newQuoteBtn = document.getElementById(\"new-quote\");\r\nconst tweetBtn = document.getElementById(\"tweet\");\r\nconst author = document.getElementById(\"author\");\r\n\r\nasync function getRandomQuote(url) {\r\n  const response = await fetch(url);\r\n  let data = await response.json();\r\n  console.log(data);\r\n  quote.innerHTML = data.content;\r\n  author.innerHTML = data.author;\r\n}\r\ngetRandomQuote(apiUrl);\r\n\r\nfunction tweet() {\r\n  const formattedText =\r\n    quote.innerHTML + \"%0A%0A\" + \" \".repeat(50) + \"--- by \" + author.innerHTML;\r\n  window.open(\r\n    \"https://twitter.com/intent/tweet?text=\" + formattedText,\r\n    \"Tweet Window\",\r\n    \"width=600, height=300\"\r\n  );\r\n}\r\n\r\nnewQuoteBtn.addEventListener(\"click\", () => {\r\n  getRandomQuote(apiUrl);\r\n});\r\n\r\ntweetBtn.addEventListener(\"click\", () => {\r\n  tweet();\r\n});\r\n\r\ntextToSpeechOnHover(quote);\r\ntextToSpeechOnHover(author);\r\ntextToSpeechOnHover(newQuoteBtn);\r\ntextToSpeechOnHover(tweetBtn);\r\n\n\n//# sourceURL=webpack://random-quote-generator/./random-quote.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./random-quote.js");
/******/ 	
/******/ })()
;