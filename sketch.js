const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var ground;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,300,50,250);
    box2 = new Box(600,300,50,250);
    box3 = new Box(500,150,450,50);
    box4 = new Box(300,83,50,85);
    box5 = new Box(700,83,50,85);
    box6 = new Box(350,100,50,50);
    box7 = new Box(400,100,50,50);
    box8 = new Box(650,100,50,50);
    box9 = new Box(600,100,50,50);
    box10 = new Box(450,100,50,50);
    box11 = new Box(550,100,50,50);
    box12 = new Box(500,83,50,85);
    box13 = new Box(460,305,20,150);
    box14 = new Box(540,305,20,150);
    box15 = new Box(500,220,100,20);
    ground = new Ground(500,390,1000,20);
    

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    ground.display();
    
   
}