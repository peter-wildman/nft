
var circleX;
var circleX2Dist = 100;
var mouseSpeed;

function setup() {
  // put setup code here
  var canv = createCanvas(800,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  //noStroke();
  background(0);    
}

function  draw() {
  // put drawing code here
  background(0);
//   stroke(255);
//   mouseSpeed = dist(pmouseX,pmouseY,mouseX,mouseY);   
//   print(mouseSpeed);  
//   strokeWeight(mouseSpeed);
//   line(mouseX,mouseY,pmouseX,pmouseY);
    
  fill(255);
      
  circle(width/2,height/2,50);
  circle(width-100,height/2,50);
  circle(mouseX,mouseY,50);
    
  circleX = mouseX;
  circle(circleX,mouseY,100);
    
  circleX = mouseX + circleX2Dist; 
  circle(circleX,mouseY,50);
  circleX2Dist +=0.5;  
  
}
