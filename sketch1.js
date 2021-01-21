var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 60);
  movingRect = createSprite(800, 400, 60, 50);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  movingRect.velocityX = -2;
  fixedRect.velocityX = 2;
}

function draw() {
  background(0);

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
      console.log("p")
    movingRect.velocityX *= -1;
    fixedRect.velocityX *= -1;     
  } else if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
    
  }

  drawSprites();
}