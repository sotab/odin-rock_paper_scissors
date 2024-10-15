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

function getHumanChoice() {
    const greetingToGame = `Welcome to the "Rock Paper Scissors" game! Please add your choice below:`

    return window.prompt(greetingToGame)
}

console.log(getHumanChoice())