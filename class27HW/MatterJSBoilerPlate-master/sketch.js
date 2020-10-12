
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bob1,bob2,bob3,bob4,bob5;
var ground;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(295,650,40);
	bob2=new Bob(335,650,40);
	bob3=new Bob(375,650,40);
	bob4=new Bob(415,650,40);
	bob5=new Bob(455,650,40);
	
	ground= new Roof(375,350,224,20);
	
	rope1=new Rope(bob1.body,ground.body,0,0);
	rope2=new Rope(bob2.body,ground.body,-29,0);
	rope3=new Rope(bob3.body,ground.body,-58,0);
	rope4=new Rope(bob4.body,ground.body,29,0);
	rope5=new Rope(bob5.body,ground.body,58,0);



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ground.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope5.display();
  rope4.display();
  
  drawSprites();
 
}



