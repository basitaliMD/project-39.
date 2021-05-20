var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
monkey_running = loadAnimation("images/sprite_0.png","images/sprite_1.png","images/sprite_2.png","images/sprite_3.png","images/sprite_4.png","images/sprite_5.png","images/sprite_6.png","images/sprite_7.png","images/sprite_8.png");
bananaImage = loadImage("images/banana.png");
obstaceImage = loadImage("images/obstacle.png");
}

function setup() {
createCanvas(500, 475);
//creating monkey
monkey = createSprite(80, 315, 20, 20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1;
  
//creating ground
ground = createSprite(400, 350, 1000, 100);
ground.shapeColor = "yellow";
ground.velocityX = -4;
ground.X = ground.width/2;
console.log(ground.x);

spawnFood();  
  
//creating new groups
FoodGroup = createGroup;
ObstaclesGroup = createGroup;
}

function draw() {
background("red");  
  
if(ground.x<0){
ground.x = ground.width/2;
}
  
if(keyDown("up")){
monkey.velocityY = -12;
}
 
monkey.velocityY = monkey.velocityY + 1.5;
  
monkey.depth = +2;  

monkey.collide(ground);
  
stroke("white");
textSize(20);
fill("white");
  
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
text("survivalTime: " + survivalTime, 100,50);

textSize(40);
fill("blue");
text("PRESS UP ARROW KEY", 25, 450);

drawSprites();
}

function spawnFood(){
if(frameCount % 80 === 0){
banana = createSprite(600,250,10,40);
banana.addImage(bananaImage);
banana.velocityX = -5;
banana.scale = 0.1;
banana.lifetime = 80;
banana.addAnimation(FoodGroup);
}
}