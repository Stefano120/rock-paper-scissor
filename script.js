const options = ["Rock", "Paper", "Scissor"]

function getComputerChoice() {
    const choices = options[Math.floor(Math.random() * options.length)]
    return choices 
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") 
    }
  
   
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection,computerSelection));

  