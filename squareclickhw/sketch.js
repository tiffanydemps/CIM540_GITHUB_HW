function setup() {
  //put setup code here
  createCanvas(480, 300);
  background(0);
  noStroke();
}

function draw() {
//mouse color change
fill(255,255,255);
  if(mouseIsPressed) {
  if(mouseX<230)
  {
  fill(255,0,0);
} else{
  fill(0,255,0);
}
}
rect(mouseX,145,70,70);
rect(mouseX,145,70,70);
}
