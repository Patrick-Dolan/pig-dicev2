import Game from "../src/game";
import Player from "../src/player";

describe("Game", () => {
  let game;
  let playerOne;
  let playerTwo;

  beforeEach(() => {
    game = new Game();
    playerOne = new Player("Patrick");
    playerTwo = new Player("Abi");
  });

  test("should correctly create a game object that includes players array, playerTurn, roundScore, and gameOver prop", () => {
    expect(game.players).toEqual([]);
    expect(game.playerTurn).toEqual(0);
    expect(game.roundScore).toEqual(0);
    expect(game.gameOver).toBeFalsy();
  });

  describe("Game.prototype.addPlayer", () => {
    test("should add a new player to the game objects players array", () => {
      game.addPlayer(playerOne);
      expect(game.players[0]).toEqual(playerOne);
    });

    test("should add two players to the game objects players array", () => {
      game.addPlayer(playerOne);
      game.addPlayer(playerTwo);
      expect(game.players[0]).toEqual(playerOne);
      expect(game.players[1]).toEqual(playerTwo);
    });
  });

  describe("Game.prototype.rollDice", () => {
    test("should return a number between 1 and 6", () => {
      const rolls = [];
      for (let i = 0; i < 100; i++) {
        rolls.push(game.rollDice());
      }
      const result = new Set(rolls);
      expect(result).toContain(1);
      expect(result).toContain(2);
      expect(result).toContain(3);
      expect(result).toContain(4);
      expect(result).toContain(5);
      expect(result).toContain(6);
    })
  });
});