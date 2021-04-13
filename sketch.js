
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,600,25);
	ground= new Ground (600,680,1200,20)
	dustbin1 = new Dustbin (800,660,200,20)
	dustbin2 = new Dustbin (700,620,20,100)
	dustbin3 = new Dustbin (900,620,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

   paper.display()
   ground.display()
   dustbin1.display()
   dustbin2.display()
   dustbin3.display()

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:95, y:-95} )
	}
}


