const options = ["Rock", "Paper", "Scissor"]

function getComputerChoice() {
    const choices = options[Math.floor(Math.random() * options.length)]
    return choices 
}

function CheckWinner(playerSelection,computerSelection) {
    if (playerSelection == computerSelection){
    return "It's a Tie";
} else if (
(playerSelection == "Rock" && computerSelection == "Scissor")||
(playerSelection == "Scissor" && computerSelection == "Paper")||
(playerSelection == "Paper" && computerSelection == "Rock")
){
    return "Player"
}
else {
    return "Computer"
}
}

function PlayRound(playerSelection, computerSelection)




  