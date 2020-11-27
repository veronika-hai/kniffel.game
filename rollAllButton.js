import Button from "./button.js";

export default class RollAllButton extends Button {
  constructor(x, y, width, height, r, g, b, dice) {
    super(x, y, width, height);
    this.title = "click here to roll";
    this.dice = dice;
    this.r = r;
    this.g = g;
    this.b = b;
    this.count = 0;
    this.clickeld = false;
  }
  display() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.width, this.height, 30);
    fill(0);
    textSize(20);
    text(this.title, this.x + 20, this.y + 30);
  }

  clicked() {
    // wenn ich erstesmal auf button drücke werden alle würfel aktiv und werden einmal gewürfelt
    if (this.count === 0) {
      for (let i = 0; i < this.dice.length; ++i) {
        this.dice[i].clicked();
      }
      this.clickeld = true;
    }
    // kann 3 mal würfeln (nur aktiven Würfel)
    if (this.count >= 0 && this.count <= 2) {
      this.r = 61;
      this.g = 198;
      this.b = 129;
      for (let i = 0; i < this.dice.length; ++i) {
        if (this.dice[i].active === true) {
          this.dice[i].roll();
        }
      }
      this.clickeld = true;
    }
    // nach 3 mal würfeln wird button dunkel und geht nicht mehr
    if (this.count >= 2) {
      this.r = 40;
      this.g = 152;
      this.b = 118;
    }
    this.count = this.count + 1;
  }

  reset() {
    this.r = 61;
    this.g = 198;
    this.b = 129;
    // wenn man öfter draufdrückt als 3 wird er zurückgesetzt
    if (this.count >= 3) {
      this.count = 0;
      // alle würfel nochmal aktivieren beim nächsten klick nach 0
      for (let i = 0; i < this.dice.length; ++i) {
        this.dice[i].clicked();
        this.clickeld = true;
      }
    }
  }
}
