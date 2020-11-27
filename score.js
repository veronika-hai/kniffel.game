import Button from "./button.js";

export default class Score extends Button {
  constructor(x, y, width, height, dice, r, g, b, button1, button2, categorie) {
    super(x, y, width, height);
    this.dice = dice;
    this.eyes = [0, 0, 0, 0, 0, 0];
    this.frei = true;
    this.r = r;
    this.g = g;
    this.b = b;
    this.button1 = button1;
    this.button2 = button2;
    this.value = 0;
    this.categorie = categorie;
  }

  display() {
    if (this.frei) {
      this.calculateEyes();
    }
    noFill();
    stroke(0);
    strokeWeight(1);
    rect(this.x, this.y, this.width, this.height);
    fill(this.r, this.g, this.b);
    noStroke();
    // Text mit Augenzahl für jedes Spielblockfeld
    text(this.eyes[this.categorie - 1], this.x + 40, this.y + 25);
  }

  calculateEyes() {
    this.eyes = [0, 0, 0, 0, 0, 0];
    // nur wenn ich button schon gedrückt hab, zählt er Augenzahlen
    for (let index in this.dice) {
      if (this.button1.clickeld === true) {
        let value = this.dice[index].value;
        this.eyes[value - 1] += value;
      }
    }
  }

  clicked() {
    // wenn scorefeld frei und ich klicke wird schrift dunkel und button/dices deaktiviert
    if (this.frei === true) {
      this.r = 0;
      this.g = 0;
      this.b = 0;
      this.button1.count = 3;
      this.button1.r = 40;
      this.button1.g = 152;
      this.button1.b = 118;
      this.button2.r = 105;
      this.button2.g = 222;
      this.button2.b = 216;
      this.frei = false;
      this.value = this.eyes[this.categorie - 1];
      for (let i = 0; i < this.dice.length; ++i) {
        this.dice[i].active = true;
      }
    }
  }
}
