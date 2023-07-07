import Game from './game';
import Player from './player';

// UI Logic
// ==========================

function displayCurrentRoundInfo(game) {
  document.querySelector("#current-player-turn-display").innerText = game.players[game.playerTurn].name;
  document.querySelector("#round-score-display").innerText = game.roundScore;
  // TODO replace following score displays with dynamically changing values for player
  document.querySelector("#player-one-score-display").innerText = game.players[0].score;
  document.querySelector("#player-two-score-display").innerText = game.players[1].score;
}

function displayEndGameScreen(winner) {
  document.querySelector("#winner-name-display").innerText = winner.name;
  document.querySelector("#winner-score-display").innerText = winner.score;
  document.querySelector("#game-display").classList.add("hidden");
  document.querySelector("#game-display").classList.remove("show");
  document.querySelector("#end-game-display").classList.remove("hidden");
  document.querySelector("#end-game-display").classList.add("show");
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
    displayCurrentRoundInfo(game);
  });

  document.getElementById("roll-button").addEventListener("click", () => {
    let currentRoll = game.rollDice();
    game.evaluateRoll(currentRoll);
    displayCurrentRoundInfo(game);
  });

  document.getElementById("hold-button").addEventListener("click", () => {
    game.holdAction();
    if (game.gameOver) {
      let winner = game.getWinner();
      displayEndGameScreen(winner);
    } else {
      displayCurrentRoundInfo(game);
    }
  });

  document.getElementById("reset-button").addEventListener("click", () => {
    // TODO set up method based reset instead of page refresh.
    location.reload();
  });
});