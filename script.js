let gameElements = ["rock", "paper", "scissors"];
let computerPoints = 0;
let playerPoints = 0;

function get_computerChoice() {
  const computerSelection =
    gameElements[Math.floor(Math.random() * gameElements.length)];
  return computerSelection;
}
