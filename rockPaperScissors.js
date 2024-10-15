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

// function getWinner(humanChoice, computerChoice) {

//     if (humanChoice == computerChoice) {
//         return console.log(`It's a tie!`)
//     }

//     if (humanChoice == "Rock") {
//         if (computerChoice == "Paper") {
//             computerScore++
//             return console.log(`Computer wins!`)
//         } else {
//             return console.log(`You win!`)
//         }
//     }

//     if (humanChoice == "Paper") {
//         if (computerChoice == "Scissors") {
//             return console.log(`Computer wins!`)
//         } else {
//             return console.log(`You win!`)
//         }
//     }

//     if (humanChoice == "Scissors") {
//         if (computerChoice == "Rock") {
//             return console.log(`Computer wins!`)
//         } else {
//             return console.log(`You win!`)
//         }
//     }

// }

function playGame(humanChoice, computerChoice) {

    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {

        humanChoice = capitalize(humanChoice)
        // console.log('computer: ', computerChoice)

        if (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors") {
            return alert("Invalid input, please try again")
        }

        if (humanChoice == computerScore) {
            console.log(`It's a tie!`)
        }

        if (humanChoice == "Rock") {
            if (computerChoice == "Paper") {
                computerScore = ++computerScore
                return console.log(`Computer wins!`)
            } else {
                humanScore = ++humanScore
                return console.log(`You win!`)
            }
        }
        if (humanChoice == "Paper") {
            if (computerChoice == "Scissors") {
                computerScore = ++computerScore
                return console.log(`Computer wins!`)
            } else {
                humanScore = ++humanScore
                return console.log(`You win!`)
            }
        }
        if (humanChoice == "Scissors") {
            if (computerChoice == "Rock") {
                computerScore = ++computerScore
                return console.log(`Computer wins!`)
            } else {
                humanScore = ++humanScore
                return console.log(`You win!`)
            }
        }
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playGame(humanSelection, computerSelection)

