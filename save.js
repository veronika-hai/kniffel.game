import Button from "./button.js";

export default class Save extends Button {
  constructor(x, y, width, height, r, g, b, button1, runden) {
    super(x, y, width, height);
    this.title = "click here to save";
    this.button1 = button1;
    this.r = r;
    this.g = g;
    this.b = b;
    this.runden = runden;
  }

  display() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.width, this.height, 30);
    fill(0);
    textSize(20);
    text(this.title, this.x + 15, this.y + 30);
  }

  clicked() {
    this.runden = this.runden + 1;
    if (this.runden < 6) {
      this.button1.reset();
    }
    this.r = 90;
    this.g = 186;
    this.b = 171;
  }
}
