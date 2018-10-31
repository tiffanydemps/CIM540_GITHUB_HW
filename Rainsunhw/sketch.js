var x = 100;
var y = 0;
var speed = 5;

function setup() {
  createCanvas(680, 420);
}

function draw() {
  background(0);
  stroke(255);
  y += speed;
  line(x,y,x,y+20);
  line(2*x, y-30, 2*x, y+20-30);
  line(3*x, y+50, 3*x, y+20+50);
  line(4*x, y-10, 4*x, y+20-10);
  x= random(0, width);

  if(y > height) {
    y = 0;
  }

  currentTime = millis();
  
  if(currentTime > 5000) {

  fill(255, 255, 0);
  ellipse(width/2, y, 140, 140);
  }


}
