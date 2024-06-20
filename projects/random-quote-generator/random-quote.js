const {textToSpeechOnHover} = require("../global-functions/text-to-speech");
const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet");
const author = document.getElementById("author");

async function getRandomQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getRandomQuote(apiUrl);

function tweet() {
  const formattedText =
    quote.innerHTML + "%0A%0A" + " ".repeat(50) + "--- by " + author.innerHTML;
  window.open(
    "https://twitter.com/intent/tweet?text=" + formattedText,
    "Tweet Window",
    "width=600, height=300"
  );
}

newQuoteBtn.addEventListener("click", () => {
  getRandomQuote(apiUrl);
});

tweetBtn.addEventListener("click", () => {
  tweet();
});

textToSpeechOnHover(quote);
textToSpeechOnHover(author);
textToSpeechOnHover(newQuoteBtn);
textToSpeechOnHover(tweetBtn);

/**
 * Installing Webpack:
 * 
 * 1. npm init
 * 2. npm i webpack webpack-cli --save-dev
 * 
 * Sometimes the webpack config file is not created automatically, here's what you do
 * If you don't have a webpack configuration file, you can specify the entry and output 
 * files directly in the command line:
 * `npx webpack [entry point of your code (relative path)] -o ./dist/bundle.js`
 * 
 * 3. Delete the dist folder and create one manually
 * 4. Create a webpack configuration file (webpack.config.js)
 *    const path = require('path');

      module.exports = {
        entry: './src/index.js', // Entry point of your application
        output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
       filename: 'bundle.js', // Output filename
  },
}; 5.  Include the bundled file in your HTML <scripts src="dist/bundle.js"></scripts>
   5. run `npm run build` or `npx webpack --watch` to automatically bundle your code
      after making changes
 */