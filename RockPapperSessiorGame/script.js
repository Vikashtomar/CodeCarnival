const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "scissors" || userInput === "paper" || userInput === "bomb") {
        return userInput;
    } else {
        console.log("Error: Please type only 'rock', 'scissors', 'paper', or 'bomb'");
    }
}

// Function to get the computer's choice
const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 4); // Change to 4 to include bomb option
    switch (randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        case 3:
            return 'bomb'; 
    }
};


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'You won! Bomb always wins!';
    }

    if (userChoice === computerChoice) {
        return 'This game is a tie';
    }


    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Sorry, Computer won! Paper beats rock.";
        } else if (computerChoice === 'scissors') {
            return "Congratulations, you won! Rock beats scissors.";
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return "Congratulations, you won! Paper beats rock.";
        } else if (computerChoice === 'scissors') {
            return "Sorry, Computer won! Scissors beats paper.";
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "Sorry, Computer won! Rock beats scissors.";
        } else if (computerChoice === 'paper') {
            return "Congratulations, you won! Scissors beats paper.";
        }
    } 
};

// Main game function
const playGame = () => {
    const userChoice = getUserChoice('paper');  
    if (!userChoice) return; 

    const computerChoice = getComputerChoice();

    console.log('You threw: ' + userChoice);
    console.log('The Computer threw: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
