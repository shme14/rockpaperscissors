playGame();
playGame();
playGame();
playGame();
playGame();




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

function playGame(){
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if (playerSelection == computerSelection){
        console.log("It's a Tie!");
    } 
    else if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock")) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    else if ((playerSelection == "rock" && computerSelection == "paper") || 
    (playerSelection == "scissors" && computerSelection == "rock") || 
    (playerSelection == "paper" && computerSelection == "scissors")) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    else {
        console.log("Invalid Player Choice");
    }

}
