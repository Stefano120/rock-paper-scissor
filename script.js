const options = ["Rock", "Paper", "Scissor"]

function getComputerChoice() {
    const choices = options[Math.floor(Math.random() * options.length)]
    return choices 
}

function checkWinner(playerSelection,computerSelection) {
    if (playerSelection == computerSelection){
    return "Tie";
} 
    else if (
    (playerSelection == "Rock" && computerSelection == "Scissor")||
    (playerSelection == "Scissor" && computerSelection == "Paper")||
    (playerSelection == "Paper" && computerSelection == "Rock")
){
    return "Player"
} else {
    return "Computer"
}
}


function PlayRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection,computerSelection);
    if (result == "Tie"){
        return "It's a Tie!"
    }
    else if (result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

}

function game(){
    console.log("Welcome!")
    for (let i = 0; i < 5; i++){
        const playerSelection = "Rock";
        const computerSelection = getComputerChoice();
        console.log(PlayRound(playerSelection,computerSelection));
    }
}

game()



  