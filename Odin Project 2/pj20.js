// pseudocode for rock-paper-scissors game
// 1. Define a function to get the computer's choice
    function getComputerChoice(){
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex]; // Randomly chooses between choices [0, 1, 2]
    }
// 2. Define a function to get the user's choice, assuming input is valid
    
        
function getUserChoice() {
    const userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors"){
        return userInput;
    } else {
        alert("Invalid choice, please try again.");
        return getUserChoice(); // Recursively call to get a valid choice
    }
}
// 3. keep track of the score
let userScore = 0;
let computerScore = 0;

// 4. Define a function to play a single round of the game
function playRound(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (userChoice === "rock" && computerChoice === "scissors" ||
        userChoice === "paper" && computerChoice === "rock" ||
        userChoice === "scissors" && computerChoice === "paper") {
        userScore++;
        console.log( `You win! ${userChoice} beats ${computerChoice}.`); 
    } else {
        computerScore++;
        console.log( `You lose! ${computerChoice} beats ${userChoice}.`);
    }   
}

// 5. Define a function to play the game for a set number of rounds and display the final score when button is clicked

function playGame() {
    for (let i = 0; i < 5; i++){
        const userSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        playRound(userSelection, computerSelection);
        console.log(`Computer Score: ${computerScore} & User Score: ${userScore}`);
    } if (userScore > computerScore) {
        console.log("congrats! You win the game!");
    } else if (userScore < computerScore) {
        console.log("sorry, you lost. maybe next time!");
    } else {
        console.log("It's a tie ! good game !");
    }
}
