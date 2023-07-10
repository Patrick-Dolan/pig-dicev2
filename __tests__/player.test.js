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
});