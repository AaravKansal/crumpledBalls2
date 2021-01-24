
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin1;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


	Engine.run(engine);
  paper = new Paper(200,400,40)
  ground = new Ground(width/2,800,width,20)
dustbin1 = new dustbin(1200,800)

}
 

function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  dustbin1.display();
  
  ground.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:375,y:-375})
  }
}



