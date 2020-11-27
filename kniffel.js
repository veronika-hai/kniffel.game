import Dice from "./dice.js";
import RollAllButton from "./rollAllButton.js";
import Score from "./score.js";
import Save from "./save.js";
import Restart from "./reload.js";

var kniffelbecher = loadImage("Kniffelbecher.png");
var kniffelblock = loadImage("Kniffelblock.png");
var jägerbar = loadImage("jägerbar.png");
var tischli = loadImage("holztisch.png");
var drunki = loadImage("drunki.png");
let dice = new Dice(370, 270, 185, 85, 52);
let dice2 = new Dice(470, 270, 185, 85, 52);
let dice3 = new Dice(570, 270, 185, 85, 52);
let dice4 = new Dice(420, 370, 185, 85, 52);
let dice5 = new Dice(520, 370, 185, 85, 52);
let alldice = [dice, dice2, dice3, dice4, dice5];
let button1 = new RollAllButton(55, 450, 180, 50, 61, 198, 129, alldice);
let button2 = new Save(55, 520, 180, 50, 90, 186, 171, button1, 0);
let score1 = new Score(
  188,
  150,
  95,
  33.5,
  alldice,
  200,
  200,
  200,
  button1,
  button2,
  1
);
let score2 = new Score(
  188,
  183.5,
  95,
  30,
  alldice,
  200,
  200,
  200,
  button1,
  button2,
  2
);
let score3 = new Score(
  188,
  213.5,
  95,
  30.5,
  alldice,
  200,
  200,
  200,
  button1,
  button2,
  3
);
let score4 = new Score(
  188,
  244,
  95,
  31,
  alldice,
  200,
  200,
  200,
  button1,
  button2,
  4
);
let score5 = new Score(
  188,
  275,
  95,
  32,
  alldice,
  200,
  200,
  200,
  button1,
  button2,
  5
);
let score6 = new Score(
  188,
  307,
  95,
  32,
  alldice,
  200,
  200,
  200,
  button1,
  button2,
  6
);
let allscore = [score1, score2, score3, score4, score5, score6];
let restart = new Restart(425, 475, 195, 42);
var start = false;
var countl = -1;

function getAllScore() {
  let gesamt = 0;
  for (let score of allscore) {
    gesamt = gesamt + score.value;
  }
  return gesamt;
}

function startscreen() {
  image(jägerbar, 0, 0);
}

function mousePressed() {
  if (mouseX >= 280 && mouseX <= 415 && mouseY >= 470 && mouseY <= 520) {
    start = true;
  }
}

window.mousePressed = mousePressed;

function spielblockfelder() {
  // Wenn scorefeld frei und der hitTest zum Feld passt dann geht count auf 0 & nur dann clicked ausgeführt
  for (let i = 0; i < allscore.length; i++) {
    if (
      allscore[i].frei === true &&
      allscore[i].hitTest(mouseX, mouseY) === true &&
      button1.count >= 1
    ) {
      // damit man nicht mehrere anklicken kann!
      if (countl === -1) {
        allscore[i].mouseClicked();
      }
      countl = 0;
    }
  }
  if (countl === 0 && button2.hitTest(mouseX, mouseY) === true) {
    countl = -1;
  }
  console.log(countl);
}

function ergebnis() {
  var score = getAllScore();
  fill(0);
  noStroke();
  text(score, 228, 358);
  image(drunki, 366, 0);
  if (score >= 63) {
    text("+35", 220, 385);
    text(score + 35, 228, 410);
  } else if (score < 63) {
    text("nope", 215, 385);
    text(score, 228, 410);
  }
}

window.spielblockfelder = spielblockfelder;

function mouseClicked() {
  // erst wenn ich button drücke kann ich dices & blockfelder auswählen
  if (button1.count >= 1) {
    for (let i = 0; i < alldice.length; i++) {
      alldice[i].mouseClicked();
    }
  }
  if (button2.runden < 6) {
    button1.mouseClicked();
    if (countl === 0) {
      button2.mouseClicked();
    }
  }
  spielblockfelder();
  restart.mouseClicked();
}

window.mouseClicked = mouseClicked;

function draw() {
  background(244, 228, 198);
  if (start === false) {
    startscreen();
  }
  if (start === true) {
    image(tischli, 0, 0);
    image(
      kniffelbecher,
      448,
      40,
      kniffelbecher.width / 3,
      kniffelbecher.height / 3
    );
    image(
      kniffelblock,
      20,
      20,
      kniffelblock.width / 1.7,
      kniffelblock.height / 1.7
    );
    dice.display();
    dice2.display();
    dice3.display();
    dice4.display();
    dice5.display();
    button1.display();
    button2.display();
    score1.display();
    score2.display();
    score3.display();
    score4.display();
    score5.display();
    score6.display();
    if (button2.runden >= 6) {
      ergebnis();
      restart.display();
    }
  }
}
window.draw = draw;
