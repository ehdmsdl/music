let mySound;
function setup(){
    soundForamats('mp3','ogg');
    mySound = loadSound('assets/doorbell');
    mySound.play();
}

function loadmusic(){
    mySound.play();
}

function draw(){
    Fill(255,0,0);
    ellipse(50,50,100,100);
}