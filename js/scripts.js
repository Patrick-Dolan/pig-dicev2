function Player(playerName) {
  this.name = playerName;
  this.score = 0;
}

Player.prototype.addScore = function(roundScore) {
  this.score += roundScore;
};

window.addEventListener("load", () => {
  let playerOne = new Player("Patrick");
  playerOne.addScore(5);
  playerOne.addScore(3);
  console.log("Constructor test: ", playerOne.score);
});