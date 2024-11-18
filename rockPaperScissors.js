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

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
}

function getHumanChoice() {
    const greetingToGame = `Welcome to the "Rock Paper Scissors" game! Please add your choice below:`

    return window.prompt(greetingToGame)
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

function playGame() {
    let humanScore = 0
    let computerScore = 0
    const round = [0, 1, 2, 3, 4]

    function playRound(humanChoice, computerChoice) {
        humanChoice = capitalize(humanChoice)

        if (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors") {
            return alert("Invalid input, please try again")
        }

        const humanWin = isWinnerHuman(humanChoice, computerChoice)
        if (humanWin == true) {
            humanScore++
            return console.log('You win!')
        } else if (humanWin !== false) {
            computerScore++
            return console.log('Computer wins!')
        } else {
            return console.log('It is a tie!')
        }
    }

    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    console.log('Human score:', humanScore)
    console.log('Computer score:', computerScore)

    // TODO: Readd logic once ui is finished
    // for (const current of round) {
    //     console.log(`This is round ${current + 1}, lets play!`)
    //     let humanChoice = getHumanChoice()
    //     let computerChoice = getComputerChoice()
    //     playRound(humanChoice, computerChoice)
    //     console.log('Human score:', humanScore)
    //     console.log('Computer score:', computerScore)

    //     if (current == 4 && humanScore > computerScore) {
    //         return console.log('And that is the game! You won the game!')
    //     } else if (current == 4 && humanScore > computerScore) {
    //         return console.log('And that is the game! The computer won the game!')
    //     } else if (current == 4 && humanScore == computerScore) {
    //         return console.log('And that is the game! It ends with a tie!')
    //     }
    // }
}

const results = document.createElement("div")
results.setAttribute("style", "display: flex;")

const humanResult = document.createElement("div")
const computerResult = document.createElement("div")

humanResult.textContent = "You: 0"
computerResult.textContent = "Computer: 0"
results.textContent = "Click a button to play game"


function playRound(humanChoice) {
    const computerChoice = getComputerChoice()
    humanChoice = capitalize(humanChoice)

    const humanWin = isWinnerHuman(humanChoice, computerChoice)
    if (humanWin == true) {
        scoreHuman++
        console.log('You win')
        results.textContent ='You win!'
        humanResult.textContent = `You: ${scoreHuman}`
    } else if (humanWin !== false) {
        scoreComputer++
        results.textContent ='Computer wins!'
        computerResult.textContent = `Computer: ${scoreComputer}`
    } else {
        results.textContent ='It is a tie!'
    }
}

const container = document.querySelector("#container")
const btnRock = document.createElement("button")
const btnPaper = document.createElement("button")
const btnScissors = document.createElement("button")


btnRock.textContent = "Rock"
btnPaper.textContent = "Paper"
btnScissors.textContent = "Scissors"

btnRock.addEventListener("click", () => {
    playRound("Rock")
})

btnPaper.addEventListener("click", () => {
    playRound("Paper")
})

btnScissors.addEventListener("click", () => {
    playRound("Scissors")
})

container.appendChild(btnRock)
container.appendChild(btnPaper)
container.appendChild(btnScissors)
container.appendChild(results)
container.appendChild(humanResult)
container.appendChild(computerResult)

