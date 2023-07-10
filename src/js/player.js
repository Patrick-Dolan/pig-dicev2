export default class Player {
  constructor(playerName) {
    this.name = playerName;
    this.score = 0;
  }
  
  addScore(roundScore) {
    this.score += roundScore;
  }

  isWinner() {
    if (this.score >= 100) {
      return true;
    } else {
      return false;
    }
  }
}