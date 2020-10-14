var fixedRect, movingRect,a,b,c,d;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  a=createSprite(50,50,50,50); 
  a.shapeColor="green";
  b=createSprite(250,50,50,50); 
  c=createSprite(550,50,50,50); 
  d=createSprite(850,50,50,50); 
  b.shapeColor="green";
  c.shapeColor="green";
  d.shapeColor="green";




}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,c)){
    movingRect.shapeColor = "red";
    c.shapeColor = "red";
  

  }
  else {
    movingRect.shapeColor = "green";
    c.shapeColor = "green";
  }
  
  
  drawSprites();
}

function isTouching(o1,o2){

  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2
    ) {
  return true;
}
else {
  return false;
}
}
