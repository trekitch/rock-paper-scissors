const container = document.querySelector('#container');
const roundResult = document.querySelector('.roundResult');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const roundWinner = document.createElement('p');

//keep track of player and computer points
let compPoints = 0;
let playerPoints = 0;

// computer picks rock, paper, or scissors
function computerPlay(){
    //array of options
    const choices = ["rock","paper","scissors"];
    // pick and option
    const computerPick = choices[Math.floor(Math.random() * choices.length)];
    //return option
    console.log("Computer picked: ", computerPick);
    return computerPick;
}

function playRound(playerSelection, computerSelection){
    //calculates a winner
    //paper beats rock

    if(playerSelection == 'rock' && computerSelection == 'paper'){
        return "You lose! Paper beats Rock.";
    }else if(playerSelection == 'paper' && computerSelection == 'rock'){
        return "You win! Paper beats Rock.";
    //rock beats scissors
    }else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        return "You lose! Rock beats Scissors."
    }else if(playerSelection == 'rock' && computerSelection == 'scissors'){
         return "You win! Rock beats Scissors."
    //scissors beats paper
    }else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return "You lose! Scissors beats Paper."
    }else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        return "You win! Scissors beats Paper."
    }else{
    //default is a tie
        return "It's a tie";
    }
    
}

//play the game
function game(){
    //creates rps buttons
    rock.textContent = 'Rock';    
    paper.textContent = 'Paper';    
    scissors.textContent = 'Scissors'

    //adds buttons to the container div
    container.appendChild(rock);
    container.appendChild(paper);
    container.appendChild(scissors);

    //creates node list of buttons
    const buttons = document.querySelectorAll('button');

    //adds a click event listener to all the buttons
    // pass the button choice to the playRound method as a strong
    // result of play round is stored in string and added to p text to display win or
    // lose
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Player choice: ${button.textContent}`)
            let result = (playRound(button.textContent.toLowerCase(), computerPlay()));
            roundWinner.textContent = result;
            roundResult.appendChild(roundWinner);
            console.log(result)

            //calls funtion to decide the winner
            determineWinner(result);

            console.log(`Player points: ${playerPoints} Computer Points: ${compPoints}`);
        });
    });

}

function determineWinner(result){
    if(result.includes("You win")){
        ++playerPoints;
    }else if(result.includes("You lose")){
        ++compPoints;
    }
}

game()
