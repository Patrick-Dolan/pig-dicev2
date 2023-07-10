# Pig Dice

#### By _**Patrick Dolan**_

#### _A web application where you can play Pig Dice_

## Technologies Used

* HTML, CSS, and Javascript
* Bootstrap
* NPM
* Jest (Testing)

## Description

A web application where you can play Pig Dice.

Pig dice is a simple dice game where players take turns rolling a single dice as many time as they want, adding rolls to a running total, but losing their score for the turn if they roll a one. 

The gameplay can be summarized as:
* If the player rolls a 1, the score nothing and it becomes the next players turn.
* If the player rolls any other number, it is added to their total and the player's turn continues.
* If the player chooses to "hold", their turn total is added to their score, and it becomes the next players turn.
* First player to 100 or more points wins.

_Rules and game information taken from wikipedia entry for [Pig Dice](https://en.wikipedia.org/wiki/Pig_%28dice_game%29)._

## Setup/Installation Requirements

* Download or Clone the repo down to your computer.
* Navigate into the "pig-dicev2" directory you just downloaded and double click the index.html to launch the webpage.

## Known Bugs

* No known issues

## License

MIT

Copyright (c) _2023_ _Patrick Dolan_

## Planning and Pseudo Tests

### Plan

First I plan to figure out what object I will need and how they will interact. Based on the rules as stated in the description above I will need to track the following information:

* Player 1 and Player 2 total scores and names
* Which players turn it currently is
* Current turn running score total

Given that information it makes sense to have a player constructor that tracks player information and a game constructor that holds player objects, tracks turns, holds running score total. The game object can also contain all the game logic like turn switching and dice rolling.

Player Object
* Name
* Score

Game Object
* Players
* Player turn
* Round Score

I've made the decision that the Players property of the Game object will be an array, and the Player turn property will be a number indicating which players turn it is based on the player array index.

For example:  
```
If "Game.players = [playerOne, playerTwo]"  
then "Game.playerTurn = 0" would indicate that it is playerOne's turn   
If "Game.playerTurn = 1" it would indicate that it is playerTwo's turn
```

At this point I think it would help to have a general outline of the flow of the project. This will help me plan out the methods that the game and player objects will need. 
1. Set up player objects
2. Set up Game object  
  (setup method?) Add player objects to game object players property 
3. Start game/round  
  (roll method) Roll dice and evaluate whether to add to roundScore or switch turns on 1
4. Change turns  
  (change turn method) activates on roll of 1 or if player chooses to "hold". If player chooses to hold add roundScore to player before resetting to zero.
5. Evaluate scores to determine if there is a winner.  
  (evaluate game state method) If a player's score is over 100 that player wins else keep playing.
6. Add ability to reset game.

### Pseudo-code Tests

This project was created using a prompt from Learnhowtoprogram.com's Fidgetech track and includes a requirement to do test pseudo code. The following are my pseudo tests:

<details>
<summary>Player object tests</summary>
These are all the pseudo-code tests I created before adding Jest and getting automated testing working.


```
Describe: Player()
```

```
Test: "Can create a Player object with basic player information"

Code:
let playerOne = new Player("Patrick");
playerOne;

Expected Output:
{ name: "Patrick", score: 0 }
```

```
Describe: Player.prototype.addScore()
```

```
Test: "Can add to score inside player object"

Code:
let playerOne = new Player("Patrick");
playerOne.addScore(5);
playerOne.score;

Expected Output:
5
```

```
Test: "Will add to score inside player object not overwrite it"

Code:
let playerOne = new Player("Patrick");
playerOne.addScore(5);
playerOne.addScore(3);
playerOne.score;

Expected Output:
8
```

```
Describe: Player.prototype.isWinner()
```

```
Test: "Will return false if score is under 100"

Code:
let playerOne = new Player("Patrick");
playerOne.addScore(99);
let result = playerOne.isWinner();
result;

Expected Output:
false
```

```
Test: "Will return true if score is 100 or greater"

Code:
let playerOne = new Player("Patrick");
playerOne.addScore(100);
let result = playerOne.isWinner();
result;

Expected Output:
true
```
</details>

<details>
<summary>Game object tests</summary>
These are all the pseudo-code tests I created before adding Jest and getting automated testing working.

#### Game Tests:

```
Describe: Game()
```

```
Test: "Can create a Game object with basic game information"

Code:
let game = new Game();
game;

Expected Output:
{ players: [], playerTurn: 0, roundScore: 0, gameOver: false }
```

```
Describe: Game.prototype.addPlayer()
```

```
Test: "Can add players to game objects player array"

Code:
let playerOne = new Player("Patrick");
let game = new Game();
game.addPlayer(playerOne);
game;

Expected Output:
{ players: [playerOne], playerTurn: 0, roundScore: 0, gameOver: false }
```

```
Describe: Game.prototype.rollDice()
```

```
Test: "Can roll a dice and get a number between 1 and 6"

Code:
let game = new Game();
let roll = game.rollDice();
roll;

Expected Output:
A number between 1-6
```

```
Describe: Game.prototype.changeTurns()
```

```
Test: "It will change the current players turn"

Code:
let game = new Game();
let playerOne = new Player("Patrick");
let playerTwo = new Player("Abi");
game.addPlayer(playerOne);
game.addPlayer(playerTwo);
game.changeTurns();
game.playerTurn;

Expected Output:
1
```

```
Describe: Game.prototype.evaluateRoll()
```

```
Test: "If roll is 1 it will set roundScore to zero and change player turns"

Code:
let game = new Game();
let playerOne = new Player("Patrick");
let playerTwo = new Player("Abi");
game.addPlayer(playerOne);
game.addPlayer(playerTwo);
game.roundScore = 34;
let currentRoll = 1;
game.evaluateRoll(currentRoll);
game;

Expected Output:
{ players: [playerOne, playerTwo], playerTurn: 1, roundScore: 0, gameOver: false }
```

```
Test: "If roll is anything other than 1 it will add roll to roundScore"

Code:
let game = new Game();
let playerOne = new Player("Patrick");
let playerTwo = new Player("Abi");
game.addPlayer(playerOne);
game.addPlayer(playerTwo);
game.roundScore = 34;
let currentRoll = 3;
game.evaluateRoll(currentRoll);
game;

Expected Output:
{ players: [playerOne, playerTwo], playerTurn: 0, roundScore: 37, gameOver: false }
```

```
Describe: Game.prototype.holdAction()
```

```
Test: "If player chooses to hold add roundScore to player score"

Code:
let game = new Game();
let playerOne = new Player("Patrick");
let playerTwo = new Player("Abi");
game.addPlayer(playerOne);
game.addPlayer(playerTwo);
game.roundScore = 21;
game.holdAction();
playerOne.score;

Expected Output:
21
```

```
Test: "If player chooses to hold change player turn"

Code:
let game = new Game();
let playerOne = new Player("Patrick");
let playerTwo = new Player("Abi");
game.addPlayer(playerOne);
game.addPlayer(playerTwo);
game.roundScore = 21;
game.holdAction();
game;

Expected Output:
{ players: [playerOne, playerTwo], playerTurn: 1, roundScore: 0, gameOver: false }
```

```
Test: "If player chooses to hold and player score is 100 or greater set gameOver to true"

Code:
let game = new Game();
let playerOne = new Player("Patrick");
let playerTwo = new Player("Abi");
game.addPlayer(playerOne);
game.addPlayer(playerTwo);
game.roundScore = 100;
game.holdAction();
game;

Expected Output:
{ players: [playerOne, playerTwo], playerTurn: 1, roundScore: 0, gameOver: true }
```

```
Describe: Game.prototype.getWinner()
```

```
Test: "If player chooses to hold and player score is 100 or greater set gameOver to true"

Code:
let game = new Game();
let playerOne = new Player("Patrick");
let playerTwo = new Player("Abi");
game.addPlayer(playerOne);
game.addPlayer(playerTwo);
game.roundScore = 100;
game.holdAction();
let winner = game.getWinner();
winner.name;

Expected Output:
"Patrick"
```

</details>