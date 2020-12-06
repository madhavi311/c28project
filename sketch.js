const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine,myWorld;
var boy,stone,tree,sling,ground;
var mango = [];

function preload(){
  boy=loadImage("boy.png");
  tree=loadImage("tree.png");
}

function setup() {
  createCanvas(1200,600);
  imageMode(CENTER);
  angleMode(RADIANS);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new objectClass(600,580,1800,10,"stone.png");
  stone = new stoneClass(300,440,50,50,"stone.png");

  for (i=0; i<15; i++){
    mango.push(new objectClass(random(850,1150),random(50,300),40,40,"mango.png"))
  }
  
  sling = new const1(stone.body,{x:300,y:440});
}



function draw() {
  background(255);  
  textSize(30);
  text("Press Space to play",170,50);

  Engine.update(myEngine);

  image(boy ,360,500,200,250);
  image(tree,1000,280,400,550);
  stone.display();

  for (i=0; i<15; i++){
    mango[i].display();
  }

  sling.display();
  ground.display();

  for (i=0; i<15; i++){
    var coll = hasCollide(stone.body,mango[i].body);
    if (coll){
      Body.setStatic(mango[i].body,false);
    }
  }
}



function mouseDragged(){
  Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}



function mouseReleased(){
  sling.fly();
}



function keyPressed(){
  if(keyCode === 32){
    Body.setPosition(stone.body,{x: 300,y: 440});
    sling.launch(stone.body);
  }
}



function hasCollide(object1,object2){  
  if(object1.position.x -object2.position.x < 45
    && object2.position.x - object1.position.x <  45
    && object1.position.y - object2.position.y <  45
    && object2.position.y - object1.position.y <  45)  {
      return true;   
    }
    else {
      return false;
    }
}
