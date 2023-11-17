// Keep tracking of score
let playerScore = 0,
    computerScore = 0;

//gives random computer choice
function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const choice = Math.floor(Math.random() * 3);
    console.log("YOU CLICKED ROCK")
    return choices[choice];
}

//gives the player choice 
document.querySelector('#rock').addEventListener('click', () => {
    const playerSelection = 'ROCK';
    const computerSelection = getComputerChoice();
    getResult(playerSelection, computerSelection);

});
document.querySelector('#paper').addEventListener('click', () => {
    const playerSelection = 'PAPER';
    const computerSelection = getComputerChoice();
    getResult(playerSelection, computerSelection);
});
document.querySelector('#scissors').addEventListener('click', () => {
    const playerSelection = 'SCISSORS';
    const computerSelection = getComputerChoice();
    getResult(playerSelection, computerSelection);
});

//do comparision between player and computer choices
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "ITS TIE";
    }
    else if (computerSelection == 'ROCK') {
        if (playerSelection == 'PAPER') {
            playerScore++;
            return "You Won";
        }
        else if (playerSelection == 'SCISSORS') {
            computerScore++;
            return "Computer Won";
        }
    }
    else if (computerSelection == 'PAPER') {
        if (playerSelection == 'SCISSORS') {
            playerScore++;
            return "You Won";
        }
        else if (playerSelection == 'ROCK') {
            computerScore++;
            return "Computer Won";
        }
    }
    else if (computerSelection == 'SCISSORS') {
        if (playerSelection == 'ROCK') {
            playerScore++;
            return "You Won";
        }
        else if (playerSelection == 'PAPER') {
            computerScore++;
            return "Computer Won";
        }
    }
}

function getResult(playerSelection, computerSelection) {
    const container = document.querySelector('#container');
    //displays player choice and computer choice
    const choiceDiv = document.createElement('div');
    choiceDiv.classList.add('choiceDiv');
    choiceDiv.innerHTML = `your choice : ${playerSelection} and  computer choice: ${computerSelection}`;
    container.appendChild(choiceDiv)
    //display round winner
    const winnerDiv = document.createElement('div');
    winnerDiv.classList.add('winnerDiv');
    winnerDiv.innerHTML = `Winner : ${playRound(playerSelection, computerSelection)}`
    container.appendChild(winnerDiv)
    //displays scores
    const scoreDiv = document.createElement('div')
    scoreDiv.classList.add('scoreDiv')
    scoreDiv.innerHTML = `your score: ${playerScore} and computer score ${computerScore} `;
    container.appendChild(scoreDiv);

    if (playerScore == 5 || computerScore == 5) {
        gameover();

    }
}
function gameover() {
    alert("Game over")
    playerScore = 0;
    computerScore = 0;
}