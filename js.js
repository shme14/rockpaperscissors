// playGame();
// playGame();
// playGame();
// playGame();
// playGame();

const gameResult = document.querySelector("#gameResult");
const resultsDiv = document.querySelector("#resultsDiv");
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');
buttonRock.onclick = function() {playGame('rock')};
buttonPaper.onclick = function() {playGame('paper')};
buttonScissors.onclick = function() {playGame('scissors')};
let gameNumber = 1;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random=Math.floor(Math.random() * 3);
    switch(random){
        case 0:
            return "rock"
            break;
        case 1:
            return"scissors"
            break;
        case 2:
            return "paper"
            break;
    }
}

function getPlayerChoice(){
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection=playerSelection.toLowerCase();
    return playerSelection;
}

function playGame(playerSelection){
    // let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection){
        resultsDiv.textContent = "It's a Tie!";
    } 
    else if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock")) {
        resultsDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }
    else if ((playerSelection == "rock" && computerSelection == "paper") || 
    (playerSelection == "scissors" && computerSelection == "rock") || 
    (playerSelection == "paper" && computerSelection == "scissors")) {
        resultsDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    else {
        resultsDiv.textContent = "Invalid Player Choice";
    }
    
    if (gameNumber == 5) {
        if (playerScore<computerScore){
            gameResult.textContent = `PLAYER LOST! Score: Player: ${playerScore} Computer: ${computerScore}`;
        }
        else if (playerScore>computerScore){
            gameResult.textContent = `PLAYER WON! Score: Player: ${playerScore} Computer: ${computerScore}`;
        }
        else{
            gameResult.textContent = `PLAYER TIED! Score: Player: ${playerScore} Computer: ${computerScore}`;
        }
        
        gameNumber=1;
        computerScore=0;
        playerScore=0;
    }
    else {
        gameNumber++;
        gameResult.textContent = `Score: Player: ${playerScore} Computer: ${computerScore}`;
    }

}
