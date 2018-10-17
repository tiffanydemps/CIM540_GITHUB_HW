var gou;
var sebas;
var half;
var angle= 0;
var x= 450;
var button;
var count = 0;
var nomore;

function preload() {
  gou = loadImage('gou.JPG');
  sebas = loadImage('sebas.png');
  half = loadImage('half.jpg');
}

function setup() {
  createCanvas(900, 900);
  textSize(50);
  textAlign(RIGHT);
  fill(191,72,0);


button = createButton('Score a Touchdown');
button.position(800,140);
button.mousePressed(increaseCount);

button = createButton('Sucks To Be FSwho');
button.position (800,180);
button.mousePressed(decreaseCount);
}

function increaseCount() {
count += 7;
}

function decreaseCount() {
  count -= 7;
}


function draw() {
  background(255,255,255);
  image(gou, 0, 0, 700, 900);
  image(sebas, mouseX-240, mouseY-120, 240, 120);
  push();
  rotate(angle);
  image(half, mouseX+240, mouseY+120, 240, 120)
  angle += 5;
  pop();


  if(keyIsPressed){
    if(key == "d") {
      textSize(50);
      text('GO CANES', 300, 720);
      textSize(20);
      text('WOSH WOSH', 300,750);
      textSize(20);
      text('TDEMPSDESIGNS', 300, 770);
    } else {
      textSize(50)
      text("THE U INVENTED SWAGGER!", 725, 40);
    }
  }


  text(count, 800, 120);

  }
