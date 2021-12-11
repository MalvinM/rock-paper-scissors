const gameChoices = ['rock', 'paper', 'scissors'];
const scoreLimit = 5;
let results = document.querySelector('#results-container');
let computerSelection;
let playerSelection;
let playerTempscore = 0;
let computerTempScore= 0;
let playRoundCounter = 0;
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let roundResults = document.createElement('div');
let buttons = document.querySelectorAll('.button');

roundResults.classList.add('roundResults');

function showResults() {
  results.appendChild(roundResults);
}

function getplayerScore() {
  playerTempscore++;
  playerScore.innerHTML = playerTempscore;
}

function getComputerScore() {
  computerTempScore++;
  computerScore.innerHTML = computerTempScore
}

function computerPlay() {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function userPlay() {
  return prompt("Rock, Paper or Scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  // playerSelection = userPlay();
  
 // Determines whether player wins
  if (playerSelection === computerSelection) {
    roundResults.textContent = "It is a tie!";
    //
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    roundResults.textContent = "Rock crushes scissors. User Wins!";
    getplayerScore();
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    roundResults.textContent = "Paper covers rock. User wins!";
    getplayerScore();
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    roundResults.textContent = "Scissors cuts paper. User wins!";
    getplayerScore();

    // Determins whether the computer wins
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    roundResults.textContent = "Rock crushes scissors. Computer wins!";
    getComputerScore();
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    roundResults.textContent = "Paper covers rock. Computer wins!";
    getComputerScore();
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    roundResults.textContent = "Scissors cuts paper. Computer wins!";
    getComputerScore();
  } 
  showResults();
  playRoundCounter++;
};

function showScoreSheet() {
  console.log("Score:");
  console.log("User: " + playerTempscore);
  console.log("Computer: " + computerScore);

  if (playerTempscore === computerScore) {
    console.log("Game over. It is a tie!");
  } else if (playerTempscore > computerScore) {
    console.log("Game over. User wins!");
  } else {
    console.log("Game over. Computer wins!");
  }
}

function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  showScoreSheet();
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
  const img = button.querySelector("img");
  playerSelection = img.alt;

  if (computerTempScore < scoreLimit && playerTempscore < scoreLimit) {
    playRound(playerSelection, computerSelection)
  } else if (playerTempscore > computerTempScore) {
    roundResults.textContent = "You did it! You Win!"
  } else {
    roundResults.textContent = "Oh no! You have been defeated."
  }
  });
});