var counter = 0;

function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  background(100);
}

function  draw() {
  // put drawing code here
  
  
     
  if(counter == 0){
     background(0);    
  } else if(counter == 1){
     background(255,0,0);   
  } else if(counter > 1){
     background(0,120,50);       
  }
  
    
}


function mousePressed(){
    counter++;
    
    if(counter > 3){
      counter = 0;    
    }
    print(counter);
}
