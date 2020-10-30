const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var object;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic:true
  }

  object = Bodies.rectangle(100,100,50,80,options);
  World.add(world,object);

  

  ground = Bodies.rectangle(200,380,400,20,options);
  World.add(world,ground)

  var options={
    restitution:1
  }

  ball = Bodies.circle(300,100,20,options);
  World.add(world,ball);

  
}

function draw() {
  background(0);

  Engine.update(engine);

  rectMode(CENTER);
  rect(200,200,50,50);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,80);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}