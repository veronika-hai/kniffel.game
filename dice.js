import Button from "./button.js";

export default class Dice extends Button {
  constructor(x, y, r, g, b) {
    super(x, y, 90, 90);
    this.value = this.getRandomValue();
    this.active = false;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  getRandomValue() {
    return ceil(random(0, 6));
  }

  roll() {
    this.value = this.getRandomValue();
    return this.value;
  }

  display() {
    fill(this.r, this.g, this.b);
    noStroke();
    rect(this.x, this.y, this.width, this.height, 20);
    fill(0);
    noStroke();
    if (this.value === 1) {
      ellipse(this.x + 45, this.y + 45, 15);
    } else if (this.value === 2) {
      ellipse(this.x + 20, this.y + 20, 15);
      ellipse(this.x + 70, this.y + 70, 15);
    } else if (this.value === 3) {
      ellipse(this.x + 20, this.y + 20, 15);
      ellipse(this.x + 45, this.y + 45, 15);
      ellipse(this.x + 70, this.y + 70, 15);
    } else if (this.value === 4) {
      ellipse(this.x + 20, this.y + 20, 15);
      ellipse(this.x + 70, this.y + 20, 15);
      ellipse(this.x + 20, this.y + 70, 15);
      ellipse(this.x + 70, this.y + 70, 15);
    } else if (this.value === 5) {
      ellipse(this.x + 20, this.y + 20, 15);
      ellipse(this.x + 70, this.y + 20, 15);
      ellipse(this.x + 20, this.y + 70, 15);
      ellipse(this.x + 70, this.y + 70, 15);
      ellipse(this.x + 45, this.y + 45, 15);
    } else if (this.value === 6) {
      ellipse(this.x + 20, this.y + 20, 15);
      ellipse(this.x + 70, this.y + 20, 15);
      ellipse(this.x + 20, this.y + 70, 15);
      ellipse(this.x + 70, this.y + 70, 15);
      ellipse(this.x + 20, this.y + 45, 15);
      ellipse(this.x + 70, this.y + 45, 15);
    }
  }

  clicked() {
    // wenn ich auf würfel drücke und er war inaktiv wird er hell und aktiv
    if (this.active === false) {
      this.r = 255;
      this.g = 103;
      this.b = 59;
      this.active = true;
    } // wenn ich auf würfel drücke und er war aktiv wird er dunkel und inaktiv
    else if (this.active === true) {
      this.r = 185;
      this.g = 85;
      this.b = 52;
      this.active = false;
    }
  }
}
