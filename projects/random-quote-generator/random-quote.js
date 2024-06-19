const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet");

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
