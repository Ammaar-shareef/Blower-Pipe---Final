
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,blowerPipe,blower,button;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution:0.5,
    isStatic: false
  }
  
  ball = Bodies.circle(250,150,30,ball_options);
  World.add(world,ball);

  blowerPipe = new Blower(250,330,25,80);
  blower = new Blower(250,400,100,100);

  button = createButton('Click To Blow');
  button.position(250,350);
  button.class("blowButton");
  button.mouseClicked(blow);

}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,30);

  blowerPipe.display();
  blower.display();
  
}

function blow() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

