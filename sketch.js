var movingRect, fixedRect;
var obj1, obj2, obj3 ,obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 60);
  movingRect = createSprite(800, 400, 60, 50);
  obj1 = createSprite(100, 200, 50, 60);
  obj2 = createSprite(200, 200, 60, 50);
  obj3 = createSprite(300, 200, 50, 60);
  obj4 = createSprite(500, 200, 60, 50);

obj1.shapeColor = "green";
obj2.shapeColor = "green";
obj3.shapeColor = "green";
obj4.shapeColor = "green";

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}

function draw() {
  background(0);
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x - fixedRect.x);

  if(isTouching(movingRect, obj1)){
   movingRect.shapeColor = "blue";
   obj1.shapeColor = "blue";
  } else{
    movingRect.shapeColor = "red";
    obj1.shapeColor = "green";
  }

  drawSprites();
}
