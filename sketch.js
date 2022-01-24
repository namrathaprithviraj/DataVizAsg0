bkgd = 1;

function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
	frameRate(1);
}

function draw() {
	bkgds = ['#FFF89B', '#DFC7FA', '#FFC69B', '#F3B7F7'];
	background(bkgds[bkgd%bkgds.length]);
	// textSize(32);
	// fill(180);
	// text(hour(), 10, 30);
	// fill(100);
	// text(minute(), 10, 60);
	// fill(0);
	// text(second(), 10, 90);

	full = PI * 2
	h = (hour()/24) * full
	m = (minute()/60) * full
	s = (second()/60) * full

	if(second() == 0){
		console.log(minute())
		bkgd += 1;
	}

	fill(180);
	noStroke();
	circle(400, 300, 500);
	fill('#B6F7F2');
	arc(400, 300, 500, 500, -HALF_PI, -HALF_PI+s);

	fill(130);
	circle(400, 300, 350);
	fill('#55DAD0');
	arc(400, 300, 350, 350, -HALF_PI, -HALF_PI+m);
	
	fill(100);
	circle(400, 300, 200)
	fill('#12B1A5');
	arc(400, 300, 200, 200, -HALF_PI, -HALF_PI+h);
	
}
