const beatRules = { "rock": "scissors", "paper": "rock", "scissors": "paper" }
let count = { "Player": 0, "Computer": 0 }
let rounds = 5;
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
function getPlayerChoice() {
    const choice = prompt('Submit your choice: ');
    if (!(choice.toLowerCase() in beatRules)) {
        console.log('Incorrect choice')
        return getPlayerChoice();
    }
    else {
        return choice;
    }

}
function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        rounds++;
        return `It's a Tie! Of ${playerSelection} and ${computerSelection}`
    }
    else if (beatRules[playerSelection.toLowerCase()] === computerSelection.toLowerCase()) {
        count["Player"]++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (beatRules[computerSelection.toLowerCase()] === playerSelection.toLowerCase()) {
        count["Computer"]++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else {
        console.log("Unexpected round result")
    }
}

function game() {
    for (let i = 0; i < rounds; i++) {
        const oldCount = structuredClone(count);
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        if (oldCount["Player"] !== count["Player"] || oldCount["Computer"] !== count["Computer"]) {
            console.log(`Player: ${count.Player}\nComputer: ${count.Computer}`)
        }
    }
    if (count.Player > count.Computer) {
        console.log("You Win!")
    }
    else if (count.Computer > count.Player) {
        console.log("You Lose!")
    }
    else {
        console.log("It's a Tie!")
    }
}

game();
