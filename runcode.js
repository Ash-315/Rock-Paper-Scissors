playerScore = 0; // variable to hold the player's score
computerScore = 0; // variable to hold the computer's score
const value = ["Rock", "Scissors", "Paper"]; // an array of answers to choose from

round_num = 0; // counter to check round number

//Event listeners for both player and computer
const rock_player_btn = document.querySelector('#rock');
const paper_player_btn = document.querySelector('#paper');
const scissors_player_btn = document.querySelector('#scissors');

const rock_comp_btn = document.querySelector('#rock-comp');
const paper_comp_btn = document.querySelector('#paper-comp');
const scissors_comp_btn = document.querySelector('#scissors-comp');

// this function is used to get a random answer from the "value[]" array
function computerPlay() {
    let randomvalue = value[Math.floor(Math.random() * value.length)]; 
    return randomvalue;
}

// rounds function decides whether player or computer wins a single round (depending on answers provided) and returns the result of the same
function rounds(playerSelection) {
    let computerSelection = computerPlay(); // function called to get random answer from "value[]" array
    let result = ""; // result which is returned and will contain the outcome of the round
    // this "if" statement says the player won 
    if( (playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock")) {
        playerScore++;
        result = "Congratulations! You won this round as " + playerSelection + " beats " + computerSelection;

        const player_score = document.querySelector('#player-score');
        player_score.textContent = "Player: " + playerScore;
    }
    // this statement says the player lost
    else if( (playerSelection == "Scissors" && computerSelection == "Rock") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Rock" && computerSelection == "Paper") ){
        computerScore++;
        result = "You lose! Because " + computerSelection + " beats " + playerSelection;

        const computer_score = document.querySelector('#computer-score');
        computer_score.textContent = "Computer: " + computerScore;
    }
    // the round ended in a tie
    else {
        result = "This round is a tie because " + playerSelection + " doesn't beat nor lose to itself.";
    }
    round_num++; // round number increases after each round completes
    return result;
}

// "game()" is where the user inputs their answer and the overall outcome of the game is decided
function game(selection) {
    let userValue = selection;

    const result_text = document.querySelector('#result-text');
    result_text.textContent = (rounds(userValue)); // prints round result

    // following statements print the end outcome of the overall game
    if(playerScore === 5) {
        result_text.textContent = "Congratulations, you won the game!";
        button_disable();
        
        const player_disable = document.querySelector('.buttons'); // removes cursor pointer 
        player_disable.classList.toggle('player-buttons-game-over');
    }
    else if(computerScore === 5) {
        result_text.textContent = "Aww, you lost :( " + "\n" + "Better luck next time.";
        button_disable();
    }
}

function button_disable() { // disables the buttons once the game is over
    const buttons = document.querySelectorAll('button'); 
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

// runs the game() function on click 
rock_player_btn.addEventListener('click', () => {
    game(value[0]);
});
paper_player_btn.addEventListener('click', () => {
    game(value[1]);
});
scissors_player_btn.addEventListener('click', () => {
    game(value[2]);
});