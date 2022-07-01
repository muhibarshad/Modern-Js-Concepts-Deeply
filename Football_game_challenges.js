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


//==============================================
//First coding challenges
//==============================================
//1-
const [palyers1, palyers2] = game.players;
//2-
const [gk1, ...fieldPlayers1] = palyers1;
//3-
const allPlayers = [...palyers1, ...palyers2];
//4-
const players1Final = [...palyers1, "Thiago", "Coutinho", "Perisic"];
//5-
const {
  odds: { team1, x: draw, team2 },
} = game;
//6-
const printGoal = function (...arbitrayPlayers) {
  console.log(` ${arbitrayPlayers.length}  has been scored`);
};
printGoal(...game.scored);
//7-
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");


//==============================================
//second coding challenges
//==============================================
//1-
for (const [index, name] of game.scored.entries()) {
  console.log(`Gaol ${index} : ${name}`);
}
//2-
let oddValue = Object.values(game.odds);
let averageOdd = 0;
for (const item of oddValue) {
  averageOdd += item;
}
averageOdd /= oddValue.length;
console.log(averageOdd);
//3-
for(const [team,odd] of Object.entries(game.odds)){
  let teamStr=team==='x'?'Draw':`Of victory ${game[team]}`;
  console.log(`Odd ${teamStr} : ${odd}`);
}
//4-
const scorers = {};
for (const player of game.scored) {
  console.log(scorers[player] );
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);


//==============================================
//Third coding challenges
//==============================================

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);

//1-
const events=[...new Set(gameEvents.values())];
console.log(events);
//2-
gameEvents.delete(64);
console.log(gameEvents);
//3-
let time=[...gameEvents.keys()].pop();
console.log(`An event happened ,on average ,on every ${time/gameEvents.size} minutes`);
//4-
for(const [key,value] of gameEvents){
     console.log(`[${key<=45?'First Half':'Second Half'}] ${key} : ${value}`);
}