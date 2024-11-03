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

// Constants to represent the outcome of a game
const HOME_TEAM_WON = 1;
const POINTS = 3;

function tournamentWinner(competitions, results) {
  // Initialize a Map to keep track of each team's points
  const scores = new Map();

  // Loop through each competition
  for (let i = 0; i < competitions.length; i++) {
    // Destructure the home team and away team from the current competition
    const [homeTeam, awayTeam] = competitions[i];
    // Get the result of the current competition
    const result = results[i];
    // Determine the winning team based on the result
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
    // Get the current score of the winning team or set it to 0 if the team is not in the Map
    const currentScore = scores.get(winningTeam) || 0;
    // Update the score of the winning team by adding the points for a win
    scores.set(winningTeam, currentScore + POINTS);
  }

  // Initialize variables to keep track of the team with the highest score
  let currBestScore = 0;
  let currBestTeam = "";

  // Iterate through the scores Map to find the team with the highest score
  scores.forEach((score, team) => {
    if (score > currBestScore) {
      // Update the current best team and score if the current team's score is higher
      currBestScore = score;
      currBestTeam = team;
    }
  });

  // Return the team with the highest score
  return currBestTeam;
}
