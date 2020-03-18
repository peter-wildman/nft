

function setup() {
  // put setup code here
  var canv = createCanvas(560,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  background(100);
}

function  draw() {
  // put drawing code here
  background(66, 179, 245);
  //notes   
  fill(0);    
  ellipse(100,100,200,100);
    
  fill(255);      
  circle(100,100,10);
    
  fill(255,0,0);    
  rect(200,200,30,100);
  ellipse(100,50,300,100);    
}
