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

// UI Logic
// ==========================

window.addEventListener("load", () => {
  let playerOne = new Player("Patrick");
  playerOne.addScore(100);
  let result = playerOne.isWinner();
  console.log("player isWinner true test: ", result);
});