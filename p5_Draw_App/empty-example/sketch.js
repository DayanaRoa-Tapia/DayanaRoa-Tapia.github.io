var canvas;
var colorPick;

//positions to begin drawing
var beginX;
var beginY;

let clrX;
let clrY;

//button to save drawing
let s;
let img;
let save_img;

//color holder
var begn;
let temp;
let bg;

function preload(){
  bg = loadImage('colors.jpg');

}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);

  image(bg,0,0,350,200);


  textSize(16);
  text('> Click anywhere in the white space below\n> Use arrow keys to draw\n> Use mouse to shade\n\n',400,40);
  fill(255,0,0);
  text('<<< click on color desired',360,183);

  clrX = 7;
  clrY = 194;

  temp = get(clrX,clrY);



  img = createInput();
  img.position(400,135);

  s = createButton('save');
  s.position(600,135);
  save_img = createElement('h3','Save As...');
  save_img.position(400,95);


  s.mousePressed(saveDrawing);
  s.style('font-size','20px');
  img.style('font-size','20px');


}





function draw() {

  begn = get(beginX,beginY);
  temp = get(clrX,clrY);


  if(keyIsDown(LEFT_ARROW) && beginX > 2){
      noStroke();

      //setting to the color picked
      set(beginX, beginY, temp);
      updatePixels();

      //filling with the color picked
      fill(temp);
      rect(beginX, beginY, 10, 10);
      beginX -= 1; 
    }
    if(keyIsDown(RIGHT_ARROW) && beginX < windowWidth-12){
      noStroke();
       //setting to the color picked
      set(beginX, beginY, temp);
      updatePixels();

      //filling with the color picked
      fill(temp);
      rect(beginX, beginY, 10, 10);
      beginX += 1;
    }
    if(keyIsDown(UP_ARROW) && beginY > 210){
      noStroke();
       //setting to the color picked
      set(beginX, beginY, temp);
      updatePixels();

      //filling with the color picked
      fill(temp);
      rect(beginX, beginY, 10, 10);
      beginY -= 1;
    }
    if(keyIsDown(DOWN_ARROW) && beginY < windowHeight-12){
      noStroke();
       //setting to the color picked
      set(beginX, beginY, temp);
      updatePixels();

      //filling with the color picked
      fill(temp);
      rect(beginX, beginY, 10, 10);
      beginY += 1;
    }



}

function windowResized(){
	canvas = createCanvas(windowWidth, windowHeight);
	background(255, 255, 255);
}

//setting color picked
function mouseClicked(){

  if(mouseX < 350 && mouseY < 200){
    clrX = mouseX;
    clrY = mouseY;

  }
 
}


//getting the location to begin drawing
function mousePressed(){

  if( mouseY > 210){
    beginX = mouseX;
    beginY = mouseY;
  }


}

function mouseDragged(){

    noStroke();
    print("mousePressed");
    //setting to the color picked
    set(beginX, beginY, temp);
    updatePixels();

    //filling with the color picked
    fill(temp);
    rect(mouseX, mouseY, 10, 10);
}



function saveDrawing(){

    let name = img.value();
    save(name+'.jpg');
    img.value('');
}

