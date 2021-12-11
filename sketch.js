var open;
var openM;
var counter = 0;
var timer = 0;

function preload(){
  openM = loadSound("open.mp3");
  open = loadImage("open.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(open, 0, 0, width, height);
  if(counter === 1){
    timer = timer + 1;
    console.log(timer);
  if(timer > 800){
    window.location.href = "ar.html";
  }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  openM.play();
  counter = 1;
window.location.href = "ar.html";
}