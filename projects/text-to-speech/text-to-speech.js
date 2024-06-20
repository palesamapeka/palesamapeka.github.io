const textToUtter = document.querySelector("textarea");
const button = document.getElementById("play");
const listOfVoice = document.querySelector("select");
const paragraph = document.getElementById("hover-text");
const hero = document.getElementById("hero");

function voiceLoader() {
  let voices = [];

  window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); //gets list of voice available on device

    voices.forEach((voice, index) => {
      let option = new Option(voice.name, index);
      listOfVoice.add(option);
    });
    /**
     * Populates the select element with all the available voices on the current device
     */

    // Set the first available voice as default
    if (voices.length > 0) {
      utterance.voice = voices[0];
    }
  };
}

voiceLoader();

function textToSpeech(text) {
  const utterance = new SpeechSynthesisUtterance();
  let selectedVoiceIndex = listOfVoice.selectedIndex;
  utterance.voice = voices[selectedVoiceIndex];
  utterance.text = text;
  window.speechSynthesis.speak(utterance);
}

function textToSpeechOnHover(element) {
  element.addEventListener("mouseover", function () {
    textToSpeech(this.innerText);
  });
}

button.addEventListener("click", () => {
  textToSpeech(textToUtter.value);
});

textToSpeechOnHover(paragraph);
textToSpeechOnHover(hero);
textToSpeechOnHover(button);

/**
 * https://www.youtube.com/watch?v=3oDNqHZ7UKY&list=TLPQMTkwNjIwMjR9uGoemOv6gw&index=31
 */
