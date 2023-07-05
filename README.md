# Pig Dice

#### By _**Patrick Dolan**_

#### _A web application where you can play Pig Dice_

## Technologies Used

* HTML, CSS, and Javascript
* Bootstrap

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

### Tests

This project was created using a prompt from Learnhowtoprogram.com's Fidgetech track and includes a requirement to do test pseudo code. The following are my pseudo tests:

Player Tests:

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
Test: "Can add to score inside player object"

Code:
let playerOne = new Player("Patrick");
playerOne.addScore(5);
playerOne.score;

Expected Output:
5
```

```
Test: "will add to score inside player object not overwrite it"

Code:
let playerOne = new Player("Patrick");
playerOne.addScore(5);
playerOne.addScore(3);
playerOne.score;

Expected Output:
8
```

Game Tests:

```
Describe: Game()
```

```
Test: "Can create a Game object with basic game information"

Code:
let game = new Game(playerOne, playerTwo);
game;

Expected Output:
{ players: [playerOne, playerTwo], playerTurn: 0, roundScore: 0 }
```

```
Test: "Can roll a dice and get a number between 1 and 6"

Code:
let game = new Game(playerOne, playerTwo);
let roll = game.rollDice();
roll;

Expected Output:
A number between 1-6
```