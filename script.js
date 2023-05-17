const options = ["rock", "paper", "scissor"]

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice 
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

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    } 
}

function game(){
    console.log("Welcome!")
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(PlayRound(playerSelection,computerSelection));
    }
}

game()



  