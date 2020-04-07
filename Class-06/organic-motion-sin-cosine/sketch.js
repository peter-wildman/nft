var screen = 2;
var numberOfPages = 5;
var miniver;

//screen 01 variables
//
//
var circle01x = 0;
var circle02x = 0
var circle01y = 200;
var circle02y = 200;

var circle01HorizSpeed = 2;
var circle02HorizSpeed = 2;

var cosPulse = 0;
var cosPulseSpeed = 0.008;
var cosPulseHeight = 150;
var cosYrepos = 250;

var sinPulse = 0;
var sinPulseSpeed = 0.08;
var sinPulseHeight = 10;
var sinYrepos = 250;

//screen 2 variables
//
//
var rectX;
var rectY;

var rectSinPulse = 0;
var rectCosPulse = 0;

var rectCircularRadius = 50;

var rectCircularSpeed = 0.082;
var rectCircularDir = -1;

var rectRepoX = 470;
var rectRepoY = 280;

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
  rectMode(CENTER);    
  background(0);    
}

function draw () {
  
 if (screen==1) {
   //draw first screen
   //background(0);
        
   //sin movement
    
   circle01y = (sin(sinPulse)*sinPulseHeight)+sinYrepos;
   sinPulse+=sinPulseSpeed;
        
   circle01x += circle01HorizSpeed;     
   fill(0, 183, 255);     
   circle(circle01x,circle01y,10);
     
            
   //cos movement
   circle02y = (cos(cosPulse)*cosPulseHeight)+cosYrepos;
   cosPulse+=cosPulseSpeed;
     
   circle02x += circle02HorizSpeed;     
   fill(251, 255, 0);     
   circle(circle02x,circle02y,10);     
  }
  
  else if (screen==2) {
    //background(100);
    fill(251, 255, 0,90);
      
    rectX = cos(rectCosPulse)*rectCircularRadius+rectRepoX;  
    rectY = sin(rectSinPulse)*rectCircularRadius+rectRepoY;
      
    rect(rectX,rectY,40,40);
      
    rectCosPulse += rectCircularSpeed*rectCircularDir;
    rectSinPulse += rectCircularSpeed*rectCircularDir;
      
    rectCircularRadius +=0.8;
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
  background(0);    
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