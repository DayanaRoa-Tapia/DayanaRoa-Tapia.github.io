
//ball position
var xPos;
var yPos;

// ball speed
var xSpeed;
var ySpeed;

// keeping score
var score = 0;

// check if click on ball
var mouseDist;

// booleans for begin or win
var start=false;
var end = false;


//runs once 
function setup(){

	createCanvas(windowWidth, windowHeight);

	start=true;

	

// generate random ball positon in window
	xPos = random(15,windowWidth-15);
	yPos = random(15,windowHeight-15);

// speed of ball
	xSpeed = 2;
	ySpeed = 2;
}


//runs in a loop
function draw(){

	if(start){
		game();
	}
	if(end){
		win();
	}

	if(score == 10){
		start = false;
		end = true;
	}



}

function windowResize(){

	// creating our canvas to be the size of the window
	resizeCanvas(windowWidth, windowHeight);
	xPos = random(15,windowWidth-15);
	yPos = random(15,windowHeight-15);

}


// begin game
// will contain game engine
function game(){

	background(80);
	textSize(30);
	text("Score: "+score, 10, 50);

	xPos += xSpeed;
	yPos += ySpeed;

	//ball
	noStroke();
	ellipse(xPos, yPos, 30,30);


	if(xPos >= windowWidth-15 || xPos <= 0){
		xSpeed = xSpeed * -1;
		fill(random(255), random(255), random(255));		
	}
	if(yPos >= windowHeight-15 || yPos <= 0){
		ySpeed = ySpeed * -1;
		fill(random(255), random(255), random(255));
	}

	mouseDist = dist(mouseX, mouseY, xPos, yPos);

	if(mouseDist <= 15){
		score++;
		xPos = random(15,windowWidth-15);
		yPos = random(15,windowHeight-15);
		xSpeed *= 1.2;
		ySpeed *= 1.2;
	}

}

// win
function win(){

	background(100);
	textSize(80);
	textAlign(CENTER);
	text("You Win!!!",50,50);


}















