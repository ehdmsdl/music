let musicFile;
let musicFile2;
let button;  
let button2;
let button3;
let button5;
let slider;
let vol = 0.5;
var sliderVolume;
var sliderRate;
var jumpButton;
var t=0;
let amp;
var rB;
let x = 0;
let y = 0;
let blowSize = 600; 
// var volhistory = [];



function setup()
{
    createCanvas(640, 480);

    soundFormats('mp3', 'ogg');
    musicFile = loadSound('cpr', loadMusic);
    musicFile2 = loadSound('64', loadMusic);

    
    button = createButton("play");
    button.mousePressed(togglePlaying1);

    button2 = createButton("Music1");
    button2.mousePressed(togglePlaying2);
    music = 1;

    button3 = createButton("jump");
    button3.mousePressed(togglePlaying3);
    // triangle (50,20,10,20);
    // button.mousePressed(togglePlaying4);
    volumeslider = createButton("volume");
    volumeslider.position(470,10)
    

    volume = createSlider(0, 1, vol, 0.01);
    volume.size(200);
    volume.position(400,30)
    // volume = createButton("volume");
    // musicFile.setVolume(0.5);
    // slider = createSlider(0, 1, 0.5, 0.01);
    // music = 1;
    // rate1 = 1.0;
    // rate2 = 1.0;
    // musicFile.rate(rate1);
    // musicFile2.rate(rate2);

    button5 = createButton("speed");
    button5.position(130,10);


    slider = createSlider(0, 1, 0.5, 0.01);
    slider.position(50,30);
    slider.style('width','200px');   //속도조절

    
    amp = new p5.Amplitude();
    
    // background(50);
    
}



function togglePlaying1(){
    if(music === 1){
        if(!musicFile.isPlaying()){
            // rB=musicFile.reverseBuffer();
            musicFile.setVolume(0.5);
            musicFile.rate(1);
            musicFile.play();
            button.html('pause');
        }else{
            musicFile.stop();
            button.html('play');
        }
    }
    if(music === 2){
        if(!musicFile2.isPlaying()){
            // rB=musicFile.reverseBuffer();
            // musicFile2.jump(200);
            musicFile2.setVolume(0.5);
            musicFile.rate(1);
            musicFile2.play();
            button.html('pause');
        }else{
            musicFile2.stop();
            button.html('play');
        }
    }
}

function togglePlaying2(){
    if(music === 1){
        music = 2;
        button2.html('Music2');
    }else{
        music = 1;
        button2.html('Music1');
    }
    console.log(music);
}

function togglePlaying3(){
    musicFile.duration();
    if (music === 1) {
        var totalTime = musicFile.duration();
        var current = musicFile.currentTime();
        musicFile.jump(totalTime < current + 10 ? totalTime : current + 10);
    }  
    if (music === 2) {
        var totalTime = musicFile2.duration();
        var current = musicFile2.currentTime();
        musicFile2.jump(totalTime < current + 10 ? totalTime : current + 10);
    }
}

function jumpSong() {
    var len = song.duration(); var t = 0; //random(len); console.log(t); song.jump(t);
    }


function botton5(){
    
}

function loadMusic()
{
    console.log("It's Working");
}



function draw(){
    background(94, 114, 212);
    console.log(amp.getLevel(), musicFile.duration());
    // musicFile.pan(sliderPan.value());
    
    // musicFile.setVolume(slider.value;());

    var vol = amp.getLevel();                //소리에따른 형태변형
    var diam = map(vol, 0, 0.3, 10, 200);    //소리에따른 형태변형
    

    blowSize -= 0.3;
    
    fill(236, 243, 201);
    ellipse(320, 240, blowSize, blowSize);
    
fill(200);
stroke(0);
ellipse(x, y, 66, 66);
x = lerp(x, mouseX, 0.05);
y = lerp(y, mouseY, 0.05);

fill(189,153,195);
ellipse(width/2, height/2, diam, diam)    //소리에따른 형태변형

ellipse(musicFile.currentTime()*10,480-amp.getLevel()*10000, 10, 10);

musicFile.rate(slider.value());
musicFile2.rate(slider.value());

musicFile.setVolume(volume.value());
musicFile2.setVolume(volume.value());

}







// let img, song;
// let vol = 0.5;

// function preload(){
//   song = loadSound('cpr.mp3');
// }

// function setup(){
//   createCanvas(img.width, img.height);
//   playBtn = createButton('PLAY');
//   playBtn.mousePressed(mp3_play);
//   volume = createSlider(0, 1, vol, 0.01);
//   volume.size(300);
// }
// function mp3_play(){
//   if(song.isPlaying()){
//     song.pause();
//     playBtn.html('PLAY');
//     background(255);
//   }else{
//     song.play();
//     playBtn.html('PAUSE');
//     background(img);
//   }
// }

// function draw(){
//   song.setVolume(volume.value());
// } -볼륨조절