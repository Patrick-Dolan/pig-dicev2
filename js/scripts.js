function Player(playerName) {
  this.name = playerName;
  this.score = 0;
}

Player.prototype.addScore = function(roundScore) {
  this.score += roundScore;
};

function Game(playerOne, playerTwo) {
  this.players = [playerOne, playerTwo];
  this.playerTurn = 0;
  this.roundScore = 0;
}

window.addEventListener("load", () => {
  let playerOne = new Player("Patrick");
  let playerTwo = new Player("Abi");
  let game = new Game(playerOne, playerTwo);
  console.log("Constructor test: ", game);
});