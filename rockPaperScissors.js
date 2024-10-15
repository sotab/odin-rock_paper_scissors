let humanScore = 0;
let computerCore = 0;

function getComputerChoice() {
    const getNumber = function () { return Math.floor(Math.random() * 3) }

    switch (getNumber()) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
}

function getHumanChoice() {
    const greetingToGame = `Welcome to the "Rock Paper Scissors" game! Please add your choice below:`

    return window.prompt(greetingToGame)
}

function playRound(humanChoice, computerChoice) {
    humanChoice = capitalize(humanChoice)
    
    if (humanChoice === computerChoice) {
        return console.log("No winner, it's a tie!")
    } else
        return console.log("Someone won!")
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)