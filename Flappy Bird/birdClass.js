class Bird{
  constructor(x, y, rad, img){
    this.x = x;
    this.y = y;
    this.rad = rad; // radius of bird

		this.lift = -15; // changes y position opon click
		this.gravity = 0.5;
		this.velocity = 0;
		this.image = img;
  }

  show(){
		// draws bird
    image(this.image, this.x, this.y, this.rad, this.rad);
		/*
		strokeWeight(2);
		fill(255);
		rect(this.x, this.y, this.rad, this.rad);
		*/
  }

  update(){
		// rapidly increasing falling speed if not clicked
		this.velocity += this.gravity;
		// adding air resistance
		this.velocity *= 0.9;

		// bird falls
    this.y += this.velocity;

		/* handling borders */
		if(this.y > height){
			this.y = height;
			this.velocity = 0;
		}
		if(this.y < 0){
			this.y = 0;
			this.velocity = 0;

		}

  }

	jump(){
		// on click
		this.velocity += this.lift;
	}

  die(){
    playGame = false;
    this.x = 150;
    this.y = height/2;
    for(let i = 0; i < pipe.length; i++){
      pipe.splice(i, 1);
    }
  }

}
