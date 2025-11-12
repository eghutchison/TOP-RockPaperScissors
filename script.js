// Create a function for computer to choose rock, paper, or scissor called getComputerChoice (use random number gen)
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
// const choice = getComputerChoice();
// console.log("Random choice:", choice);

function getHumanChoice() {
    const userSelection = prompt("Please select Rock, Paper, or Scissors:");
    return userSelection.charAt(0).toUpperCase() + userSelection.slice(1).toLowerCase();
}
// const userChoice = getHumanChoice()
// test return via console log
// console.log("User Choice:", userChoice);



function playRound (humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats Scissors.");
        return "win";
    }   else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats Rock.");
        return "lose";
    }   else if (humanChoice == "Rock" && computerChoice == "Rock") {
        console.log("It's a draw.");
        return "draw";
    }   else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats Rock.");
        return "win";
    }   else if (humanChoice == "Paper" && computerChoice == "Paper") {
        console.log("It's a draw.")
        return "draw";
    }   else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beat paper.");
        return "lose";
    }   else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beat paper.");
        return "win";
    }   else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose. Rock beats scissors.");
        return "lose";
    }   else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
        console.log("It's a draw.");
        return "draw";
    }        
}



function playGame (round) {
    let humanScore = 0;
    let computerScore = 0;
    let draw = 0;
    for (let i = 0; i < round; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        if (result === "win") {
            humanScore++;
        } else if (result === "lose") {
            computerScore++;
        } else if (result === "draw") {
            draw++;
        }
        console.log("Your choice: ", humanSelection);
        console.log("Computer choice: ", computerSelection);
    }
    console.log("Your score: ",humanScore);
    console.log("Computer score: ",computerScore);
    console.log("Draw: ",draw);
}
playGame(5);
