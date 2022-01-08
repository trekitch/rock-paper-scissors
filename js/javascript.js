

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
    //calculates a ties
    if((playerSelection == 'rock' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'scissors')  ){
        console.log("It's a tie!!!")
    //paper beats roock
    }else if(playerSelection == 'rock' && computerSelection == 'paper'){
        console.log("You lose! Paper beats Rock!")
    }else if(playerSelection == 'paper' && computerSelection == 'rock'){
        console.log("You win! Paper beats Rock")
    //rock beats scissors
    }else if(playerSelection == 'scissors' && computerSelection == ''){

    }

}

//gets player selection
function userPlay(){
    let playerSelection = prompt("Rock, Paper or Scissors").toLowerCase()

    console.log("Player picked: ", playerSelection);
    return playerSelection
}

//play the game
function game(){
    //keep track of points
    let compPoints = 0;
    let playerPoints = 0;
}

// computerPlay()
// userPlay()
playRound(userPlay(), computerPlay())
