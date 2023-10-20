let gameElements = ["Rock", "Paper", "Scissors"];
let computerPoints = 0;
let playerPoints = 0;
let rounds = 0;

function get_computerChoice() {
  const computerSelection =
    gameElements[Math.floor(Math.random() * gameElements.length)];
  return computerSelection;
}

function capitalize_FirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
  /* computerSelection = get_computerChoice(); */
  computerSelection = "Paper";

  if ((playerSelection === "rock") & (computerSelection === "Paper")) {
    console.log(
      `${computerSelection} covers ${capitalize_FirstLetter(
        playerSelection
      )}. You Lose!`
    );
  } else if (
    (playerSelection === "paper") &
    (computerSelection === "Scissors")
  ) {
    console.log(
      `${computerSelection} cuts ${capitalize_FirstLetter(
        playerSelection
      )}. You Lose!`
    );
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "Rock")
  ) {
    console.log(
      `${computerSelection} crushes ${capitalize_FirstLetter(
        playerSelection
      )}. You Lose!`
    );
  } else if (
    (playerSelection === "rock") &
    (computerSelection === "Scissors")
  ) {
    console.log(
      `${capitalize_FirstLetter(
        playerSelection
      )} crushes ${computerSelection}. You Win!`
    );
  } else if ((playerSelection === "paper") & (computerSelection === "Rock")) {
    console.log(
      `${capitalize_FirstLetter(
        playerSelection
      )} covers ${computerSelection}. You Win!`
    );
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "Paper")
  ) {
    console.log(
      `${capitalize_FirstLetter(
        playerSelection
      )} cuts ${computerSelection}. You Win!`
    );
  } else {
    console.log(
      `${capitalize_FirstLetter(
        playerSelection
      )} and ${computerSelection}. Tie!`
    );
  }
}

while (rounds < 5) {
  playRound();
  rounds++;
}
