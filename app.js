const gameChoices = ['rock', 'paper', 'scissors']
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore= 0;

function computerPlay() {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function userPlay() {
  return prompt("Rock, Paper or Scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = userPlay();
  

  // Determines whether player wins
  if (playerSelection === computerSelection) {
    console.log("It is a tie!")
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("Rock crushes scissors. User Wins!")
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Paper covers rock. User wins!");
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("Scissors cuts paper. User wins!");
    playerScore++;

    // Determins whether the computer wins
  } else if (computerSelection === "rock" && userChoice === "scissors") {
    console.log("Rock crushes scissors. Computer wins!");
    computerScore++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    console.log("Paper covers rock. Computer wins!");
    computerScore++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log("Scissors cuts paper. Computer wins!");
    computerScore++;
  }
}

function showScoreSheet() {
  console.log("Score:");
  console.log("User: " + playerScore);
  console.log("Computer: " + computerScore);

  if (playerScore === computerScore) {
    console.log("Game over. It is a tie!");
  } else if (playerScore > computerScore) {
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

game();