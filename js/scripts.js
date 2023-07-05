function Player(playerName) {
  this.name = playerName;
  this.score = 0;
}

Player.prototype.addScore = function(roundScore) {
  this.score += roundScore;
};

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

window.addEventListener("load", () => {
  let playerOne = new Player("Patrick");
  let playerTwo = new Player("Abi");
  let game = new Game();
  game.addPlayer(playerOne);
  game.addPlayer(playerTwo);
  console.log("Game refactor test: ", game);
});