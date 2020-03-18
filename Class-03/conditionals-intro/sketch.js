//if mouse is pressed change background colour
//if mouse is pressed animate a shape

//if mouse is in 1st third else in 2nd third else
//animate different things here x, y, d of a circle
var circleX;
var circleD = 100;
function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  background(100);
  stroke(0);
    
  circleX = width/2;    
}

function  draw() {
    
//    if(mouseIsPressed){
//      background(0); 
//    } else {
//      background(255); 
//    }
    
    background(123,34,50);
    // divide the screen into 4 sections
    // make something happen differnetly in each section
    if(mouseX < 320){
       circleX += 0.5; 
    } else if(mouseX < 640){
       circleD += 0.5;       
    } else {
       circleX -= 0.5;            
    }  
    
    circle(circleX,height/2,circleD);   
    line(320,0,320,height);
    line(640,0,640,height);
}
