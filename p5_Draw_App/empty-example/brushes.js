

var furby;

// ellipse brush
var ellipseBrush = false;
var furbyBrush = false;

function preload(){
	furby = loadImage("furby.png");
}

function setup(){

	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	background(0);

}

function draw(){

	if(furbyBrush){
		furb();
	}
	if(ellipseBrush){
		ellip();
	}

}

function keyTyped(){

	if(key === 'q'){
		furbyBrush = true;
		ellipseBrush = false;
	}
	if(key === 'w'){
		furbyBrush = false;
		ellipseBrush = true;
	}

}

function furb(){

	image(furby,mouseX, mouseY, 20,20);

}

function ellip(){

	mappedFill = map(mouseX, 0, windowWidth, 0, 255);
	fill(mappedFill);
	ellipse(mouseX, mouseY, 20,20);

}



