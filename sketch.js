var fixedRect, movingRect,go1,go2;


function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = 'purple'
  fixedRect.debug= true;
  //fixedRect.velocityX=2

  movingRect= createSprite(600, 200, 50, 50);
  movingRect.shapeColor = 'purple'
  movingRect.debug= true;
  //movingRect.velocityX=-2;

  go1= createSprite(100, 100, 50, 50);
  go1.shapeColor = 'purple'
  go1.velocityX = 2

  go2= createSprite(200, 100, 50, 50);
  go2.shapeColor = 'purple'
  go2.velocityX = -2
}

function draw() {
  background(110,200,10);


  



  bounceOff(go1,go2);
  
 
  drawSprites();
}

