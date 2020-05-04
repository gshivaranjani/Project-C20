
var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight =  random(400,1500);

  car = createSprite(50, 200, 50, 50);
  wall =  createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255); 
  

  car.velocityX =  speed;
  var dForm = (0.5*weight*speed*speed)/22500;
  if(dForm<=100) {
    car.shapeColor = color(0,255,0);

  } else if(dForm >100 && dForm<=180) {
    car.shapeColor = color(230,230,0);
  } else {
    car.shapeColor = color(255,0,0);
  }

  car.collide(wall);
  drawSprites();
}