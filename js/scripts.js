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

Game.prototype.getWinner = function() {
  let winner = this.players[0];
  this.players.forEach((player) => {
    if (player.score > winner.score) {
      winner = player;
    }
  });
  return winner;
}

// UI Logic
// ==========================

function displayCurrentRoundInfo(game) {
  document.querySelector("#current-player-turn-display").innerText = game.players[game.playerTurn].name;
  document.querySelector("#round-score-display").innerText = game.roundScore;
  // TODO replace following score displays with dynamically changing values for player
  document.querySelector("#player-one-score-display").innerText = game.players[0].score;
  document.querySelector("#player-two-score-display").innerText = game.players[1].score;
}

window.addEventListener("load", () => {
  let game = new Game();

  document.getElementById("player-name-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let playerOneName = document.querySelector("#playerOneName").value;
    let playerTwoName = document.querySelector("#playerTwoName").value;
    let playerOne = new Player(playerOneName);
    let playerTwo = new Player(playerTwoName);
    game.addPlayer(playerOne);
    game.addPlayer(playerTwo);
    
    document.querySelector("#player-one-name-display").innerText = playerOne.name; 
    document.querySelector("#player-two-name-display").innerText = playerTwo.name; 
    document.querySelector("#form-display").classList.add("hidden");
    document.querySelector("#game-display").classList.add("show");
    displayCurrentRoundInfo(game)
  });

  document.getElementById("roll-button").addEventListener("click", () => {
    let currentRoll = game.rollDice();
    game.evaluateRoll(currentRoll);
    displayCurrentRoundInfo(game);
  });

  document.getElementById("hold-button").addEventListener("click", () => {
    alert("hold clicked");
  });
});