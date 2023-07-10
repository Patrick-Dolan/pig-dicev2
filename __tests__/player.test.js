import Player from "../src/player";

describe("Player", () => {
  let playerOne;

  beforeEach(() => {
    playerOne = new Player("Patrick");
  });

  test("should correctly create a player object including a player name and score", () => {
    expect(playerOne.name).toEqual("Patrick");
    expect(playerOne.score).toEqual(0);
  });

  describe("Player.prototype.addScore", () => {
    test("should correctly add to score inside player object", () => {
      playerOne.addScore(5);
      expect(playerOne.score).toEqual(5);
    });
    
    test("should correctly add multiple values to make cumulative score", () => {
      playerOne.addScore(5);
      playerOne.addScore(3);
      expect(playerOne.score).toEqual(8);
    })
  });

  describe("Player.prototype.isWinner", () => {
    test("should return false if player score is below 100", () => {
      playerOne.addScore(99);
      expect(playerOne.isWinner()).toBeFalsy();
    });

    test("should return true if player score is 100", () => {
      playerOne.addScore(100);
      expect(playerOne.isWinner()).toBeTruthy();
    });

    test("should return true if player score is greater 100", () => {
      playerOne.addScore(108);
      expect(playerOne.isWinner()).toBeTruthy();
    });
  })
});