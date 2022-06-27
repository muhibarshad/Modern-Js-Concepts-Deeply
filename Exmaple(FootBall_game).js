"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [palyers1, palyers2] = game.players;

const [gk1, ...fieldPlayers1] = palyers1;

const allPlayers = [...palyers1, ...palyers2];

const players1Final = [...palyers1, "Thiago", "Coutinho", "Perisic"];

const {
  odds: { team1, x: draw, team2 },
} = game;

const printGoal=function(...arbitrayPlayers){
     console.log(` ${arbitrayPlayers.length}  has been scored`);
}
printGoal(...game.scored);

team1<team2 && console.log('Team 1 is more likely to win');
team1>team2 && console.log('Team 2 is more likely to win');



