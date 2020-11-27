let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

function setup() {
  sketch.createCanvas(670, 600);
  sketch.frameRate(30);
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(windowWidth, windowHeight);
}
window.addEventListener("resize", windowResized);
