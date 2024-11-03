const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
const results = [0, 0, 1];

// export const tournametWinner = (competitions, results) => {
//   let winnersMap = new Map();
//   const winnerPoints = 3;
//   const flatCompetitions = competitions.flat();

//   for (let index = 0; index < competitions.length; index++) {
//     if (results[index] === 1) {
//       winnersMap.set(competitions[index][0], +winnerPoints);
//       console.log(winnersMap.get("Python"));
//     } else {
//       winnersMap.set(competitions[index][1], +winnerPoints);
//     }
//     //winnersMap.set(competitions[index][0], results[index]);
//   }
//   return { winnersMap, flatCompetitions };
// };

// const competitions = [
//   ["HTML", "C#"],
//   ["C#", "Python"],
//   ["Python", "HTML"],
// ];
// const results = [0, 0, 1];

/*export const tournamentWinner = (competitions, results) => {
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
};*/
// O(n) time | O(k) space - where n is the number
// of competitions and k is the number of teams
const HOME_TEAM_WON = 1;

export const tournamentWinner = (competitions, results) => {
  let currentBestTeam = "";
  let scores = { [currentBestTeam]: 0 };

  for (let index = 0; index < competitions.length; index++) {
    const result = results[index];
    const [homeTeam, awayTeam] = competitions[index];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }

    console.log({ homeTeam, awayTeam, scores });
  }

  return currentBestTeam;
};

const updateScores = (team, points, scores) => {
  if (!(team in scores)) {
    scores[team] = 0;
  }
  scores[team] += points;
};
// Example usage
//console.log(tournamentWinner(competitions, results)); // Output: "Python"
