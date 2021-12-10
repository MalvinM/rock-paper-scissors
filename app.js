const gameChoices = ['rock', 'paper', 'scissors']
let computerSelection;
let playerSelection;

function computerPlay() {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function userPlay() {
  return prompt("Rock, Paper or Scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = userPlay();
  
  if (playerSelection === computerSelection) {
    console.log("It is a tie!")
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("Rock crushes scissors. User Wins!")
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Paper covers rock. User wins!");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("Scissors cuts paper. User wins!");
  }
}

playRound();