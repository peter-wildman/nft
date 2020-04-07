var screen = 1;
var numberOfPages = 5;
var miniver;

var bg, catButton, catHover;

var mouseColour;

var hotSpotR = 193;
var hotSpotG = 107;
var hotSpotB = 107;

var mouseR, mouseG, mouseB;

var hovering = false;

function preload() {
  miniver = loadFont('assets/Miniver-Regular.ttf');
  bg = loadImage('assets/backgroundImage.jpg');
  catButton = loadImage('assets/catButton.png'); 
  catHover = loadImage('assets/catBlue.png'); 
}

function setup() {
  // put setup code here
  var canv = createCanvas(800,415);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  textFont(miniver);
  textAlign(CENTER,BASELINE);
  textSize(40);
}

function draw () {
  
 if (screen==1) {
   //draw first screen
   background(bg);
     
   image(catButton,300,127);
   
     
   mouseColour = get(mouseX,mouseY);
     
   mouseR = red(mouseColour); 
   mouseG = green(mouseColour); 
   mouseB = blue(mouseColour);
     
   if(mouseR == hotSpotR && mouseG == hotSpotG && mouseB == hotSpotB){
      text("over the cat",600,200);
      image(catHover,300,127);   
   }
     
   print("Mouse Red: " + mouseR);
   print("Mouse Green: " + mouseG);
   print("Mouse Blue: " + mouseB); 
   
  }
  
  else if (screen==2) {
    background(100);
    //draw second screen
    text("Page 2", width/2,height/2);
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
  //screen++;
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