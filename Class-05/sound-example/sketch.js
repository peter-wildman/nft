var screen = 1;
var numberOfPages = 5;
var miniver;

var circleX = 600;
var circleToggle = false;

var uncleGreg;
var uncleGregPlayCount = 0;

var boink, launchSound;
var boinkCount = 0;
var launchSoundCount = 0;


function preload() {
  miniver = loadFont('assets/Miniver-Regular.ttf');
  uncleGreg = loadSound('assets/regenerate.m4a'); 
  boink = loadSound('assets/boink.wav');
  launchSound = loadSound('assets/launch.wav');    
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
   text("Page 1", width/2,height/2);
  }
  
  else if (screen==2) {
    background(100);
    //draw second screen
    text("Page 2", width/2,height/2);
    if(uncleGreg.isPlaying() == false && uncleGregPlayCount == 0){
         uncleGreg.play();
         uncleGregPlayCount++;
    }  
      
 }
  
  else if (screen==3) {
    background(150);
    //draw third screen
    text("Page 3", width/2,height/2);
    stroke(255);  
    line(100,0,100,height);
    noStroke();
      
    if(mouseIsPressed && !circleToggle && mouseX < 100){
       circleToggle = true;
       launchSound.play();   
    }  
      
    if(circleToggle && circleX < width - 30){
       circleX+=4;
    }
    
    if(circleX >= width - 30){
       if(!boink.isPlaying() && boinkCount == 0){
          boink.play();
          boinkCount++;   
        }
    }
    circle(circleX,200,60);  
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
  if(screen == 1){
      screen++;
   } else if(screen == 2 && !uncleGreg.isPlaying()){
     screen = 3;
   }
 
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