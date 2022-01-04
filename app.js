const game = () => {
  console.log("Game of rock paper scissors begin!");

  const MAX_ROUNDS = 5;
  let outcome = "invalid"
  let userScore = 0;
  
  for (let i = 1; i <= MAX_ROUNDS; i++) {
    let result = "";
    let computerSelection = computerPlay().toLowerCase();

    while (outcome == "invalid") {
      playerSelection = prompt(`Round ${i}: Please enter your selection`).toLowerCase();
      outcome = calcOutcome(playerSelection, computerSelection);
    }

    userScore += updateScore(outcome);   
    result += updateResult(outcome, playerSelection, computerSelection);
    console.log(result);
  }

  console.log(`You won ${userScore} out of ${MAX_ROUNDS} rounds!`)
}

const computerPlay = () => {
  const CHOICES = ["rock", "paper", "scissors"];

  return CHOICES[Math.floor(Math.random()*3)];
}

const calcOutcome = (playerSelection, computerSelection) => {
  const OUTCOME = ["invalid", "draw", "win", "lose"];
  let index = undefined;

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock")
        index = 1
      else if (computerSelection === "paper")
        index = 3
      else if (computerSelection === "scissors")
        index = 2
      break;
    case "paper":
      if (computerSelection === "rock")
        index = 2
      else if (computerSelection === "paper")
        index = 1
      else if (computerSelection === "scissors")
        index = 3
      break;
    case "scissors":
      if (computerSelection === "rock")
        index = 3
      else if (computerSelection === "paper")
        index = 2
      else if (computerSelection === "scissors")
        index = 1
      break;
    default:
      index = 0;
  }

  return OUTCOME[index];
}

const updateResult = (outcome, playerSelection, computerSelection) => {
  let result = "";

  switch (outcome) {
    case "draw":
      result += `Draw! both selected ${playerSelection} ${computerSelection}`
      break;
    case "win":
      result += `You win! ${playerSelection} beats ${computerSelection}`
      break;
    case "lose":
      result += `You lose! ${computerSelection} beats ${playerSelection}`
      break;
    default:
      result += "Error: resulted in invalid outcome"
  }

  return result;
}

const updateScore = (outcome) => {
  let score = 0;

  if (outcome === "win") {
    score = 1;
  }

  return score;
}

game();
