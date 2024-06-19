const utterance = new SpeechSynthesisUtterance();
const textToUtter = document.querySelector("textarea");
const button = document.getElementById("play");
const listOfVoice = document.querySelector("select");

  let voices = [];

  window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); //gets list of voice available on device
    utterance.voice = voices[0]; //first available voice that will be used by default

    voices.forEach((voice, index) => (listOfVoice.options(index) = new Option(voice.name, index)));
  };


button.addEventListener("click", () => {
    utterance.text = textToUtter.value; /**
    Gets the value from the textarea and converts it from 
    text to speech
    */
  
    window.speechSynthesis.speak(utterance);
  });


/**
 * https://www.youtube.com/watch?v=3oDNqHZ7UKY&list=TLPQMTkwNjIwMjR9uGoemOv6gw&index=31
 */
