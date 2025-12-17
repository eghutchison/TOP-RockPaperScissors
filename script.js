function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)

    switch(randomNumber){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let draw = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let userChoice;

rock.addEventListener('click', function() {userChoice = "Rock";
    playGameRound();
})
paper.addEventListener('click', function () {userChoice = "Paper";
    playGameRound();
})
scissors.addEventListener('click', function () {userChoice = "Scissors";
    playGameRound();
})

function humanChoice(){
    return userChoice;
}

const resultCtn = document.querySelector('.result');
const roundScore = resultCtn.appendChild(document.createElement('p'));
roundScore.id = 'roundScore';
const totalScore = resultCtn.appendChild(document.createElement('p'));
totalScore.id = 'totalScore';
const winner = resultCtn.appendChild(document.createElement('p'));
winner.id = 'winner';

function playRound (humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        roundScore.textContent = `You win! Rock beats Scissors.`;
        return "win";
    }   else if (humanChoice == "Rock" && computerChoice == "Paper") {
        roundScore.textContent = `You lose! Paper beats Rock.`;
        return "lose";
    }   else if (humanChoice == "Rock" && computerChoice == "Rock") {
        roundScore.textContent = `It's a draw.`;
        return "draw";
    }   else if (humanChoice == "Paper" && computerChoice == "Rock") {
        roundScore.textContent = `You win! Paper beats Rock.`;
        return "win";
    }   else if (humanChoice == "Paper" && computerChoice == "Paper") {
        roundScore.textContent = `It's a draw.`;
        return "draw";
    }   else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        roundScore.textContent = `You lose! Scissors beat paper.`;
        return "lose";
    }   else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        roundScore.textContent = `You win! Scissors beat paper.`;
        return "win";
    }   else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        roundScore.textContent = `You lose. Rock beats scissors.`;
        return "lose";
    }   else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
        roundScore.textContent = `It's a draw.`;
        return "draw";
    }        
}

function playGameRound() {
    const computerSelection = getComputerChoice();
    const result = playRound(userChoice, computerSelection);

    if (result === "win") {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    } else if (result === "draw"){
        draw++;
    }

    roundsPlayed++;

    totalScore.textContent = `Score — You: ${humanScore} | Computer: ${computerScore} | Draw: ${draw}`;

    if (roundsPlayed === 5) {
        if (humanScore > computerScore) {
            winner.textContent = "You win the game! Press any button to play again.";
        } else if (computerScore > humanScore) {
            winner.textContent = "Computer wins the game! Press any button to play again.";
        } else {
            winner.textContent = "It's a tie game! Press any button to play again.";
        }
    }
        else if (roundsPlayed > 5) {
        roundsPlayed = 0;
        computerScore = 0;
        humanScore = 0;
        draw = 0;
        winner.textContent = '';
        roundScore.textContent = '';
        totalScore.textContent = '';
    }
}

