import { tournamentWinner } from "./tournament-winner.js";

const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
const results = [0, 0, 1];

const result = tournamentWinner(competitions, results);

console.log(result);
