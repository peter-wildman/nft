var circleX1 = 300; 
var circleR = 255;
var circleRchange = 50;

function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  background(100);
  noStroke();    
}

function  draw() {
  // put drawing code here
  background(50,130,100); 
  fill(circleR,255,255);    
  circle(circleX1,200,50);
  
  circleR = circleR - circleRchange;    
  circleX1 = circleX1 + 50;
  fill(circleR,255,255);    
  circle(circleX1,200,50);
  
  circleR = circleR - circleRchange;
  circleX1 = circleX1 + 50;   
  fill(circleR,255,255);    
  circle(circleX1,200,50); 

  circleR = circleR - circleRchange;    
  circleX1 = circleX1 + 50;
  fill(circleR,255,255);    
  circle(circleX1,200,50);     
  
  circleX1 = 300;
  circleR = 255;    
}
