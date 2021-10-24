// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;
  var btn = document.querySelector('button');
  var face = document.querySelector('img');
  var voice_select = document.getElementById('voice-select');
  var voice = '';
  var voices = synth.getVoices();

  // We adjust our code from MDN docs
  // which tell us how to load all the voices and push them to the options
  // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

  // load voices
  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voice_select.appendChild(option);
  }

  // speak
  btn.addEventListener('click', (event) => {
    var text = document.querySelector('textarea').value;
    var speech = new SpeechSynthesisUtterance(text);
    var select = voice-select.selectedOptions[0].getAttribute('data-name');
    for(var i = 0; i < voices.length ; i++) {
      if(voices[i].name === select) {
        speech.voice = voices[i];
      }
    }
    synth.speak(speech);
  })
}