var start;
var gameState;
var START = 0;
var PLAY = 1;
var block = []

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function preload(){

  FC = loadImage("FC.png");

}

function setup(){

  createCanvas(1500,900);

  engine = Engine.create();
  world = engine.world;

  spawnCubes();

  start = createSprite(250,510,175,50);
  start.shapeColor = "Lime"

  barriers = new Barriers();

  ground = new Ground();

  ruler = new Ruler(0,random(400,800));

  ruler.body.position.y = ground.body.position.y - ruler.height/2;

  gameState = START;
  
}

function draw(){

  Engine.update(engine);

//Background Coloring

  background(FC); 

  drawSprites();

//Start State

  if(gameState === START){

    //Start Button

      textSize(50);
      fill("White");
      text("START",170,527.5)

  }

  if(gameState === PLAY){
    
    start.x = 10000;
    start.y = 10000;

    background("grey");

    for(r = 0; r < block.length; r++){

      block[r].display();
  
    }

    ruler.display();

  }

  if(mousePressedOver(start)){

    gameState = PLAY;

  }

}

function spawnCubes(){

  var r = (Math.round(random(10,20)));

  for(i = 0; i < r; i++){

    block.push(new Block(random(100,450),100));

  }

}