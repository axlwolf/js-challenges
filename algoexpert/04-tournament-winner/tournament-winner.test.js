import { tournamentWinner } from "./tournament-winner.js";

test("should return the correct tournament winner", () => {
  const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ];
  const results = [0, 0, 1];
  expect(tournamentWinner(competitions, results)).toBe("Python");
});

test("should return the correct winner when all home teams win", () => {
  const competitions = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"],
  ];
  const results = [0, 1, 1, 1, 0, 1];
  expect(tournamentWinner(competitions, results)).toBe("C#");
});

test("should return the correct winner when all away teams win", () => {
  const competitions = [
    ["Team1", "Team2"],
    ["Team3", "Team4"],
    ["Team5", "Team6"],
    ["Team1", "Team5"],
  ];
  const results = [0, 0, 0, 1];
  expect(tournamentWinner(competitions, results)).toBe("Team2");
});
