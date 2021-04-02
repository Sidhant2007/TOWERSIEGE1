const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform,polygon,slingshot;
var score=0;

function preload(){
polygonImg = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    platform = new Ground(600,400,500,20);
    
    block1 = new Block(510,390);
    block2 = new Block(540,390);
    block3 = new Block(570,390);
    block4 = new Block(600,390);
    block5 = new Block(630,390);
    block6 = new Block(660,390);
    block7 = new Block(690,390);

    block8 = new Block(540,330);
    block9 = new Block(570,330);
    block10 = new Block(600,330);
    block11 = new Block(630,330);
    block12 = new Block(660,330);

    block13 = new Block(570,290);
    block14 = new Block(600,290);
    block15 = new Block(630,290);

    block16 = new Block(600,240);
    polygon = Bodies.circle(50,200,40)
    World.add(world,polygon)
    slingshot = new SlingShot(this.polygon,{x:50,y:200})
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    platform.display();
    fill("red")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("blue")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("yellow")
    block13.display();
    block14.display();
    block15.display();
    fill("green")
    block16.display();
    block1.Score();
    block2.Score();
    block3.Score();
    block4.Score();
    block5.Score();
    block6.Score();
    block7.Score();
    block8.Score();
    block9.Score();
    block10.Score();
    block11.Score();
    block12.Score();
    block13.Score();
    block14.Score();
    block15.Score();
    block16.Score();
    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)
    slingshot.display();
    text("SCORE:"+score, 750,40)
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}