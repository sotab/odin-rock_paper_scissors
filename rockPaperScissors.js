// UI elements
const container = document.querySelector("#container")

const results = document.createElement("div")
const humanResult = document.createElement("div")
const computerResult = document.createElement("div")
const btnRock = document.createElement("button")
const btnPaper = document.createElement("button")
const btnScissors = document.createElement("button")


btnRock.textContent = "Rock"
btnPaper.textContent = "Paper"
btnScissors.textContent = "Scissors"
humanResult.textContent = "You: 0"
computerResult.textContent = "Computer: 0"
results.textContent = "Click a button to play game"


container.appendChild(btnRock)
container.appendChild(btnPaper)
container.appendChild(btnScissors)
container.appendChild(results)
container.appendChild(humanResult)
container.appendChild(computerResult)

// Logic
let scoreHuman = 0;
let scoreComputer = 0;
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

function isWinnerHuman(humanChoice, computerChoice) {

    if (humanChoice == 'Rock' && computerChoice == 'Scissors') {
        return true
    } else if (humanChoice == 'Rock' && computerChoice == 'Paper') {
        return false
    }

    if (humanChoice == 'Paper' && computerChoice == 'Rock') {
        return true
    } else if (humanChoice == 'Paper' && computerChoice == 'Scissors') {
        return false
    }

    if (humanChoice == 'Scissors' && computerChoice == 'Paper') {
        return true
    } else if (humanChoice == 'Scissors' && computerChoice == 'Rock') {
        return false
    }
}


function playRound(humanChoice) {
    const computerChoice = getComputerChoice()
    const humanWin = isWinnerHuman(humanChoice, computerChoice)
    if (humanWin == true) {
        scoreHuman++
        results.textContent ='You win this round!'
        humanResult.textContent = `You: ${scoreHuman}`
    } else if (humanWin !== false) {
        scoreComputer++
        results.textContent ='Computer wins this round!'
        computerResult.textContent = `Computer: ${scoreComputer}`
    } else {
        results.textContent ='It is a tie!'
    }
}

function announceWinner(scoreHuman, scoreComputer) {
    if((scoreHuman == 5) || (scoreComputer == 5)) {
        btnRock.disabled = true
        btnPaper.disabled = true
        btnScissors.disabled = true
        if (scoreHuman == 5) {
            results.textContent = 'You win the game! Refresh page to play again.'
        } else if ( scoreComputer == 5) {
             results.textContent = 'Computer wins the game! Refresh page to play again.'
        }
    }
}

btnRock.addEventListener("click", () => {
    playRound("Rock")
    announceWinner(scoreHuman,scoreComputer)
})

btnPaper.addEventListener("click", () => {
    playRound("Paper")
    announceWinner(scoreHuman,scoreComputer)
})

btnScissors.addEventListener("click", () => {
    playRound("Scissors")
    announceWinner(scoreHuman,scoreComputer)
})