function setup() {
	createCanvas(windowWidth, windowHeight) // position the canvas on the page
	angleMode(DEGREES);
}

function draw() {
	background(225);
	translate(200, 200); // coordinates (0, 0) are now at (200, 200)
	rotate(-90); // rotating clock -90 degrees to start from the top
	fill(50, 100, 255);

	let hr = hour();
	let mn = minute();
	let sc = second();

	strokeWeight(8);
	stroke(200, 0, 0);
	noFill();

	/*		clock arcs		*/

	// seconds arc
	stroke(255, 178, 102);
	let end1 = map(sc, 0, 60, 0, 360);
	arc(0, 0, 300, 300, 0, end1);

	// minutes arc
	stroke(51, 225, 225);
	let end2 = map(mn, 0, 60, 0, 360);
	arc(0, 0, 280, 280, 0, end2);

	stroke(255, 255, 0);
	let end3 = map(hr % 12, 0, 12, 0, 360);
	arc(0, 0, 260, 260, 0, end3);

	/*	 get clock lines		*/

	// seconds line
	push();
	rotate(end1);
	stroke(255, 178, 102);
	line(0, 0, 100, 0);
	pop();

	// minutes line
	push();
	rotate(end2);
	stroke(51, 225, 255);
	line(0, 0, 75, 0);
	pop();

	// hours line
	push();
	rotate(end3);
	stroke(255, 255, 0);
	line(0, 0, 50, 0);
	pop();

	// place a dot at the start of the clock lines
	push();
	stroke(255, 255, 255);
	point(0, 0);
	pop();




}
