export default function Player(playerName) {
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