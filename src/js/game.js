export default class Game {
  constructor() {
    this.players = [];
    this.playerTurn = 0;
    this.roundScore = 0;
    this.gameOver = false;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  changeTurns() {
    if (this.playerTurn === 0) {
      this.playerTurn = 1;
    } else {
      this.playerTurn = 0;
    }
  }

  evaluateRoll(currentRoll) {
    if (currentRoll === 1) {
      this.roundScore = 0;
      this.changeTurns();
    } else {
      this.roundScore += currentRoll;
    }
  }

  holdAction() {
    this.players[this.playerTurn].addScore(this.roundScore);
    if (this.players[this.playerTurn].isWinner()) {
      this.gameOver = true;
    }
    this.roundScore = 0;
    this.changeTurns();
  }

  getWinner() {
    let winner = { score: 0 };
    this.players.forEach((player) => {
      if (player.score > winner.score) {
        winner = player;
      }
    });
    return winner;
  }
}