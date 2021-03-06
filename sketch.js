
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,rope1,rope2,rope3,rope4,rope5
var bob1,bob2,bob3,bob4,bob5;
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(800,150,600,20);

	bob1= new Bob(740,500,30);
	bob2= new Bob(770,500,30);
	bob3= new Bob(800,500,30);
	bob4= new Bob(830,500,30);
	bob5= new Bob(860,500,30);
	
	rope1 = new Rope(bob1.body,roof.body,-60,0);
	rope2 = new Rope(bob2.body,roof.body,-30,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,30,0);
	rope5 = new Rope(bob5.body,roof.body,60,0);

	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-65});

	}
}

