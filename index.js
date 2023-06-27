// Function to generate a random choice for the computer
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to play a round of Rock Paper Scissors
  function playRound(playerSelection, computerSelection) {
    // Convert player selection to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
  
    // Check for a tie
    if (playerSelection === computerSelection) {
      return 'It\'s a tie!';
    }
  
    // Check for player win conditions
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return 'You win!';
    }
  
    // Player has not won, so computer wins
    return 'You lose!';
  }
  
  // Function to handle the game logic
  function game(playerSelection) {
    // Get the computer's choice
    const computerSelection = computerPlay();
  
    // Play a round of Rock Paper Scissors
    const result = playRound(playerSelection, computerSelection);
  
    // Display the result on the page
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You chose ${playerSelection}. The computer chose ${computerSelection}. ${result}`;
  }
  
  // Event listeners for the player's choices
  const choices = document.querySelectorAll('.choice');
  choices.forEach((choice) => {
    choice.addEventListener('click', () => {
      game(choice.id);
    });
  });
  