
let data;
let peso=1;

let mainangle = 0.01;
var maing = document.getElementsByClassName("main");
let kick;
/* function preload() {
  soundFormats('wav');
  kick = loadSound('/kick.wav');
} */


function setup() {
  //Canvas Resize Math
  let b = document.getElementById('canva-holder');
  let w = b.offsetWidth;
  let h = b.offsetHeight;
  console.log(w, h);
  //Create Canvas
  var canvas= createCanvas(w,h, WEBGL);
  canvas.parent('canva-holder');
  canvas.style('margin-left', '-15px');


  /* let data= select('.data');
  data.mousePressed (backChange);

  let gradAng = select('.gradAng');
  gradAng.mousePressed (anglereverse); */

  
  //let mainangle = select('#main');
  
  
}

function draw() {

  background(255,255,255,0);
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  //Lighting
  ambientLight(50);
  directionalLight(50, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 250);
  
  //Line Arguments
  strokeWeight(peso);
  line(locX,locY,0,0);

  // Sizing Arguments for CUBO
  let b = document.getElementById('canva-holder');
  let w = b.offsetWidth;
  let h = b.offsetHeight;
  var boxw = w/2;
  var boxh = h/2;

  //CUBO
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01); //Rotate X
  push();
  
  rotateY(frameCount * mainangle);//Rotate Y
  ambientMaterial(155);
  strokeWeight(1);
  box(boxw, boxh, 70);
  pop();
  
  


}

function windowResized() {
  let b = document.getElementById('holder');
  let w =( b.offsetWidth );
  let h = b.offsetHeight;
  console.log(w/2, h/2);
  resizeCanvas(w,h,WEBGL)
 
}

function backChange(){
  
  peso=10;
   
 }
function anglereverse(){
   
   mainangle = 0.1;

 }

 function keyPressed() {


  if (keyCode === UP_ARROW) {
   kick.play(); 
      
  } 
  else if (keyCode === DOWN_ARROW) {
    kick.play();
  }
}
