const choices = [ 'paper', 'rock', 'scissors'];
let computerRound = "";
let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let winner;

function playerSelection(playerSelection){
  console.log(playerSelection);
    playRound(playerSelection);
}



function points(playerSelection, computerSelection){
    // Determine the winner based on the rules
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
}
  

function playRound(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log('computer choosed ' +computerChoice);
  const roundResult = points(userChoice, computerChoice);
  document.getElementById('result').innerHTML += `Round ${roundsPlayed + 1}: ${roundResult}</br>`;

  if (roundResult === "You win!") {
    userScore++;
  } else if (roundResult === "Computer wins!") {
    computerScore++;
  }

  roundsPlayed++;

  if (roundsPlayed === 5) {
    // Determine the overall winner after five rounds
    if (userScore > computerScore) {
      document.getElementById('result').innerHTML += "<br>Congratulations! You are the overall winner!";
    } else if (userScore < computerScore) {
      document.getElementById('result').innerHTML += "<br>Sorry, the computer is the overall winner.";
    } else {
      document.getElementById('result').innerHTML += "<br>It's a tie! No overall winner.";
    }

    // Reset scores and rounds for a new game
    userScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
  }
}