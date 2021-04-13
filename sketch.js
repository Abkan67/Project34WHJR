const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var boxes = [];
var mouseisdown = false;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  for (var xvalue = 600; xvalue<=900; xvalue+=150) {
    for(var yvalue = 100; yvalue<=300; yvalue+=100) {
      boxes.push(new Box(xvalue, yvalue, 70,70))
    }
  }

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  boxes.forEach((item, index)=>{item.display();});

  hero.display();
  rope.display();
  monster.display();
  mouseisdown = false;

}

function mouseDragged(e) {
  hero.mousepos = {x:e.x, y:e.y}
  mouseisdown = true;
}