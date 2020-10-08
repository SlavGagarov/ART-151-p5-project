let bgImg;
let position=1;
let displayImg;
let song;
let xPos=0;
let delayer=1;
let imgArr = [];


function preload() {
  song = loadSound('happyMsc.mp3');
}

function setup() {
  createCanvas(1300, 700);
  bgImg = loadImage('jgBG.jpg');
  imgArr.push(loadImage('walk1.png'));
  imgArr.push(loadImage('walk2.png'));
  displayImg = imgArr[0];
}

function draw() {
  delayer++;
  imgArr[0].resize(240,300);
  imgArr[1].resize(240,300);
  
  background(220);
  image(bgImg,0,0);
  image(displayImg,xPos,350);
  
  if(delayer%10 == 0){
    switchPosition();
  }
}

function switchPosition(){
  xPos+=30;
  if(xPos>1100)
    xPos=-100;
  
  if(position == 1){
    displayImg = imgArr[1];
    position =2;
  }
  else{
    displayImg = imgArr[0];
    position =1;
  }
}

function mousePressed() {
  song.play();
}