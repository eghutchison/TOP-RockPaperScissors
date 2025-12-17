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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let userChoice;

rock.addEventListener('click', function() {userChoice = "Rock";
    const computerSelection = getComputerChoice();
    const roundResult = playRound(userChoice, computerSelection);
})
paper.addEventListener('click', function () {userChoice = "Paper";
    const computerSelection = getComputerChoice();
    const roundResult = playRound(userChoice, computerSelection);
})
scissors.addEventListener('click', function () {userChoice = "Scissors";
    const computerSelection = getComputerChoice();
    const roundResult = playRound(userChoice, computerSelection);
})

function humanChoice(){
    return userChoice;
}

const resultFld = document.querySelector(".result");


function playRound (humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        resultFld.textContent = "You win! Rock beats Scissors.";
        return "win";
    }   else if (humanChoice == "Rock" && computerChoice == "Paper") {
        resultFld.textContent = "You lose! Paper beats Rock.";
        return "lose";
    }   else if (humanChoice == "Rock" && computerChoice == "Rock") {
        resultFld.textContent = "It's a draw.";
        return "draw";
    }   else if (humanChoice == "Paper" && computerChoice == "Rock") {
        resultFld.textContent = "You win! Paper beats Rock.";
        return "win";
    }   else if (humanChoice == "Paper" && computerChoice == "Paper") {
        resultFld.textContent = "It's a draw.";
        return "draw";
    }   else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        resultFld.textContent = "You lose! Scissors beat paper.";
        return "lose";
    }   else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        resultFld.textContent = "You win! Scissors beat paper.";
        return "win";
    }   else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        resultFld.textContent = "You lose. Rock beats scissors.";
        return "lose";
    }   else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
        resultFld.textContent = "It's a draw.";
        return "draw";
    }        
}

function playGame (round) {
    let humanScore = 0;
    let computerScore = 0;
    let draw = 0;
    for (let i = 0; i < round; i++) {
        const humanSelection = humanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        if (result === "win") {
            humanScore++;
        } else if (result === "lose") {
            computerScore++;
        } else if (result === "draw") {
            draw++;
        }
        resultFld.textContent = "Your choice: ", humanSelection;
        resultFld.textContent = "Computer choice: ", computerSelection;
    }
    resultFld.textContent = "Your score: ",humanScore;
    resultFld.textContent = "Computer score: ",computerScore;
    resultFld.textContent = "Draw: ",draw;
}

