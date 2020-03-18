 /*
     Acknowledgement to Uncle Greg 
     Your own info
     Some info about the project
     
     Copyright info
     Author
  
  */


function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  background(100);
}

function  draw() {
  // put drawing code here
  // this sets the background to red    
  background(200,30,10);
  //draw a white circle    
  fill(255);       
  circle(300,100,50);
  fill(0);    
  circle(20,100,20);
  circle(150,150,200);
    
  rect(10,10,20,100);
  
  print(mouseX);
  
}
