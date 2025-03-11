humanScore = 0;
computerScore = 0;
const maxRound = 5;
let currRound = 0;

const resultText = document.querySelector('.result')
const game_over = document.querySelector('.game-over')
const roundText = document.querySelector('.number')
const humanScoreboard = document.querySelector('.human-score')
const computerScoreboard = document.querySelector('.computer-score')
const restartText = document.querySelector('.round-text')
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorButton = document.querySelector('.scissor')
const restartButton = document.querySelector('.restart-button');
// const gameButton = document.querySelector('.btn')

const getComputerChoice = () => {
    let computerAnswer = ['rock', 'paper', 'scissor']
    return computerAnswer[Math.floor(Math.random() * 3)]
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        resultText.textContent = 'Tied'
        return
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissor' || humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissor' && computerChoice === 'paper') {
        resultText.textContent = 'You Win';
        return 'human'
    }
    else {
        resultText.textContent = 'Computer Win'
        return 'computer'
    }

}

const playGame = (humanChoice) => {

    currRound++
    roundText.textContent = currRound;
    const computerSelection = getComputerChoice()
    let points = playRound(humanChoice, computerSelection)
    if (points === 'human') {
        humanScore++
        console.log(humanScore)
    }
    else if (points === 'computer') {
        computerScore++
        console.log(computerScore)
    }

    humanScoreboard.textContent = humanScore;
    computerScoreboard.textContent = computerScore;

    if (currRound === maxRound) {
        if (humanScore > computerScore) {
            game_over.textContent = 'Game Over! You Win!'
        }
        else if (computerScore > humanScore) {
            game_over.textContent = 'Game Over! Computer Win!'
        }
        else {
            game_over.textContent = 'Game Over! Tied!'
        }
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
    }
}

const restart = () => {
    // Reset game state
    currRound = 0;
    humanScore = 0;
    computerScore = 0;

    // Update the DOM to reflect the reset state
    roundText.textContent = currRound;
    humanScoreboard.textContent = humanScore;
    computerScoreboard.textContent = computerScore;
    resultText.textContent = ''; // Clear result text
    game_over.textContent = ''; // Clear game-over text
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorButton.disabled = false;
}
