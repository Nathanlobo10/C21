
var car 
var bike
var bat,ball
var cat,dog,mouse;




function setup() {
  createCanvas(800,400);
car = createSprite(200, 200, 60, 50);
car.shapeColor = "blue" 
bike = createSprite(400,200,30,40);
bike.shapeColor = "green"
bat = createSprite (100,100,10,20)
bat.shapeColor = "white"
bat.velocityX = 2
ball = createSprite(400,100,10,10)
ball.shapeColor = "white"
ball.velocityX = -2
cat = createSprite(100,300,20,10)
dog = createSprite(600,300,30,30)
mouse = createSprite(300,300,10,20)


}


function draw() {
  background("purple");
 // bike.x = mouseX
 // bike.y = mouseY
  dog.x = mouseX
  dog.y = mouseY  
console.log(bike.x - car.x)

// the condistion for detecting collision


  if(isTouching(dog,cat)) {
  bike.shapeColor = "red"
  car.shapeColor = "red"
  dog.shapeColor = "pink"
  cat.shapeColor = "pink"
  
   
  }
 else {
 car.shapeColor = "blue" 
 bike.shapeColor = "green"

   } 
   bounceOff(bat,ball)
  drawSprites();
}



