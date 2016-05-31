var xspacing = 5;
var w;
var theta = 10.0;
var amplitude = 205.0;
var dx;
var yvalues;

var backgroundSlider;
var thetaSlider;
var heightSlider;

function setup() {
  createCanvas(1400, 700);
  w = width;
  period = random(50)
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
  backgroundSlider = createSlider(0, 255, 20);
  backgroundSlider.position(10, 10);
  backgroundSlider.style('width', '200px')
  thetaSlider = createSlider(0.02, 10, 0.02);
  thetaSlider.position(10, 30);
  thetaSlider.style('width', '200px')
  heightSlider = createSlider(100, 450, 205.0);
  heightSlider.position(10, 50);
  heightSlider.style('width', '200px')
}

function draw() {
  calcWave();
  var val = backgroundSlider.value();
  background(val);
  renderWave();
}

function calcWave() {
  theta += thetaSlider.value();
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*heightSlider.value();
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  var c = color(random(123), 55, 123)
  fill(c);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 16, 16);
  }
}

