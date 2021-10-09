var ball;
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
if (keyIsDown(RIGHT_ARROW)){
 ball.x = ball.x + 5;
 background('red'); 
 ball.shapeColor = "yellow"
}
if (keyIsDown(LEFT_ARROW)){
  ball.x = ball.x - 5;
  background('green');
  ball.shapeColor = "white";
}
if (keyIsDown(DOWN_ARROW)){
  ball.y = ball.y + 5;
  background('blue');
  ball.shapeColor = "black";
}
if (keyIsDown(UP_ARROW)){
  ball.y = ball.y - 5;
  background('yellow');
  ball.shapeColor = "red"
}
drawSprites();
}



