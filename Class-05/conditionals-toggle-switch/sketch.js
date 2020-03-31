var circleX = 100;
var toggleSwitch = false;

function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  background(0);
  noStroke();
  textSize(30);    
}

function draw() {
  background(0);
    
  if(toggleSwitch == true){
   fill(23,200,12);
   circleX+=2;
   text("moving",420,200);      
  } else {
   fill(100,34,100);
   text("stopped",420,200);   
  }          
  rect(0,0,width,50);
    
  fill(255);    
  circle(circleX,height/2,100);
 
}

function mousePressed(){
    
    if(mouseY < 50){
       if(toggleSwitch == true){
          toggleSwitch = false;
          } else {
          toggleSwitch = true;
          }
    }
}