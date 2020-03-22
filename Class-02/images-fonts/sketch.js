var robotoBold;
var robotoItalic;
var murnongBottom;
var murnongTop;

var textX = -100;

function preload(){
  robotoBold = loadFont("assets/Roboto-Bold.ttf");
  robotoItalic = loadFont("assets/Roboto-ThinItalic.ttf");
  murnongBottom = loadImage("assets/murnongBottom.png");
  murnongTop = loadImage("assets/murnongTop.png");    
}

function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  canv.parent("canvas-container");
  background(255);
  textSize(50);    
}

function  draw() {
  // put drawing code here
   background(255);
   image(murnongBottom,0,0);
    
   fill(0); 
   textFont(robotoItalic);    
   text("Murnong",mouseX,mouseY);    
    
   image(murnongTop,0,0); 
    
    
    
   textX+=0.7;    

}
