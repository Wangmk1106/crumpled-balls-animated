
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papers;
var dustbin1, dustbin2, dustbin3, bin, binPicture;
var grounds;
var world;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	papers=new Paper(300,450,40);

	dustbin1=new Box(1200,640);
	//dustbin2=new Box(1300,600,20,100);
	//dustbin3=new Box(1100,600,20,100);

	grounds=new Floor(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  papers.display();
  grounds.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

 // drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(papers.body,papers.body.position,{x:85,y:-85})
	}
}

