
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

