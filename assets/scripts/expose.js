// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var drop = document.getElementById('horn-select');
  var image = document.querySelector('img[src*="image"]');
  var horn = '';  
  var bar = document.querySelector('input');
  var icon = document.querySelector('img[src*="volume"]');
  var btn = document.querySelector('button');
  var sound = document.querySelector('.hidden');

  // change image
  drop.addEventListener('change', (event) => {
    horn= event.target.value;
    image.src = ('assets/images/'+ horn +'.svg');
  });
  
  // adjust volumne
  bar.addEventListener('change', (event)=>{
    var volume = bar.value ;
    if (volume == 0) {
      icon.src = 'assets/icons/volume-level-0.svg';
    }
    else if (volume < 33) {
      icon.src = 'assets/icons/volume-level-1.svg';
    }
    else if (volume < 67) {
      icon.src = 'assets/icons/volume-level-2.svg';
    }
    else{
      icon.src = 'assets/icons/volume-level-3.svg'
    }
    sound.volume = volume / 100;
  });

  // play sound
  btn.addEventListener('click', (event) => {
    sound.src = ('assets/audio/' + horn + '.mp3');
    sound.play();
  });
}