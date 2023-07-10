import Game from "../src/game";

describe("Game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test("should correctly create a game object that includes players array, playerTurn, roundScore, and gameOver prop", () => {
    expect(game.players).toEqual([]);
    expect(game.playerTurn).toEqual(0);
    expect(game.roundScore).toEqual(0);
    expect(game.gameOver).toBeFalsy();
  });
});