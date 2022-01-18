//constant variables for items on the page
const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
const roundResult = document.querySelector('.roundResult');
const gameResult = document.querySelector('.gameResult');
const scores = document.querySelector('.scores');
const options = document.querySelector('.options');
const playerImage = document.querySelector('.player-img');
const computerImage = document.querySelector('.computer-img');

//constant variables for elements
const rock = document.createElement('button');
rock.classList.add("optionsButtons")
const paper = document.createElement('button');
paper.classList.add("optionsButtons")
const scissors = document.createElement('button');
scissors.classList.add("optionsButtons")
const roundWinner = document.createElement('p');
const points = document.createElement('p');
const gameWinner = document.createElement('p');

//keep track of player and computer points
let compPoints = 0;
let playerPoints = 0;
const winningScore = 5;

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

    let playGame = true;
    //creates rps buttons
    rock.textContent = 'Rock';    
    paper.textContent = 'Paper';    
    scissors.textContent = 'Scissors'

    //adds buttons to the container div
    options.appendChild(rock);
    options.appendChild(paper);
    options.appendChild(scissors);

    //creates node list of buttons
    const buttons = document.querySelectorAll('.optionsButtons');

    //adds a click event listener to all the buttons
    // pass the button choice to the playRound method as a strong
    // result of play round is stored in string and added to p text to display win or
    // lose
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            if(playGame){
                let playerChoice = button.textContent.toLowerCase();
                let computerChoice = computerPlay()
                let result = (playRound(playerChoice, computerChoice));

                //displays images
                playerImage.style.display = "block";
                computerImage.style.display = "block";

                if(playerChoice == 'rock'){
                    playerImage.src = './imgs/rock.png'
                    
                }else if(playerChoice == 'paper'){
                    playerImage.src = './imgs/paper.png'
                }else{
                    playerImage.src = './imgs/scissors.png'
                }

                if(computerChoice == 'rock'){
                    computerImage.src = './imgs/rock.png'
                }else if(computerChoice == 'paper'){
                    computerImage.src = './imgs/paper.png'
                }else{
                    computerImage.src = './imgs/scissors.png'
                }

                

                roundWinner.textContent = result;
                roundResult.appendChild(roundWinner);
    
                //calls funtion to decide the winner
                determineWinner(result);
                
                //calls function to display points
                displayPoints(playerPoints, compPoints)

                //decides if game is over or not. If game over display result
                if(playerPoints == winningScore || compPoints == winningScore){
                    playGame = false;
                    determineGameWinner(playerPoints, compPoints);
                    gameResult.appendChild(gameWinner);
                }
            }
            
        });

    });

    //reset button logic
    reset.onclick = () => {
        points.textContent = "";
        gameWinner.textContent = "";
        roundResult.textContent = "";

        playerPoints = 0;
        compPoints = 0;
        playGame = true;

        playerImage.style.display = "none";
        computerImage.style.display = "none";
    }

}

function determineWinner(result){
    if(result.includes("You win")){
        playerPoints++;
    }else if(result.includes("You lose")){
        compPoints++;
    }
}

function displayPoints(playerPoints, compPoints){
    let pointsDisplay = (`Player point: ${playerPoints} Computer Points: ${compPoints}`)
    points.textContent = pointsDisplay;
    scores.appendChild(points);
}

function determineGameWinner(playerPoints, compPoints){
    if(playerPoints > compPoints){
        gameWinner.textContent = "You Win!!!"
        return true
        
    }else if(playerPoints < compPoints){
        gameWinner.textContent = "You lose!!!"
    }
}

game()
