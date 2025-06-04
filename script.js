// if (humanScore == 5 || computerScore == 5) {
//   alert("Reload To Start New Game");
// } else {
  startGame();
// }

function startGame() {
  let playerChoice = 0;
  let computerChoice = 0;

  function getcomputerChoice() {
    let choiceAvailable = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * choiceAvailable.length);
    return choiceAvailable[i];
  }

  function choiceSelection(Choice) {
    playerChoice = Choice.textContent;
    console.log("Player Choice", playerChoice);
    computerChoice = getcomputerChoice();
    console.log("Computer Choice", computerChoice);

    console.log(playRound(playerChoice, computerChoice));
  }

  const btnRock = document.querySelector("#rock");
  const btnPaper = document.querySelector("#paper");
  const btnScissors = document.querySelector("#scissors");

  btnRock.addEventListener("click", function () {
    choiceSelection(btnRock);
  });
  btnPaper.addEventListener("click", function () {
    choiceSelection(btnPaper);
  });
  btnScissors.addEventListener("click", function () {
    choiceSelection(btnScissors);
  });

  let humanScore = 0;
  let computerScore = 0;

  const scoreByHuman = document.querySelector("#humanScore");
  const scoreByComputer = document.querySelector("#computerScore");

  const screenMessage = document.querySelector(".message");

  const result = document.querySelector(".final_result");
  const startMessage = document.querySelector(".start_msg");


//   result.textContent = "You LoseComputer Win";
  function playRound(playerChoice, computerChoice) {
    // console.log(playerChoice);
    // console.log(computerChoice);

    if (playerChoice === "Rock" && computerChoice === "Paper") {
      computerScore++;
      screenMessage.textContent = "You Lose! Paper beats Rock";
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
      humanScore++;
      screenMessage.textContent = "You Win! Rock beats Scissors";
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
      computerScore++;
      screenMessage.textContent = "You Lose! Scissor beats Paper";
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      humanScore++;
      screenMessage.textContent = "You Win! Paper beats Rock";
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
      computerScore++;
      screenMessage.textContent = "You Lose! Rock beats Scissor";
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      humanScore++;
      screenMessage.textContent = `You Win! Scissor beats Paper`;
    } else if (playerChoice === computerChoice) {
      screenMessage.textContent = `It's a Tie`;
    }

    scoreByComputer.textContent = `${computerScore}`;
    scoreByHuman.textContent = `${humanScore}`;

        function checkResult() {
      if (humanScore == 5) {
        result.textContent = "You Win, Computer Lose";
        startMessage.textContent = "Reload page to Start Again"
        screenMessage.innerHTML = ''
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        
      }
      else if (computerScore == 5){
        result.textContent = "You Lose, Computer Win";
        startMessage.textContent = "Reload page to Start Again"
        screenMessage.innerHTML = ''
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
      }
    }

    checkResult();

  }


}

// Old Script for Only Console Log GAme

// function getComputerChoice() {
//     let value = Math.floor(Math.random()*10);
//     if (value < 4)
//         return "Rock"
//     else if (value > 3 && value < 7)
//         return "Paper"
//     else if (value > 6)
//         return "Scissor"

// }

// function getHumanChoice() {
//     return prompt("Rock, Paper and Scissor");
// }

// let humanScore = 0;
// let computerScore = 0;

// function playRound (humanChoice, computerChoice) {
//     console.log(humanChoice);
//     console.log(computerChoice);

//     if (humanChoice === "ROCK" && computerChoice === "PAPER") {
//         computerScore++;
//         return `You Lose! Paper beats Rock`

//     }

//     else if (humanChoice === "ROCK" && computerChoice === "SCISSOR") {
//         humanScore++;
//         return `You Win! Rock beats Scissors`

//     }

//     else if (humanChoice === "PAPER" && computerChoice === "SCISSOR") {
//         computerScore++;
//         return `You Lose! Scissor beats Paper`

//     }

//     else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
//         humanScore++;
//         return `You Win! Paper beats Rock`

//     }

//     else if (humanChoice === "SCISSOR" && computerChoice === "ROCK") {
//         computerScore++;
//         return `You Lose! Rock beats Scissor`

//     }

//     else if (humanChoice === "SCISSOR" && computerChoice === "PAPER") {
//         humanScore++;
//         return `You Win! Scissor beats Paper`

//     }

//     else if (humanChoice === computerChoice) {
//         return `It's a Tie`
//     }
// }

// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         let humanSelection = getHumanChoice().toUpperCase();
//         let computerSelection = getComputerChoice().toUpperCase();
//        console.log(playRound(humanSelection, computerSelection));

//     }

//     if (humanScore > computerScore) {
//         console.log(`You Win, Computer Lose | Human Score - ${humanScore}  |  Computer - ${computerScore}`);

//     }
//     else if (computerScore > humanScore) {
//         console.log(`You Lose, Computer Win - ${humanScore} ${computerScore}`);
//     }
//     else if (humanScore == computerScore) {
//         console.log(`Tie - ${humanScore} ${computerScore}`);

//     }
// }

// playGame()
