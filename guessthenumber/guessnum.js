 const randomNumber = parseInt(Math.random() *100 + 1)

 const submit = document.querySelector("#subt");
 const userInput = document.querySelector("#guessField");
 const guessSlot = document.querySelector(".guesses")
 const remaining = document.querySelector(".lastResult")
 const lowOrHi = document.querySelector(".lowOrhi")
 const startOver = document.querySelector(".resultParas");


 const p = document.createElement("p")

 let prevGuess = []
 let numGuess = 1;

 let playGame = true;

 if(playGame){
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    });
 }


 function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }

    else if (guess < 1){
        alert("Plaese enter above 1")
    }
    else if(guess > 100){
        alert("Please enter below 100")
    }
    else {
        prevGuess.push(guess)
        if(numGuess === 11)
        {
         displayGuess(guess)   
         displayMessage(`Game over Random number was ${randomNumber}`)
         endGame()

        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
 }


function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("You guessed it correct!")
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Too Low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is Too High`)
    }
    
    if(numGuess >= 10){
        displayMessage(`Game over number was ${randomNumber}`)
    }
}


// clean up guess function

 function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess}   `
    numGuess++;
    remaining.innerHTML  =`${11 - numGuess}`
 }
 
 function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message} </h2>`
 }

 function endGame(){
    //
 }

