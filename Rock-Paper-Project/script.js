let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choice[index];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
    } else {
        humanScore++;
    }
    display(humanScore, computerScore)
}

function display(humanScore, computerScore) {
    let display = document.querySelector(".display");
    display.children[0].textContent = humanScore;
    display.children[1].textContent = computerScore;
    if (humanScore == 5 || computerScore == 5) {
        humanScore == computerScore ? display.children[2].textContent = " It's a tie!!" : humanScore > computerScore ? display.children[2].textContent = "you win!!" : display.children[2].textContent = "you lose!!";
    } else {
        display.children[2].textContent = ''
    }
}

document.querySelector(".reset").addEventListener('click', () => {
    alert('Score Reset!!');
    humanScore = 0;
    computerScore = 0;
    display(humanScore, computerScore);
})

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

rock.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
        playRound(rock.className);
    }
})
paper.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
        playRound(paper.className);
    }
})
scissors.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
        playRound(scissors.className);
    }
})