const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, dustbinRight, dustbinLeft, dustbinMiddle;

function setup() {
  createCanvas(1300, 1350);
  
	engine = Engine.create();
	world = engine.world;

//The Bodies
 //paper 
   ball = new Paper(160, 100, 70);
   console.log(ball.y);
 //dustbin  
   dustbinRight = new Dustbin(650, 480, 10, 250);
   dustbinLeft = new Dustbin(855, 480, 10, 250);
   dustbinMiddle = new Dustbin1(750, 550, 200, 10);
 //ground
   ground = new Ground(750, 615, 1600, 20); 

	Engine.run(engine);
  
}


function draw() {
  background("gray");
  Engine.update(engine);

//displaying
  ball.display();
  
  ground.display();

  dustbinRight.display();
  dustbinMiddle.display();
  dustbinLeft.display();

  drawSprites();
}

function keyPressed(){
 if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:15, y:-15});
 }
}

