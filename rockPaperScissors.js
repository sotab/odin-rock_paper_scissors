let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const getNumber = function () { return Math.floor(Math.random() * 3) }

    switch (getNumber()) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

console.log(getComputerChoice())