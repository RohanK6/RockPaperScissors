const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const btnRestart = document.getElementById('restart');
const buttons = document.querySelectorAll('button');

const totalRounds = 5;
let rounds = 5;
let pWins = 0;
let cWins = 0;

function computerPlay() {
    let computerSelection = "";
    let choice = Math.floor((Math.random() * 3) + 1);
    switch (choice) {
        case 1:
            computerSelection = "ROCK";
            break;
        case 2:
            computerSelection = "PAPER";
            break;
        case 3:
            computerSelection = "SCISSORS";
            break;
        default:
            computerSelection = null;
    }
    return computerSelection;
}


function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "ROCK":
            if (computerSelection == "ROCK") {
                return 0;
            }
            if (computerSelection == "PAPER") {
                return -1;
            }
            if (computerSelection == "SCISSORS") {
                return 1;
            }
        case "PAPER":
            if (computerSelection == "ROCK") {
                return 1;
            }
            if (computerSelection == "PAPER") {
                return 0;
            }
            if (computerSelection == "SCISSORS") {
                return -1;
            }
        case "SCISSORS":
            if (computerSelection == "ROCK") {
                return -1;
            }
            if (computerSelection == "PAPER") {
                return 1;
            }
            if (computerSelection == "SCISSORS") {
                return 0;
            }
        default:
            return null;
    }
}

function game(currentRound, selection) {
    let cChoice = computerPlay();
    let pChoice = selection;

    let result = playRound(pChoice, cChoice);
    
    switch (result) {
        case -1:
            document.getElementById('round-result').innerText += "The round is a DEFEAT! You chose " + pChoice + " and the computer chose " + cChoice + ". \n";
            cWins++;
            break;
        case 0:
            document.getElementById('round-result').innerText += "The round is a TIE! You chose " + pChoice + " and the computer chose " + cChoice + ". \n";
            break;
        case 1:
            document.getElementById('round-result').innerText += "The round is a VICTORY! You chose " + pChoice + " and the computer chose " + cChoice + ". \n";
            pWins++;
            break;
        default:
            document.getElementById('round-result').innerText += "There seems to be an issue with the round... We will restart the round. \n";
            rounds++;
            break;
    }
    if (currentRound == 1) {
        switch (pWins > cWins) {
            case true:
                document.getElementById('game-result').textContent = "The game is over. You won with " + pWins + " wins!";
                break;
            case false:
                document.getElementById('game-result').textContent = "The game is over. The computer won with " + cWins + " wins!";
                break;
            default:
                document.getElementById('game-result').textContent = "The game is over. It was a tie!";
                break;
        }
    } 
}

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        if (rounds > 0) {
            if (button.id.toUpperCase() == "RESTART") {
                console.log("User tried to restart before game is over...");
            }
            else {
                game(rounds, button.id.toUpperCase());
                rounds--;
            }
        }
        if ((rounds == 0) && (button.id.toUpperCase() == "RESTART")) {
            rounds = totalRounds;
            pwins = 0;
            cWins = 0;
            document.getElementById('round-result').textContent = "";
            document.getElementById('game-result').textContent = "";
        }
    });
});