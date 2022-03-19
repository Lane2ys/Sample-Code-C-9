var box;
var box2;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box2 = createSprite(250,250,60,60)
}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  if (keyIsDown("w"))
  {
    box2.position.x = box2.position.x +6;
  }

  drawSprites();
}




