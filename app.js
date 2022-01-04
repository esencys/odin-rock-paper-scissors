const playGame = (e) => {
  e.stopPropagation();
 
  if (isGameOver()) {
    announceResult();
    return;
  }

  let playerSelection = e.target.innerText.toLowerCase();
  let computerSelection = computerPlay();

  let outcome = calcOutcome(playerSelection, computerSelection);
 
  updateScores(outcome);
  renderOutcome(outcome, playerSelection, computerSelection);
}

const renderOutcome = (outcome, playerSelection, computerSelection) => {
  const result_div = document.getElementById("result")
  result = updateResult(outcome, playerSelection, computerSelection);
  
  result_div.textContent = `${result}`;
}

const announceResult = () => {
  const playerScore = document.getElementById("player");
  const computerScore = document.getElementById("computer");
  const announcement = document.getElementById("announcement");

  let output = "";

  if (parseInt(playerScore.textContent) === 5) {
    output += "Player Won!";
  }
  else if (parseInt(computerScore.textContent) === 5) {
    output += "Computer Won!";
  }
  else {
    output += "Error occured with scores";
  }
  
  announcement.textContent = output;
}

const isGameOver = () => {
  let gameOver = false;
  const playerScore = document.getElementById("player").textContent;
  const computerScore = document.getElementById("computer").textContent;

  if (parseInt(playerScore) === 5 || parseInt(computerScore) === 5) {
    gameOver = true;
  }

  return gameOver;
}

const updateScores = (outcome) => {
  const playerScore = document.getElementById("player");
  const computerScore = document.getElementById("computer");

  switch (outcome) {
    case "win":
      playerScore.textContent = `${parseInt(playerScore.textContent) + 1}`
      break;

    case "lose":
      computerScore.textContent = `${parseInt(computerScore.textContent) + 1}`
      break;

    default:
      break;
  } 
}

const computerPlay = () => {
  const CHOICES = ["rock", "paper", "scissor"];

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
      else if (computerSelection === "scissor")
        index = 2
      break;
    case "paper":
      if (computerSelection === "rock")
        index = 2
      else if (computerSelection === "paper")
        index = 1
      else if (computerSelection === "scissor")
        index = 3
      break;
    case "scissor":
      if (computerSelection === "rock")
        index = 3
      else if (computerSelection === "paper")
        index = 2
      else if (computerSelection === "scissor")
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

const game = () => {
  const main = document.getElementById("app");

  const announcement = document.createElement("div");
  announcement.id = "announcement";

  const playerScore = document.createElement("div");
  playerScore.id = "player";
  playerScore.textContent = "0";

  const computerScore = document.createElement("div");
  computerScore.id = "computer";
  computerScore.textContent = "0";

  const score = document.createElement("div");
  score.id = "score";
  score.appendChild(playerScore);
  score.appendChild(computerScore);

  const result_div = document.createElement("div");
  result_div.id = "result"

  const rockBtn = document.createElement("button");
  rockBtn.innerText = "Rock";

  const scissorBtn = document.createElement("button");
  scissorBtn.innerText = "Scissor";

  const paperBtn = document.createElement("button");
  paperBtn.innerText = "Paper";

  main.addEventListener('click', (e) => playGame(e));

  main.appendChild(rockBtn);
  main.appendChild(scissorBtn);
  main.appendChild(paperBtn);
  main.appendChild(result_div);
  main.appendChild(score);
  main.appendChild(announcement);
}

game();
