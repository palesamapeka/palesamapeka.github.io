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

eval("let voices = [];\n\nwindow.speechSynthesis.onvoiceschanged = () => {\n  voices = window.speechSynthesis.getVoices(); //gets list of voice available on device\n\n  // Set the first available voice as default\n  if (voices.length > 0) {\n    console.log(\"Voices Loaded\");\n  }\n};\n\nfunction textToSpeech(text) {\n  const utterance = new SpeechSynthesisUtterance(text);\n  if (voices.length > 0) {\n    utterance.voice = voices[0];\n  }\n  window.speechSynthesis.speak(utterance);\n}\n\nfunction textToSpeechOnHover(element) {\n  element.addEventListener(\"mouseover\", function () {\n    textToSpeech(this.innerText);\n  });\n}\nmodule.exports = {textToSpeechOnHover}\n\n//# sourceURL=webpack://random-quote-generator/../global-functions/text-to-speech.js?");

/***/ }),

/***/ "./random-quote.js":
/*!*************************!*\
  !*** ./random-quote.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const {textToSpeechOnHover} = __webpack_require__(/*! ../global-functions/text-to-speech */ \"../global-functions/text-to-speech.js\");\nconst apiUrl = \"https://api.quotable.io/random\";\nconst quote = document.getElementById(\"quote\");\nconst newQuoteBtn = document.getElementById(\"new-quote\");\nconst tweetBtn = document.getElementById(\"tweet\");\nconst author = document.getElementById(\"author\");\n\nasync function getRandomQuote(url) {\n  const response = await fetch(url);\n  let data = await response.json();\n  console.log(data);\n  quote.innerHTML = data.content;\n  author.innerHTML = data.author;\n}\ngetRandomQuote(apiUrl);\n\nfunction tweet() {\n  const formattedText =\n    quote.innerHTML + \"%0A%0A\" + \" \".repeat(50) + \"--- by \" + author.innerHTML;\n  window.open(\n    \"https://twitter.com/intent/tweet?text=\" + formattedText,\n    \"Tweet Window\",\n    \"width=600, height=300\"\n  );\n}\n\nnewQuoteBtn.addEventListener(\"click\", () => {\n  getRandomQuote(apiUrl);\n});\n\ntweetBtn.addEventListener(\"click\", () => {\n  tweet();\n});\n\ntextToSpeechOnHover(quote);\ntextToSpeechOnHover(author);\ntextToSpeechOnHover(newQuoteBtn);\ntextToSpeechOnHover(tweetBtn);\n\n/**\n * Installing Webpack:\n * \n * 1. npm init\n * 2. npm i webpack webpack-cli --save-dev\n * \n * Sometimes the webpack config file is not created automatically, here's what you do\n * If you don't have a webpack configuration file, you can specify the entry and output \n * files directly in the command line:\n * `npx webpack [entry point of your code (relative path)] -o ./dist/bundle.js`\n * \n * 3. Delete the dist folder and create one manually\n * 4. Create a webpack configuration file (webpack.config.js)\n *    const path = require('path');\n\n      module.exports = {\n        entry: './src/index.js', // Entry point of your application\n        output: {\n        path: path.resolve(__dirname, 'dist'), // Output directory\n       filename: 'bundle.js', // Output filename\n  },\n}; 5.  Include the bundled file in your HTML <scripts src=\"dist/bundle.js\"></scripts>\n   5. run `npm run build` or `npx webpack --watch` to automatically bundle your code\n      after making changes\n */\n\n//# sourceURL=webpack://random-quote-generator/./random-quote.js?");

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