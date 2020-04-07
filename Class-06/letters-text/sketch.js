var screen = 1;
var numberOfPages = 5;
var raleway;
//screen 01 variables
//
//
//
var floatwordX, floatwordY;
var floatwordRepo;

var floatWordn = 0;
var floatWordnProg = 0.002;
var floatwordRange = 200;

//screen 02 variables
//
//
//
var Fx, Lx, Ox, Ax, Tx;
var Fxrepo = 200;
var Lxrepo = 212;
var Oxrepo = 230;
var Axrepo = 255;
var Txrepo = 275;

var floatLettersY;

var floatLetRange = 1;
var floatLetnProg = 0.002;
var floatLetn = 0;

function preload() {
  raleway = loadFont('assets/Raleway-Regular.ttf');
}

function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  textFont(raleway);
  textAlign(CENTER,BASELINE);
  textSize(40);
    
  floatwordY = height/2;
    
  floatLettersY = height/2;
    
  floatwordRepo = (width/2)-(floatwordRange/2);
}

function draw () {
  
 if (screen==1) {
   //draw first screen
   background(255);
     
   text("float with me", floatwordX,floatwordY);
     
   floatwordY -=0.6;
     
   floatwordX = noise(floatWordn)*floatwordRange+floatwordRepo;
   floatWordn += floatWordnProg;
  }
  
  else if (screen==2) {
    background(255);
    //draw second screen
    text("f", Fx,floatLettersY);
    text("l", Lx,floatLettersY);
    text("o", Ox,floatLettersY);
    text("a", Ax,floatLettersY);
    text("t", Tx,floatLettersY);
    
    floatLettersY -= 0.05;
    
    Fx = noise(floatLetn)*floatLetRange+Fxrepo;
    Lx = noise(floatLetn+10)*floatLetRange+Lxrepo;
    Ox = noise(floatLetn+20)*floatLetRange+Oxrepo;
    Ax = noise(floatLetn+30)*floatLetRange+Axrepo;
    Tx = noise(floatLetn+40)*floatLetRange+Txrepo;
    
    floatLetn += floatLetnProg;
    floatLetRange += 0.05;
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