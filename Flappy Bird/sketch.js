let floppy; // bird object
let birdImage; // uploads bird image
let pipe = []; // array of pipes
let score = 0;

function preload(){
	birdImage = loadImage('flap.png');
}

function setup() {

	createCanvas(windowWidth, windowHeight);
	// positions the bird
	floppy = new Bird(150, height/2, 35, birdImage);
	// adds first pipe
	pipe.push(new Pipes());
}
function draw() {
	background(0);
		for (let i = pipe.length-1; i >= 0; i--) {
			pipe[i].pipeUpdate();
			pipe[i].displayPipe();
			if(pipe[i].hits(floppy)){
				score = 0;
			}
			 // remove pipe once it's off the screen
			if(pipe[i].offscreen()){
				pipe.splice(i, 1);
			}
		}
		// update bird's location
		floppy.update();
		floppy.show();
		// add new pipes once every 100 px
		if(frameCount % 100 == 0){
			pipe.push(new Pipes());
		}
		fill(255, 255, 0);
		text('score: ' + floor(score), windowWidth-100, windowHeight-30);
}
