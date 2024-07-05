// Function to return a random string from rock,paper,scissor
function getComputerChoice(arr) {
    
    let randomIndex = Math.floor(Math.random() * arr.length);
    
    return arr[randomIndex];
  }
  
  let strings = ["Rock", "Paper", "Scissors"];
  let randomString = getComputerChoice(strings);
  //console.log(randomString);

// function that takes the user choice and returns it.
function getHumanChoice() {
    // Prompt the user to enter their guess
    let guess = prompt("Enter your guess (rock, paper, or scissors): ").toLowerCase();
  
    // Validate the input
    if (guess === "rock" || guess === "paper" || guess === "scissors") {
      console.log("You chose:", guess);
    } else {
      console.log("Please enter a valid input! (rock, paper, or scissors)");
    }
  }
  
  getHumanChoice();
  
let humanScore = 0;
let computerScore=0;

//function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement
function playRound(humanChoice, computerChoice) {
    // your code here!
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  