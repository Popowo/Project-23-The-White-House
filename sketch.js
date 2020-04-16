const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground,oblong1,oblong2,oblong3,oblong4,oblong5,oblong6;
var pillar1,pillar2;
var roof,Fibonacci;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  fill("white");
  ground = new Stick(200,380,400,60);
  oblong1 = new Stick(80,275,20,160);
  oblong2 = new Stick(105,275,20,160);
  oblong3 = new Stick(130,275,20,160);
  oblong4 = new Stick(155,275,20,160);
  oblong5 = new Stick(180,275,20,160);
  oblong6 = new Stick(205,275,20,160);
  oblong7 = new Stick(230,275,20,160);
  oblong8 = new Stick(255,275,20,160);

pillar1 = new Stick(40,250,50,210);
pillar2 = new Stick(295,250,50,210);
roof = new Stick(167,170,195,50);
Fibonacci = new Stick(167,100,10,90);

}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  oblong1.display();
  oblong2.display();
  oblong3.display();
  oblong4.display();
  oblong5.display();
  oblong6.display();
  oblong7.display();
  oblong8.display();
  pillar1.display();
  pillar2.display();
  roof.display();
  Fibonacci.display();
  triangle(40,86,80,143,0,143);
  triangle(173,100,173,60,220,80);
  triangle(300,86,340,143,260,143);
}