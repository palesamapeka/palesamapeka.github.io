let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices(); //gets list of voice available on device

  // Set the first available voice as default
  if (voices.length > 0) {
    console.log("Voices Loaded");
  }
};

function textToSpeech(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  if (voices.length > 0) {
    utterance.voice = voices[0];
  }
  window.speechSynthesis.speak(utterance);
}

function textToSpeechOnHover(element) {
  element.addEventListener("mouseover", function () {
    textToSpeech(this.innerText);
  });
}
module.exports = {textToSpeechOnHover}