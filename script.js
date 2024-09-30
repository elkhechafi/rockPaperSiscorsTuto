const choices = ['paper', 'rock', 'scissors'];
let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playerSelection(playerChoice) {
    playRound(playerChoice);
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "It's a tie!";
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    }
    return "Computer wins!";
}

function updateScores(result) {
    if (result === "You win!") userScore++;
    else if (result === "Computer wins!") computerScore++;
}

function displayRoundResult(playerChoice, computerChoice, result) {
    const resultsDiv = document.getElementById('results');
    const roundDiv = document.createElement('div');
    roundDiv.className = 'round-result';
    roundDiv.innerHTML = `Round ${roundsPlayed}: You chose ${playerChoice}, the opponent chose ${computerChoice}. ${result}`;
    resultsDiv.appendChild(roundDiv);
}

function checkGameOver() {
    if (userScore === 5 || computerScore === 5) {
        const winner = userScore === 5 ? "You are" : "The computer is";
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<br>${winner} the overall winner!`;
        
        // Remove appended round result divs
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        // Reset scores and rounds for a new game
        userScore = 0;
        computerScore = 0;
        roundsPlayed = 0;

        return true;
    }
    return false;
}

function playRound(playerChoice) {
    roundsPlayed++;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    
    updateScores(result);
    displayRoundResult(playerChoice, computerChoice, result);
    
    checkGameOver();
}