var x= 60;
var y= 80

function setup() {
  //put setup code here
  createCanvas(480, 300);
}

function draw() {
  background(0);
  fill(255)
  if(keyIsPressed) {
  if(keyCode == LEFT_ARROW) {
    x = x- 5
  }
  if(keyCode == RIGHT_ARROW){
    x = x + 5
    }

  if(keyCode == UP_ARROW){
    y = y - 5
  }

  if(keyCode == DOWN_ARROW){
    y = y + 5
  }
}

if(key =='d') {
  stroke (255,0,0);
  line(x+5, y+5  , 500, y);
}

//when the key is pressed, the 1st and 3rd values have to be changed
rect(x, y, 10, 10);
}
