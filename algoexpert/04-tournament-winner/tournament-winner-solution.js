const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
const results = [0, 0, 1];

const tournamentWinner = (competitions, results) => {
  // Initialize a map to keep track of each team's points
  let winnersMap = new Map();
  const winnerPoints = 3; // Points awarded for each win

  // Flatten the competitions array into a single array of team names
  const flatCompetitions = competitions.flat();

  // Iterate over each competition
  for (let index = 0; index < competitions.length; index++) {
    // Determine the winner based on the result
    if (results[index] === 1) {
      // Home team wins
      winnersMap.set(
        competitions[index][0],
        (winnersMap.get(competitions[index][0]) || 0) + winnerPoints
      );
    } else {
      // Away team wins
      winnersMap.set(
        competitions[index][1],
        (winnersMap.get(competitions[index][1]) || 0) + winnerPoints
      );
    }
  }

  // Find the team with the highest points
  let currentBestTeam = "";
  let currentBestScore = 0;
  for (let [team, points] of winnersMap.entries()) {
    if (points > currentBestScore) {
      currentBestTeam = team;
      currentBestScore = points;
    }
  }

  return currentBestTeam;
};
