let mySound;
function setup(){
    soundForamats('mp3','ogg');
    mySound = loadSound('assets/doorbell');
    mySound.play();
}