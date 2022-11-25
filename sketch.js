// let mySound;
// function setup(){
//     soundForamats('mp3','ogg');
//     mySound = loadSound('assets/doorbell');
//     mySound.play();
// }

// function loadmusic(){
//     mySound.play();
// }

// function draw(){
//     Fill(255,0,0);
//     ellipse(50,50,100,100);
// }

var song;
var button;

function setup(){
    createCanvas(200,200);
    song=loadSound('cpr.mp3',loaded);
    button=createButton('play');
    button.mousePressed(togglePlaying);
    background(51);
}

function togglePlay(){
    if(!song.isPlaying()){
        song.setVolume(0.3);
        button.html('pause');
    }else{
        song.stop();
        button.html('play');
    }
}

function loaded(){
    console.log('loaded');
}