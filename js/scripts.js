function Player(playerName) {
  this.name = playerName;
  this.score = 0;
}

window.addEventListener("load", () => {
  let playerOne = new Player("Patrick");
  console.log("Constructor test: ", playerOne);
});