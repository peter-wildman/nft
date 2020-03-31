var screen = 1;
var numberOfPages = 5;
var miniver;

var circleX = 200;
var circleY = 200;
var circleD = 100;

var xShake, yShake;

var throbColour = 100;
var throbDirection = -1;
var throbSpeed = 12;

function preload() {
  miniver = loadFont('assets/Miniver-Regular.ttf');
}

function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  textFont(miniver);
  textAlign(CENTER,BASELINE);
  textSize(40);
  noStroke();    
}

function draw () {
  
 if (screen==1) {
   //draw first screen
   background(50);
   var mouseDist = dist(mouseX,mouseY,circleX,circleY);
   if(mouseDist < circleD/2){
      shakeX = random(-2.5,2.5);
      shakeY = random(-2.5,2.5);
      if(mouseIsPressed){
           screen = 2;
         }   
    } else {
      shakeX = random(-0.5,0.5);
      shakeY = random(-0.5,0.5);    
    }  
   circleX += shakeX;
   circleY += shakeY;
     
   circle(circleX, circleY,circleD);
  }
  
  else if (screen==2) {
    background(100);
      //+= 4 * -1
      //-4
      //255-4-4-4-4-4 = 100
    throbColour += throbSpeed * throbDirection; 
      //1 * -1 = -1
      //-1 * -1 = 1
    if(throbColour <= 200 || throbColour >= 255){
       throbDirection *= -1;
    }  
      
    fill(throbColour);  
    circle(circleX, circleY,circleD);
      
     
      
  }
  
  else if (screen==3) {
    background(150);
    //draw third screen
    text("Page 3", width/2,height/2);
  }
  
  else if (screen==4) {
    background(200);
    //draw fourth screen
    text("Page 4", width/2,height/2);
  }
  
  else if (screen==5) {
    background(250);
    //draw fifth screen
    text("Page 5", width/2,height/2);
  }
  
}

function mousePressed () {

  // >> loop code begin  >> 
  // use this code to loop the pages
  screen++;
  if(screen > numberOfPages){
    screen = 1;
  }
  // << loop code end << 
  
  // >> read once code begin >> 
  // use this code to stop on the last page 
  /*
  if(screen < numberOfPages){
    screen ++;
  }
  */
  // << read once code end <<
    
  print(screen);
}