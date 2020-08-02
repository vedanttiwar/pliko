const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;

var particle=[];
var plinko=[];
var division=[];

var divisionHeight=300;



function setup() {
  createCanvas(480,800);
  ground = new Ground(600,780,1200,20);
  for(var k =0; k <=width;k =k+80){
    division.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
  for (var j=0;j<particles.lenght;j++){
    particles[j].display();
  }
  for (var k=0;k<divisions.lenght;k++){
    divisions[k].display();
  }
}

function draw() {
  background(255,255,255);
  ground.display();  
  division.display();
  particle.display();
  plinko.display();
  drawSprites();
}