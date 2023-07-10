import Player from "../src/player";

describe("Player", () => {
  test("should correctly create a player object including a player name and score", () => {
    const newPlayer = new Player("Patrick");
    expect(newPlayer.name).toEqual("Patrick");
    expect(newPlayer.score).toEqual(0);
  });
});