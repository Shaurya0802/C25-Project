const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  drop = new Drop(400,10,2,30);
}

function draw() {
  background(0); 
  Engine.update(engine);

  drop.display();
}