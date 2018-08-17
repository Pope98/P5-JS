// enables click mode
function mousePressed(){
	floppy.jump();
	score += random(1,2);
}

// enables keyboard mode
function keyPressed(){
	if(key == ' '){
		floppy.jump();
		score += random(1,2);
	}
}
