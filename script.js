

function getComputerChoice(){

    rand = Math.random();
    if (rand<=0.333){
        choice = "rock";

    }
    else if (rand<0.666 && rand>0.333){
        choice ="paper";

    }
    else{
        choice='scissors'
    }
    return choice;


}

function getPlayerChoice(){
    choice = prompt("Select 'rock', 'paper', or 'scissors'").toLowerCase();
    return choice;
}






function playGame(){
    let playerScore=0;
    let computerScore=0;

    function playRound(computerChoice, playerChoice) {
        // Rules: rock beats scissors, scissors beat paper, paper beats rock.
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        if (computerChoice === playerChoice) {
            alert( `It's a tie! Both chose ${playerChoice}`);
        } else if (
            (computerChoice === 'rock' && playerChoice === 'scissors') ||
            (computerChoice === 'scissors' && playerChoice === 'paper') ||
            (computerChoice === 'paper' && playerChoice === 'rock')
        ) {
            computerScore++;
            alert(`You lost! ${computerChoice} beats ${playerChoice}`);
        } else {
            playerScore++;
            alert(`You won! ${playerChoice} beats ${computerChoice}`);
        }
    }

    for(i=1;i<=5;i++){
        playRound();
    }

    console.log(`The players score is ${playerScore}`);
    console.log(`The computer's score is ${computerScore}`);

}