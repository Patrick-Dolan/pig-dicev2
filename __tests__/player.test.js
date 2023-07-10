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
});