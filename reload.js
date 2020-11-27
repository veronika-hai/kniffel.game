import Button from "./button.js";

export default class Restart extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  display() {
    noFill();
    stroke(255);
    rect(x, y, width, height);
  }

  clicked() {
    // html-seite neuladen
    window.location.reload();
  }
}
