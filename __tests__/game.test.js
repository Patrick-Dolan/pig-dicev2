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

  describe("Game.prototype.changeTurns", () => {
    test("should successfully change player turn from 0 to 1", () => {
      game.changeTurns();
      expect(game.playerTurn).toEqual(1);
    });

    test("should successfully change player turn from 1 to 0", () => {
      game.playerTurn = 1;
      game.changeTurns();
      expect(game.playerTurn).toEqual(0);
    });
  })

  describe("Game.prototype.evaluateRoll", () => {
    test("should set round score to zero if roll is a 1", () => {
      game.roundScore = 34;
      let roll = 1;
      game.evaluateRoll(roll);
      expect(game.roundScore).toEqual(0);
    });

    test("should change player turn if roll is a 1", () => {
      let roll = 1;
      game.evaluateRoll(roll);
      expect(game.playerTurn).toEqual(1);
    });

    test("should add roll to roundScore if roll is anything other than 1", () => {
      let roll = 3;
      game.evaluateRoll(roll);
      expect(game.roundScore).toEqual(3);
    });
  });

  describe("Game.prototype.holdAction", () => {
    test("should add roundScore to player score", () => {
      game.addPlayer(playerOne);
      game.addPlayer(playerTwo);
      game.roundScore = 20;
      game.holdAction();
      expect(game.players[0].score).toEqual(20);
    });

    test("should change player turn", () => {
      game.addPlayer(playerOne);
      game.addPlayer(playerTwo);
      game.holdAction();
      expect(game.playerTurn).toEqual(1);
    });

    test("should change gameOver to true if player score is 100 or greater", () => {
      game.addPlayer(playerOne);
      game.addPlayer(playerTwo);
      game.roundScore = 100;
      game.holdAction();
      expect(game.gameOver).toBeTruthy();
    });
  })
});