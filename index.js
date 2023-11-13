console.log("HELLO WORLD");
let playerScore = 0,
    computerScore = 0;

function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const choice = Math.floor(Math.random() * 3)
    console.log("computer choice: " + choices[choice])
    return choices[choice];
}

function getPlayerChoice() {
    const playerInput = prompt("Enter Your Choice");
    const playerChoice = playerInput.toUpperCase();
    console.log("your choice: " + playerChoice);
    return playerChoice;

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Tie");
    }
    else if (computerSelection == 'ROCK') {
        if (playerSelection == 'PAPER') {
            console.log("You Won");
            playerScore++;
        }
        else if (playerSelection == 'SCISSORS') {
            console.log("Computer Won");
            computerScore++;
        }
    }
    else if (computerSelection == 'PAPER') {
        if (playerSelection == 'SCISSORS') {
            console.log("You Won");
            playerScore++;
        }
        else if (playerSelection == 'ROCK') {
            console.log("Computer Won");
            computerScore++;
        }
    }
    else if (computerSelection == 'SCISSORS') {
        if (playerSelection == 'ROCK') {
            console.log("You Won");
            playerScore++;
        }
        else if (playerSelection == 'PAPER') {
            console.log("Computer Won");
            computerScore++;
        }
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    winner();
}
function winner() {
    console.log("Your score: " + playerScore)
    console.log("Computer score: " + computerScore)
    if (playerScore == computerScore) {
        console.log("Tie");
    }
    else if (playerScore > computerScore) {
        console.log("Congradulations You Won");
    }
    else {
        console.log("Sorry Better Luck Next Time");
    }
}
