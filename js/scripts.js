// Business Logic
// ==========================

function Player(playerName) {
  this.name = playerName;
  this.score = 0;
}

Player.prototype.addScore = function(roundScore) {
  this.score += roundScore;
};

Player.prototype.isWinner = function() {
  if (this.score >= 100) {
    return true;
  } else {
    return false;
  }
}

function Game() {
  this.players = [];
  this.playerTurn = 0;
  this.roundScore = 0;
  this.gameOver = false;
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
}

Game.prototype.rollDice = function() {
  return Math.floor(Math.random() * 6) + 1;
}

Game.prototype.changeTurns = function() {
  if (this.playerTurn === 0) {
    this.playerTurn = 1;
  } else {
    this.playerTurn = 0;
  }
}

Game.prototype.evaluateRoll = function(currentRoll) {
  if (currentRoll === 1) {
    this.roundScore = 0;
    this.changeTurns();
  } else {
    this.roundScore += currentRoll;
  }
}

Game.prototype.holdAction = function() {
  this.players[this.playerTurn].addScore(this.roundScore);
  if (this.players[this.playerTurn].isWinner()) {
    this.gameOver = true;
  }
  this.roundScore = 0;
  this.changeTurns();
}

// UI Logic
// ==========================

window.addEventListener("load", () => {
  let game = new Game();
  let playerOne = new Player("Patrick");
  let playerTwo = new Player("Abi");
  game.addPlayer(playerOne);
  game.addPlayer(playerTwo);
  game.roundScore = 100;
  game.holdAction();
  console.log("Game hold action change turn test: ", game);
  console.log("Player one still updates: ", playerOne.score);
});