var x = 260
var y =145
var d = 10;

function setup() {
  createCanvas(600, 400);
  background(304);
}

function draw() {
  // loop circle
  for(var i=1; i < 21; i++) {
  strokeWeight(3);
  ellipse(x, y, i*d, i*d);
  }
}
