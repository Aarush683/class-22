// in physics engine we have three object first is Engine,2nd is World,3rd is Bodies
// since we are using Matter library,we are adding all the objects in a matter .js by using const 
//renaming the World Engine Bodies we called as namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//we are creating physics engine 
var engine,world;

//we are creating two objects one is ground 2nd is ball
var ground;
var ball;




function setup() {
  createCanvas(800,800);
  // we are adding the new engine and world 
  engine=Engine.create();
  world=engine.world;

  // th ground should be static at particular positions
  var ground_options={
    isStatic:true
  }

  //creating the ground under the bodies , shape of the ground is rectangle and we are adding the options (options means property)
  ground=Bodies.rectangle(20,795,1530,20,ground_options);

  //we are adding the objects into the world
  World.add(world,ground);

  //to bounce the ball we adding the resitution property 
  var ball_options={
    restitution:2.0
  }

  //creating the circle shape ball in the physics world,50 means radius
 ball=Bodies.circle(400,400,50,ball_options);
 World.add(world,ball);
  
}

function draw() {

  background(0);
  
  //updating the engine because we are changing the values of the body
  Engine.update(engine);
  fill("yellow");

  //rectangle should be at center
  rectMode(CENTER);
  rect(ground.position.x,ground .position.y,1530,20);
  fill("orange");

  //ellipse mode should be at the center
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,50,50);
 
}