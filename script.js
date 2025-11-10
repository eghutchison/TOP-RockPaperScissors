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
const choice = getComputerChoice();
console.log("Random choice:", choice);

function getHumanChoice() {
    const userSelection = prompt("Please select Rock, Paper, or Scissors:");
    return userSelection;
}
const userChoice = getHumanChoice()
// test return via console log
console.log("User Choice:", userChoice);
