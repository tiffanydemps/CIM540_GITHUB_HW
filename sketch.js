function setup() {
  createCanvas(600, 400);
  background(304);
}

function draw() {
  // creating my own animal assignment BIRD
  //face
  strokeWeight(20);
  fill(230,179,255);
  arc(260,160,180,180, 160, 400);
  //nose
  strokeWeight(7);
  fill(255,204,238);
  triangle(180,180,140,220, 220, 220);
  //eye
  strokeWeight(3);
  fill(255,128,213);
  ellipse(260,145,100,80);
  //body
  fill(230,300,113);
  ellipse(380,300,100,310);
      }
