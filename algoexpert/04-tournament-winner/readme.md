# Tournament Winner

## Instructions

There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.

Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results, respectively. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won.

It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams.

### Sample Input

```
competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
]

results = [0, 0, 1]
```

### Sample Output

```

"Python"
// C# beats HTML, Python Beats C#, and Python Beats HTML.
// HTML - 0 points
// C# -  3 points
// Python -  6 points
```

### Function Signature

## Solutions

<details>
  <summary>Click For Solution 1</summary>

```JS
// Write your code here.
export const tournamentWinner = (competitions, results) => {
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

// Do not edit the line below.
```

### Explanation

- Initialization:

```JS
let winnersMap = new Map();
const winnerPoints = 3;
We initialize a Map winnersMap to keep track of each team's points.
```

winnerPoints is set to 3, representing the points awarded for each win.

- Loop Through Competitions:

```JS
for (let index = 0; index < competitions.length; index++) {
```

We iterate over each competition using a for loop.

- Determine Winner:

```JS
if (results[index] === 1) {
winnersMap.set(
competitions[index][0],
(winnersMap.get(competitions[index][0]) || 0) + winnerPoints
);
} else {
winnersMap.set(
competitions[index][1],
(winnersMap.get(competitions[index][1]) || 0) + winnerPoints
);
}
```

If the result is 1, the home team wins; otherwise, the away team wins.

- Update the winning team's points in the winnersMap.

Find the Team with the Highest Points:

```JS
let currentBestTeam = "";
let currentBestScore = 0;
for (let [team, points] of winnersMap.entries()) {
if (points > currentBestScore) {
currentBestTeam = team;
currentBestScore = points;
}
}
```

Iterate through the winnersMap to find the team with the highest points.

- Return the Winning Team:

```JS
return currentBestTeam;
```

</details>

<details>
  <summary>Click For Solution 2</summary>

```JS
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
```

### Explanation

## Explanation for Each Part:

- Initialization:

```javascript
let currentBestTeam = "";
let scores = { [currentBestTeam]: 0 };
```

currentBestTeam keeps track of the team with the highest score.

scores is an object where keys are team names and values are their scores.

- Loop Through Competitions:

```javascript
for (let index = 0; index < competitions.length; index++) {
```

Iterate through each competition to determine the winning team and update their score.

- Determine Winner:

```javascript
const result = results[index];
const [homeTeam, awayTeam] = competitions[index];
const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
```

Get the result of the competition and the teams competing.

- Determine the winner based on the result (1 means home team won, otherwise the away team won).

Update Scores:

```javascript
updateScores(winningTeam, 3, scores);
```

Update the scores for the winning team by adding 3 points.

- Check for Highest Score:

```javascript
if (scores[winningTeam] > scores[currentBestTeam]) {
currentBestTeam = winningTeam;
```

Check if the winning team’s score is higher than the current best team’s score. If so, update currentBestTeam.

- Return Result:

```javascript
return currentBestTeam;
```

Return the team with the highest score at the end of the competitions.

- Helper Function:

```javascript
const updateScores = (team, points, scores) => {
  if (!(team in scores)) {
    scores[team] = 0;
  }
  scores[team] += points;
};
```

A helper function to update the scores of a team. If the team is not already in the scores object, it initializes their score to 0 and then adds the points.

</details>

<details>
  <summary>Click For Solution 3</summary>

### Approach 3

We can use a hash table to keep track of each team's points, because a hash table is used to store key/value pairs, here each key is a team's name and the values are each team's points. Given a team name, we can retrieve its points. Moreover, hash tables provide constant-time lookup and insertion on average. Once we know all of the points for all the teams, we can go through the hash table and figure out which team has the most amount of points and then return the name of that team.

```JS
// Store 1 in a constant variable, so we can use the constant variable later
// rather than having to write 1 in our program. This will make our code more
// readable.
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
  let currBestTeam = '';

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


```
### Explanation for Each Part:
- Constants:

```javascript
const HOME_TEAM_WON = 1;
const POINTS = 3;
```
HOME_TEAM_WON is a constant representing the result when the home team wins.

POINTS is a constant representing the points awarded for each win.

- Initialization:

```javascript
const scores = new Map();
```
Initialize a Map scores to keep track of each team's points.

- Loop Through Competitions:

```javascript
for (let i = 0; i < competitions.length; i++) {
```
Iterate through each competition to determine the winner and update their score.

- Determine Winner:

```javascript
const [homeTeam, awayTeam] = competitions[i];
const result = results[i];
const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
```	
Destructure the home team and away team from the current competition.

Get the result of the current competition.

Determine the winner based on the result (1 means home team won, otherwise the away team won).

- Update Scores:

```javascript
const currentScore = scores.get(winningTeam) || 0;
scores.set(winningTeam, currentScore + POINTS);
```
Get the current score of the winning team or set it to 0 if the team is not in the Map.

Update the score of the winning team by adding the points for a win.

- Find the Team with the Highest Score:

```javascript
let currBestScore = 0;
let currBestTeam = '';

scores.forEach((score, team) => {
  if (score > currBestScore) {
    currBestScore = score;
    currBestTeam = team;
  }
});
```	
Initialize variables to keep track of the team with the highest score.

Iterate through the scores Map to find the team with the highest score.

Update the current best team and score if the current team's score is higher.

- Return Result:

```javascript
return currBestTeam;
```
Return the team with the highest score at the end of the competitions.
Time Complexity:
The time complexity of this solution is 
𝑂
(
𝑛
)
, where 
𝑛
 is the number of competitions.

Space Complexity:
The space complexity is 
𝑂
(
𝑘
)
, where 
𝑘
 is the number of teams. This is because we store each team's score in the scores Map.
  </details>

### Test Cases

<details>
  <summary>Click For Test Cases</summary>

```JS
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

```

</details>

## Hints

<details>
  <summary>Hint 1</summary>
Don't overcomplicate this problem. How would you solve it by hand? Consider that approach, and try to translate it into code.

</details>

<details>
  <summary>Hint 2</summary>

Use a hash table to store the total points collected by each team, with the team names as keys in the hash table. Once you know how many points each team has, how can you determine which one is the winner?

</details>

<details>
  <summary>Hint 3</summary>
  <p>Loop through all of the competitions, and update the hash table at every iteration. For each competition, consider the name of the winning team; if the
  name already exists in the hash table, update that entry by adding 3 points to
  it. If the team name doesn't exist in the hash table, add a new entry in the
  hash table with the key as the team name and the value as 3 (since the team
  won its first competition). While looping through all of the competitions,
  keep track of the team with the highest score, and at the end of the
  algorithm, return the team with the highest score.
  </p>
</details>

## Optimal Space & Time Complexity

```
O(n) time | O(k) space - where n is the number of competitions and k is the number of teams
```
