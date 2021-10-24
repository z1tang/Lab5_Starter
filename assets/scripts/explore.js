// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // change image
  var drop = document.getElementById('horn-select');
  var image = document.querySelector('img[src*="image"]');

  drop.addEventListener('change', (event) => {
    var horn = event.target.value;
    image.src = ('assets/images/'+ horn +'.svg');
  });
  
  // play sound
  var btn = document.querySelector('button');
  var sound = document.getElementsByClassName('hidden');
  btn.addEventListener('click', (event) => {
    sound.src = ('assets/audio/' + horn + '.mp3');
    sound.play();
  });


}