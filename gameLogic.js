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

function playerPlay() {
    let playerSelection = prompt("Choose: Rock, Paper, or Scissors?");
    return playerSelection.toUpperCase();
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

function game(currentRound) {
    let pChoice = playerPlay();
    let cChoice = computerPlay();

    let result = playRound(pChoice, cChoice);

    switch (result) {
        case -1:
            console.log("The round is a DEFEAT! You chose " + pChoice + " and the computer chose " + cChoice + ".");
            cWins++;
            break;
        case 0:
            console.log("The round is a TIE! You chose " + pChoice + " and the computer chose " + cChoice + ".");
            break;
        case 1:
            console.log("The round is a VICTORY! You chose " + pChoice + " and the computer chose " + cChoice + ".");
            pWins++;
            break;
        default:
            console.log("There seems to be an issue with the round... We will restart the round");
            rounds++;
            break;
    }
    if (currentRound == 1) {
        switch (pWins > cWins) {
            case true:
                console.log("The game is over. You won with " + pWins + " wins!");
                break;
            case false:
                console.log("The game is over. The computer won with " + cWins + " wins!");
                break;
            default:
                console.log("The game is over. It was a tie!");
                break;
        }
    }
}

while (rounds > 0) {
    game(rounds);
    rounds--;
}