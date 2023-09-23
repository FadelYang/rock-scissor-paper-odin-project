
console.log("Hello JS");

let playerChoice = null;
let round = 0;
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonChoose = `Player Choose: ${button.innerHTML}`
        displayChooseButton = document.querySelector('#playerChoice');

        displayChooseButton.textContent = buttonChoose;
        playerChoice = button.innerHTML.toLowerCase();

        const computerChoice = getComputerChoice();
        let result = playground(playerChoice, computerChoice);
        let allScore = calculateScore(result, playerScore, computerScore);
        playerScore = allScore['playerScore'];
        computerScore = allScore['computerScore'];

        console.log(`ROUND ${round}`);
        console.log(createResultMessage(result, computerChoice, playerChoice));
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        round += 1

        if (playerScore == 5) {
            console.log('YOU WIN');
        } else if (computerScore == 5) {
            console.log('YOU LOSE');
        }
    })
})


function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];

    return choice[(Math.floor(Math.random() * choice.length))];
}

function getGameResult(getComputerChoice, getPlayerChoice) {
    let computerChoice = getComputerChoice;
    let playerChoice = getPlayerChoice;

    if (computerChoice == 'rock' && playerChoice == 'scissors') {
        return 'lose';
    } else if (computerChoice == 'rock' && playerChoice == 'paper') {
        return 'win';
    } else if (computerChoice == 'rock' && playerChoice == 'rock') {
        return 'draw';
    } else if (computerChoice == 'paper' && playerChoice == 'rock') {
        return 'lose';
    } else if (computerChoice == 'paper' && playerChoice == 'scissors') {
        return 'win';
    } else if (computerChoice == 'paper' && playerChoice == 'paper') {
        return 'draw';
    } else if (computerChoice == 'scissors' && playerChoice == 'paper') {
        return 'lose';
    } else if (computerChoice == 'scissors' && playerChoice == 'rock') {
        return 'win';
    } else if (computerChoice == 'scissors' && playerChoice == 'scissors') {
        return 'draw'
    }
}

function createResultMessage(getGameResult, getComputerChoice, getPlayerChoice) {
    let computerChoice = getComputerChoice;
    let playerChoice = getPlayerChoice;
    let result = getGameResult;

    if (result == 'win') {
        return `you win, ${playerChoice} beat ${computerChoice}`;
    } else if (result == 'lose') {
        return `you lose, ${computerChoice} beat ${playerChoice}`;
    } else if (result == 'draw') {
        return `you draw, ${computerChoice} and ${playerChoice} are equal`;
    } else {
        return 'please type right choice. paper, scissors, or rock!'
    }
}

function calculateScore(getGameResult, playerScore, computerScore) {
    let result = getGameResult;

    if (result == 'win') {
        playerScore = playerScore + 1;
    } else if (result == 'lose') {
        computerScore = computerScore + 1;
    }

    return {
        playerScore,
        computerScore
    }
}

function playground(playerChoice, computerChoice) {
    let gameResult = getGameResult(computerChoice, playerChoice);

    return gameResult;
}
