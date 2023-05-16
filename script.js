function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)] 
}

const choices = ["Rock", "Paper", "Scissor"]

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") 
        return "You Lose, Paper beats Rock"
    }
  
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound("Rock", "Paper"));
  console.log(getComputerChoice())