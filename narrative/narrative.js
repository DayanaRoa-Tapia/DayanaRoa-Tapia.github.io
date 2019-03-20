

var canvas;
var begin;

var sign;
var fork;
var currentBG;
var hut;
var in_hut;
var upStairs;

var cave;
var inCave;
var fantasy = false;

var slider;
var x;
var y;
var radius;

let trail_start

var timerBool = false;

var timer = 5;
function preload(){
	sign = loadImage('images/trail_sign.jpg');
	fork = loadImage('images/forking_trail.jpg');
	hut = loadImage('images/creepy_cottage.jpg');
	cave = loadImage('images/hidden_cave.jpg');
	in_hut = loadImage('images/hut_inside.jpg');
	inCave = loadImage('images/cave_inside.jpg');

	trans = loadImage('images/transparent.png');
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-4');

	//currentBG = 0;
	background(0);
	start_adventure();
	y = windowHeight;

	// x = random(0,windowWidth);
	
	// radius = random(0,50);

}

function draw() {

	x = random(0,windowWidth);
	
	radius = random(0,50);



	if(timerBool == true){
		if(frameCount % 60 == 0 && timer > 0){
			timer--;
			console.log(timer);
			if(timer == 0){
				topOfStairs();
			}
		}
	
	}




	if(fantasy == true){
		
		var val = slider.value();
		console.log(val);

		slider.style('width', '80px');
		slider.style('z-index', 5);
		slider.position(windowWidth/2 - 40, windowHeight-100);
		swing.style('opacity', val);

		if(val < .5){
			bubble();
		}


	}



}

function start_adventure(){
	currentBG = 0;

	begin = createButton("START");
	begin.position(windowWidth/2-begin.width/2,windowHeight/2);
	begin.style('font-size', '30px');
	begin.style('color', '#008080');
	begin.size(110,50);
	begin.style('border-radius', '8px');
	begin.style('border-color', 'black');
	begin.style('background-color', '#71F4D1');
	begin.style('box-shadow', '0 16px 26px 10px rgba(120,120,120,0.2), 0 20px 30px 0px rgba(120,120,120,0.19)');

	begin.mousePressed(trailSign); 

}

function trailSign(){
	begin.hide();
	currentBG = sign;
	background(sign);

}

function mouseClicked(){

	if(currentBG === sign && mouseX > 0 && mouseX < windowWidth && mouseY > windowHeight/4 && mouseY < windowHeight - windowHeight/4){
		forkingPath();
	}
	else if(currentBG === fork && mouseX > 0 && mouseX < windowWidth/2){
		creepyHut();
	}
	else if(currentBG === fork && mouseX > windowWidth/2 && mouseX < windowWidth){
		hiddenCave();
	}
	else if(currentBG === cave && mouseX >windowWidth/4 && mouseX < windowWidth - windowWidth/4 && mouseY < windowHeight - windowHeight/3 && mouseY > windowHeight/3){
		insideCave();
	}
	else if (currentBG == inCave && mouseX > windowWidth/2 && fantasy == false) {
		
		fantasyWorld();
	}
	else if(currentBG === hut &&  mouseX > windowWidth/2 && mouseX < windowWidth && mouseY > windowHeight/3 && mouseY < windowHeight - windowHeight/4){
		goInHut();
	}
	else if(currentBG === in_hut && mouseX > windowWidth - windowWidth/3 && mouseX < windowWidth && mouseY < windowHeight - windowHeight/3 && mouseY > 0){
		goUpStairs();
	}
	

}


function forkingPath(){
	currentBG = fork;
	background(fork);

}


// left side of forking path **************************
function creepyHut(){
	currentBG = hut;
	background(hut);
}

function goInHut(){
	currentBG = in_hut;
	background(in_hut);

}

function goUpStairs(){
	//currentBG = upStairs;
	//background(upStairs);
	upStairs = createImg('images/up_stairs.gif');

	upStairs.position(0,0);
	upStairs.style("width", windowWidth + "px");
	upStairs.style("height", windowHeight + "px");
	
	console.log(timer);

	timerBool = true;

}


function topOfStairs(){
	timerBool = false;
	timer = 5;
	upStairs.hide();
	creepyHut();
}


// right side of forking path ****************************
function hiddenCave(){
	currentBG = cave;
	background(cave);
}


function insideCave(){
	currentBG = inCave;
	background(inCave);
}

function fantasyWorld(){
	clear();
	currentBG = trans;
	background(trans);
	fantasy = true;

	swing = createImg('images/fantasy_swing.gif');
	swing.position(0,0);
	swing.style('width', windowWidth+'px');
	swing.style('height', windowHeight + 'px');
	swing.style('z-index', -1);


	under = createImg('images/underwater.gif');
	under.position(0,0);
	under.style('width', windowWidth+'px');
	under.style('height', windowHeight + 'px');
	under.style('z-index', -2);

	canvas.style('z-index', '-1');

	slider = createSlider(0,1,1,.1);

}


function bubble(){ 

	clear();
	 	
	stroke('pink');
	noFill();
	ellipse(x,y, radius,radius);
	ellipse(x,y, radius,radius);
	ellipse(x,y, radius,radius);

	x = x + random(-.5,.5);
	y = y-1;

	if(y < 0){
		y = windowHeight;
	}


}


function windowResized(){
	canvas = createCanvas(windowWidth, windowHeight);
	background(currentBG);
}

