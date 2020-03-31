var screen = 1;
var numberOfPages = 5;
var miniver;

var hotSpot1x = 730;
var hotSpot1y = 200;
var hotSpot1w = 200;
var hotSpot1h = 100;

var page3textX,page3textY;

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
  page3textX = width/2;
  page3textY = height/2;       
}

function draw () {
  
 if (screen==1) {
   //draw first screen
   background(0);
   fill(255);     
   text("Page 1", width/2,height/2);
   noStroke();  
   fill(255,20,147);
   rect(hotSpot1x,hotSpot1y,hotSpot1w,hotSpot1h); 
   
   if(mouseX > hotSpot1x && mouseX < hotSpot1x + hotSpot1w && mouseY > hotSpot1y && mouseY < hotSpot1y + hotSpot1h){
        if(mouseIsPressed){    
            screen = 2;
        }   
      }  
        
  }
  
  else if (screen==2) {
    background(0);
    //draw second screen
    fill(255);   
    text("Page 2", width/2,height/2);
    stroke(255,20,147);  
    line(100,0,100,height);
    if(mouseX < 100){
       screen = 3;
       }  
  }
  
  else if (screen==3) {
    background(0);
    //draw third screen
    fill(255);  
    text("Page 3", page3textX,page3textY);
    page3textX += 3;
    if(page3textX > width+100){
       screen = 4;
       }  
  }
  
  else if (screen==4) {
    background(0);
    //draw fourth screen
    text("Page 4", width/2,height/2);
  }
  
  else if (screen==5) {
    background(0);
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