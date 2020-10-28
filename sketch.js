var thickness,wall;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50,200,50,10)
  wall=createSprite(1530,200,thickness,height/2)
  bullet.velocityX=speed;
}

function draw() {
  background("black"); 
  if(wall.x-bullet.x < bullet.width/2+wall.width/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage<10){
      bullet.shapeColor=color(255,0,0);
    }
    //if(damage<180 && damage>100){
    //  
   // }
    if(damage<10){ 
      bullet.shapeColor=color(230,230,0)
    }
  } 
  drawSprites();
}