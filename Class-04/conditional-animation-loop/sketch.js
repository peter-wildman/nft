var circleX = -100;
var circleYRandom;

var circleY = -100;
var circleXRandom;

var circleD1;
var circleD2;

function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  background(100);
  //left to right circle    
  circleD1 = random(20,100);
  circleYRandom = random(circleD1/2,height-circleD1/2);
  //top to bottom circle  
  circleD2 = random(20,100);
  circleXRandom = random(circleD2/2,width-circleD2/2);    
}

function  draw() {
  // put drawing code here
  background(0);
  fill(255); 
      
  circle(circleX,circleYRandom,circleD1); 
  circleX+=5;
    
  if(circleX > width+25){
     circleX = -100;
     circleD1 = random(20,100);
     circleYRandom = random(circleD1/2,height-circleD1/2);    
  }
  //top to bottom circle    
  circle(circleXRandom,circleY,circleD2); 
  circleY+=5;
    
  if(circleY > height+25){
     circleY = -100;
     circleD2 = random(20,100);
     circleXRandom = random(circleD2/2,width-circleD2/2);        
  }  
}
