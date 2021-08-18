var snow
 var snowImage
 var giphy

function preload(){
 snowImage = loadImage("snow3.jpg")
 giphy = loadAnimation("giphy/sprite_00.png","giphy/sprite_10.png","giphy/sprite_35.png")
}




function setup() {
  createCanvas(800,400);
  boy = createSprite(350,250)
  boy.addAnimation("walking",giphy);
  boy.scale = 0.5
  ground = createSprite(100,390,1400,20);
  ground.visible = false;

}

function draw() {
  background(snowImage);  

  if(keyDown("space")){
    boy.velocityY = -10;
  }
    boy.velocityY = boy.velocityY+5
    boy.collide(ground);
  drawSprites();
}

