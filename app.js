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
  console.log(playerSelection);
  console.log(computerSelection);
}

playRound();