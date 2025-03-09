// console.log('Hello World')

humanScore = 0;
computerScore = 0;

const getComputerChoice = () => {
    let computerAnswer = Math.floor(Math.random() * 3) //choose random int from 0 to 2
    // if (computerAnswer === 0) {
    //     computerAnswer = 'rock'
    // }
    // else if(computerAnswer === 1){
    //     computerAnswer = 'paper'
    // }
    // else{
    //     computerAnswer = 'scissor'
    // }
    return computerAnswer
}

const getHumanChoice = () => {
    let answer = prompt('Pick between Rock, Paper, and Scissors');
    return answer.toLowerCase();
}
// const userChoice = humanChoice()
// console.log(userChoice)

const playRound = (humanChoice, computerChoice) => {
    switch (humanChoice) {
        case 'rock':
            if (computerChoice === 0) {
                console.log('Tied')
            }
            else if (computerChoice === 1) {
                console.log('You Lose')
                computerScore++
                console.log('Computer Score ' + computerScore)
                console.log('Human Score ' + humanScore)
            }
            else {
                console.log('You Win')
                humanScore++
                console.log('Computer Score ' + computerScore)
                console.log('Human Score ' + humanScore)
            }
            break;
        case 'paper':
            if (computerChoice === 0) {
                console.log('You Win')
                humanScore++
                console.log('Computer Score ' + computerScore)
                console.log('Human Score ' + humanScore)
            }
            else if (computerChoice === 1) {
                console.log('Tied')
            }
            else {
                console.log('You Lose')
                computerScore++
                console.log('Computer Score ' + computerScore)
                console.log('Human Score ' + humanScore)
            }
            break;
        case 'scissor':
            if (computerChoice === 0) {
                console.log('You Lose')
                computerScore++
                console.log('Computer Score ' + computerScore)
                console.log('Human Score ' + humanScore)
            }
            else if (computerChoice === 1) {
                console.log('You Win')
                humanScore++
                console.log('Computer Score ' + computerScore)
                console.log('Human Score ' + humanScore)

            }
            else {
                console.log('Tied')
            }
            break;
    }
}

const playGame = () => {
    const maxRound = 5;
    for (i = 1; i <= maxRound; i++) {
        console.log('Round ' + i)
        const computerSelection = getComputerChoice()
        const humanSelection = getHumanChoice()
        playRound(humanSelection, computerSelection)
    }

    if (humanScore == 3) {
        console.log('Human Win')
    }
    else if (computerScore == 3) {
        console.log('Computer Win')
    }
    else {
        console.log('Tied')
    }
}

playGame()
