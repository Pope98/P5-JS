class Pipes{
	constructor(){

		/* creating pipe location */
		let spacing = random(75, height / 2);
		let centerY = random(spacing, height - spacing);

		this.top = centerY - spacing / 2;
		this.bottom = height - (centerY + (spacing / 2));
		this.x = width;

		// width of pipe
		this.w = 40;
		// rate at which screen moves
		this.speed = 4;

		// if bird hits pipe, make it red
		this.highlight = false;
	}

	displayPipe(){
		// blue is default
		fill(0, 30, 150);
		// if bird hits pipe, turn pipe red
		if(this.highlight == true){
			fill(255, 0, 0);
		}

		// place pipes
		rect(this.x, 0, this.w, this.top);
		rect(this.x, height - this.bottom, this.w, this.bottom);

	}

	pipeUpdate(){
		// move pipes until they disappear
		this.x -= this.speed;
	}

	offscreen(){
		// check if pipes went off screen
		return this.x < -this.w;
	}

	/* handles bird hitting a pipe */
	hits(bird){
		if(bird.y < this.top || bird.y+20 > height - this.bottom){
			if(bird.x > this.x && bird.x < this.x + this.w){
				this.highlight = true;
				return true;
			}
			return false;
		}
	}

}
