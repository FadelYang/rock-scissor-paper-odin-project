
console.log("Hello JS");

let playerChoice = null;
let round = 1;
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('button');
let finalResultText = null;

let newGameButton = document.querySelector('#newGameButton');

newGameButton.addEventListener('click', () => {
    location.reload()
})


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonChoose = `Player Choose: ${button.value}`
        displayChooseButton = document.querySelector('#playerChoice');

        displayChooseButton.textContent = buttonChoose;
        playerChoice = button.value.toLowerCase();

        const computerChoice = getComputerChoice();
        let result = playground(playerChoice, computerChoice);
        let allScore = calculateScore(result, playerScore, computerScore);
        playerScore = allScore['playerScore'];
        computerScore = allScore['computerScore'];

        // create history display
        let resultDiv = document.querySelector('#resultHistory')

        let resultText = document.createElement('li');
        resultText.textContent = createResultMessage(result, computerChoice, playerChoice);

        let playerScoreText = document.querySelector('#playerScoreText');
        playerScoreText.textContent = `Player score: ${playerScore}`;

        let computerScoreText = document.querySelector('#computerScoreText');
        computerScoreText.textContent = `Computer score: ${computerScore}`;

        let finalResult = document.querySelector('#finalResult');

        resultDiv.appendChild(resultText);

        console.log(`ROUND ${round}`);

        if (round == 5) {

            if (playerScore > computerScore) {
                setTimeout(function () {
                    alert('YOU WIN');
                }, 0);

                finalResult.textContent = 'YOU WIN';


                endGame();
            } else if (playerScore < computerScore) {
                setTimeout(function () {
                    alert('YOU LOSE');
                }, 0);

                finalResult.textContent = 'YOU LOSE';

                endGame();
            } else {
                setTimeout(function () {
                    alert('YOU DRAW');
                }, 0);

                finalResult.textContent = 'YOU DRAW';

                endGame()
            }
        }

        round += 1;

    })
})

function endGame() {
    buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        console.log(button.id);
        if (button.id !== 'newGameButton') {
            button.setAttribute('disabled', '')
        }

    })
}

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
