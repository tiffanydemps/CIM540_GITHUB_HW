var x = 100
var d = 150;
var y = 110;
var s = 30

function setup() {
  createCanvas(600, 600);
  background(255);
  noFill();
}

function draw() {
rect(x,y, s, s);
rect(x+d, y, 2*s,2*s);
rect(x+d*2, y, 4*s, 4*s);
}
