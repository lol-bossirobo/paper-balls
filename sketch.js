const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground;
var ball2,ground2;

function preload()
{

	

}

function setup() {
	createCanvas(800, 700);

	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	ball = createSprite(400,650,20,20);
	ball.shapeColor="red"
	ground= createSprite(width/2,height-25,width,10);
	ground.shapeColor="white"

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball2 = Matter.Bodies.circle(400,670,20,{options})
	
	World.add(world,ball);

	ground2 = Bodies.rectangle(width/2,675,width,10, {isStatic:true});

	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(ball2.body,ball2.body.position,{x:85,y:-85})

  }
  
  drawSprites();
 
}



