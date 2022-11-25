let mySound;
let botton;

function setup(){
    createCanvas(640,480);
    soundFormats('mp3','ogg');
    mySound = loadSound('cpr',loadMusic);
    //mySound.play();
    button=createButton('play');
    button.mousePressed(togglePlaying);
}

// function loadmusic(){
//     mySound.play();
// }

// function draw(){
//     Fill(255,0,0);
//     ellipse(50,50,100,100);
// }

// var song;
// var button;

// function setup(){
//     createCanvas(200,200);
//     song=loadSound('cpr.mp3',loaded);
//     button=createButton('play');
//     button.mousePressed(togglePlaying);
//     background(51);
// }

function togglePlaying(){
    if(!mySound.isPlaying()){
        mySound.play();
        button.html('pause');
    }else{
        mySound.stop();
        button.html('play');
    }
}

function loadMusic(){
    console.log("It's Working");
}

function draw(){
    fill(255,0,0);
    ellipse(50,50,100,100);
}