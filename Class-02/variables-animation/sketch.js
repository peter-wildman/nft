//draw 2 more circles that move away from each other
//and fade out at the same time
var circleX1 = 100;
var circleB1 = 150;

var circleY2;
var circleY3;

var circleAlpha = 255;

function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  background(100);
  noStroke(); 
  circleY2 = height/2;
  circleY3 = height/2;    
}

function  draw() {
  // put drawing code here
  background(20,90,150);
  fill(233,50,circleB1);
  circleB1 -= 0.5;    
  circle(circleX1,height/2,100);
  circleX1 += 2.5;
  
  circleAlpha -= 0.5;    
  fill(255,circleAlpha);
  
    
  circleY2 -= 0.5;    
  circle(width/2,circleY2,50);
    
  circleY3 += 0.5;    
  circle(width/2,circleY3,150);    
}






