
var circleX1 = -100;
var circleX2 = -200;
var circleX3;

function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  circleX3 = width + 100;
}

function  draw() {
  // put drawing code here
  background(0);
    
  //this is the top circle
  //it is smaller, moves faster and stops
  //closer to the edge of the screen    
  circle(circleX1,height/2,50);
  if(circleX1 < 900){
      circleX1 += 8;
  } 
  
  circle(circleX2,height/2+100,80);
  if(circleX2 < 300){
      circleX2 += 4;
  }
    
  circle(circleX3,height/2,50);
  if(circleX3 > 100){
      circleX3 -= 8;
  }    
      
      
}
