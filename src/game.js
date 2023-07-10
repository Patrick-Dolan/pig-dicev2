export default function Game() {
  this.players = [];
  this.playerTurn = 0;
  this.roundScore = 0;
  this.gameOver = false;
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
};

Game.prototype.rollDice = function() {
  return Math.floor(Math.random() * 6) + 1;
};

Game.prototype.changeTurns = function() {
  if (this.playerTurn === 0) {
    this.playerTurn = 1;
  } else {
    this.playerTurn = 0;
  }
};

Game.prototype.evaluateRoll = function(currentRoll) {
  if (currentRoll === 1) {
    this.roundScore = 0;
    this.changeTurns();
  } else {
    this.roundScore += currentRoll;
  }
};

Game.prototype.holdAction = function() {
  this.players[this.playerTurn].addScore(this.roundScore);
  if (this.players[this.playerTurn].isWinner()) {
    this.gameOver = true;
  }
  this.roundScore = 0;
  this.changeTurns();
};

Game.prototype.getWinner = function() {
  let winner = {score: 0};
  this.players.forEach((player) => {
    if (player.score > winner.score) {
      winner = player;
    }
  });
  return winner;
};