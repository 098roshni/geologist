
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var optioons = {
	'density':2;
	'friction':1.0,
	'restitution':0.5
};
var hammer;
var stone;
var rubber;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = createSprite(500,500,100,50);
	 rubber= createSprite(500,500,rabius);
	 stone = createSprite(500,600,100,50);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




