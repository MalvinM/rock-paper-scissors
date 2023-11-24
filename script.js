let gameElements = ["Rock", "Paper", "Scissors"];
let computerPoints = 0;
let playerPoints = 0;
let rounds = 5;
let computerScore = 0;
let playerScore = 0;
let playerWin;

let playerChoices = document.querySelectorAll(".playerChoices, .playerChoice");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("scissors");

let userScore = document.querySelector(".playerScore");
let cpuScore = document.querySelector(".cpuScore");
let referee = document.querySelector(".referee");

function get_computerChoice() {
  const computerSelection =
    gameElements[Math.floor(Math.random() * gameElements.length)];
  return computerSelection;
}

function determineScore(playerWin) {
  if (playerWin === true) {
    playerScore++;
    userScore.innerHTML = playerScore;
  } else {
    computerScore++;
    cpuScore.innerHTML = computerScore;
  }
}

function checkWinner() {
  if (playerScore >= rounds) {
    referee.innerHTML = "First to 5, YOU WIN!";
  } else if (computerScore >= rounds) {
    referee.innerHTML = "First to 5, YOU LOSE!";
  }
}

function capitalize_FirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  computerSelection = get_computerChoice();

  if ((playerSelection === "rock") & (computerSelection === "Paper")) {
    referee.innerHTML = `${computerSelection} covers ${capitalize_FirstLetter(
      playerSelection
    )}. You Lose!`;

    playerWin = false;
    determineScore(playerWin);
  } else if (
    (playerSelection === "paper") &
    (computerSelection === "Scissors")
  ) {
    referee.innerHTML = `${computerSelection} covers ${capitalize_FirstLetter(
      playerSelection
    )}. You Lose!`;
    playerWin = false;
    determineScore(playerWin);
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "Rock")
  ) {
    referee.innerHTML = `${computerSelection} crushes ${capitalize_FirstLetter(
      playerSelection
    )}. You Lose!`;

    playerWin = false;
    determineScore(playerWin);
  } else if (
    (playerSelection === "rock") &
    (computerSelection === "Scissors")
  ) {
    referee.innerHTML = `${capitalize_FirstLetter(
      playerSelection
    )} crushes ${computerSelection}. You Win!`;

    playerWin = true;
    determineScore(playerWin);
  } else if ((playerSelection === "paper") & (computerSelection === "Rock")) {
    referee.innerHTML = `${capitalize_FirstLetter(
      playerSelection
    )} covers ${computerSelection}. You Win!`;

    playerWin = true;
    determineScore(playerWin);
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "Paper")
  ) {
    referee.innerHTML = `${capitalize_FirstLetter(
      playerSelection
    )} cuts ${computerSelection}. You Win!`;

    playerWin = true;
    determineScore(playerWin);
  } else {
    referee.innerHTML = `${capitalize_FirstLetter(
      playerSelection
    )} and ${computerSelection}. Tie!`;
    gameTie();
  }
}

for (let i = 0; i < playerChoices.length; i++) {
  playerChoices[i].addEventListener("click", (e) => {
    let selection = playerChoices[i].id;
    switch (selection) {
      case "rock":
        playRound("rock");
        checkWinner();
        break;
      case "paper":
        playRound("paper");
        checkWinner();
        break;
      case "scissors":
        playRound("scissors");
        checkWinner();
        break;
    }
  });
}
