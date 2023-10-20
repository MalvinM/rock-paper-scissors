let gameElements = ["Rock", "Paper", "Scissors"];
let computerPoints = 0;
let playerPoints = 0;
let rounds = 0;
let computerScore = 0;
let playerScore = 0;
let playerWin;

function get_computerChoice() {
  const computerSelection =
    gameElements[Math.floor(Math.random() * gameElements.length)];
  return computerSelection;
}

function determineScore(playerWin) {
  if (playerWin === true) {
    playerScore++;
    console.log(`Player: ${playerScore} / Computer ${computerScore}`);
  } else {
    computerScore++;
    console.log(`Player: ${playerScore} / Computer ${computerScore}`);
  }
}

function gameTie() {
  console.log(`Player: ${playerScore} / Computer ${computerScore}`);
}

function capitalize_FirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
  computerSelection = get_computerChoice();

  if ((playerSelection === "rock") & (computerSelection === "Paper")) {
    console.log(
      `${computerSelection} covers ${capitalize_FirstLetter(
        playerSelection
      )}. You Lose!`
    );
    playerWin = false;
    determineScore(playerWin);
  } else if (
    (playerSelection === "paper") &
    (computerSelection === "Scissors")
  ) {
    console.log(
      `${computerSelection} cuts ${capitalize_FirstLetter(
        playerSelection
      )}. You Lose!`
    );
    playerWin = false;
    determineScore(playerWin);
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "Rock")
  ) {
    console.log(
      `${computerSelection} crushes ${capitalize_FirstLetter(
        playerSelection
      )}. You Lose!`
    );
    playerWin = false;
    determineScore(playerWin);
  } else if (
    (playerSelection === "rock") &
    (computerSelection === "Scissors")
  ) {
    console.log(
      `${capitalize_FirstLetter(
        playerSelection
      )} crushes ${computerSelection}. You Win!`
    );
    playerWin = true;
    determineScore(playerWin);
  } else if ((playerSelection === "paper") & (computerSelection === "Rock")) {
    console.log(
      `${capitalize_FirstLetter(
        playerSelection
      )} covers ${computerSelection}. You Win!`
    );
    playerWin = true;
    determineScore(playerWin);
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "Paper")
  ) {
    console.log(
      `${capitalize_FirstLetter(
        playerSelection
      )} cuts ${computerSelection}. You Win!`
    );
    playerWin = true;
    determineScore(playerWin);
  } else {
    console.log(
      `${capitalize_FirstLetter(
        playerSelection
      )} and ${computerSelection}. Tie!`
    );
    gameTie();
  }
}

while (rounds < 5) {
  playRound();
  rounds++;
}
