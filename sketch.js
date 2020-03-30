//CREATED ANGRY BIRDS STAGE 2.5 AND OSSILATING PENDULUM. 
//LINES SKETCH.JS:4 TO 9 ARE COMMOM FOR BOTH THE PROJECTS.
//BASECLASS.JS,BOX.JS,LOG.JS,PIG.JS ARE FOR ANGRY BIRDS STAGE 2.5.
//BIRD.JS IS FOR OSSILATING PENDULUM.
//CHAIN.JS AND GROUND.JS ARE COMMON FOR BOTH  THE PROJECTS.
//THE  LINES FROM SKETCH.JS 20 TO 86 ARE FOR ANGRY BIRDS STAGE 2.5 .
//THE  LINES FROM SKETCH.JS 89 TO 126 ARE FOR OSSILATING PENDULUM.
//Namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

/*var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    //var canvas = createCanvas(1200,400);
    createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100,50);

    log6 = new Logs(250,100,300,10);

   chain = new Chain(bird.body,log6.body);
}

function draw(){
    background(sprites/backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    
    platform.display();

    log6.display();
    chain.display();
    bird.display();
}*/

function setup(){
    //Creates the canvas.
    createCanvas(500,600);

    engine = Engine.create();
    world = engine.world;

    //Creates the bird from Bird class.
    bird = new Bird(100,225,50);

    //Creates the log6 from Logs class.
    log6 = new Logs(250,100,300,10);

    //Creates the bird from Bird class.
    chain = new Chain(bird.body,log6.body);
}
 
function draw(){
    //Makes the background black.
    background(0);
    //Updates the engine.
    Engine.update(engine);

    //Changes the text colour to white.
    fill(255);
    //Increases the text size.
    textSize(16);
    //Displays the text
    text("Control the movement of the pendulum",100,30);
    text("by clicking and moving the mouse.",125,50);

    //Displays log6.
    log6.display();
    //Displays chain.
    chain.display();
    //Displays bird.
    bird.display();
}    