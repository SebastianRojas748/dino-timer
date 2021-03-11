/***********************************************************************************
  dino timer
  by Sebastian Rojas
  dino timer
***********************************************************************************/
//image variables
var trexAssets = [];

//preload images in array
function preload() {

  //trex images
  trexAssets[0] = loadImage('assets/trex.png');
  //roar
  roar = loadSound('assets/roar.mp3');

}
var start; // the button
var timerValue = 15;
let roar

function setup() {
  createCanvas(800, 800);

  // setInterval(timeIt, 1000);

  start = createButton("START");
  start.position(400, 470);
  start.mousePressed(timerCountdown);
}

function draw() {
  background(220);
  textAlign(CENTER);

  
  if (timerValue > 0) {
    text(timerValue, 400, 400);
  } else if (timerValue == 0) {
    image(trexAssets[0], 400, 400);
  }

}

function timerCountdown() {
  setInterval(function() {
    if (timerValue > 0) {
      timerValue--;
    }
  }, 1000);
}