//Computer calculates its choice
function computerChoice() {
    computerChoiceArray = ["rock", "paper", "scissor"]
    return computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)]
}
//main function of the game
function game() {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const restartBtn = document.querySelector(".restart-btn");
    const playerScore = document.querySelector(".player-counter")
    const computerScore = document.querySelector(".computer-counter")
    const drawScore = document.querySelector(".draw-counter")
    const result = document.querySelector(".result")
    const movesLeft = document.querySelector(".moves")
    
    playerScoreCounter = 0;
    computerScoreCounter = 0;
    drawScoreCounter = 0;
    moves = 10;
    playerChoiceArray = [rockBtn, paperBtn, scissorBtn]
    playerChoiceArray.forEach(option => {
        option.addEventListener("click", (e) => {
            //use className instead of textContent because i use images and no text
            //in the buttons.
            gameResult(e.target.className, computerChoice())
        })
    })
    restartBtn.addEventListener('click', () => {
        window.location.reload();
    })

    function gameResult(playerInput, computerInput) {
        if (playerInput === "rock" && computerInput === "scissor") {
            result.textContent = "Player Wins"
            playerScore.textContent = ++playerScoreCounter
            movesLeft.textContent = `Moves left: ${moves-1}`

        } else if (playerInput === "paper" && computerInput === "rock") {
            result.textContent = "Player Wins"
            playerScore.textContent = ++playerScoreCounter
            movesLeft.textContent = `Moves left: ${moves-1}`

        } else if (playerInput === "scissor" && computerInput === "paper") {
            result.textContent = "Player Wins"
            playerScore.textContent = ++playerScoreCounter
            movesLeft.textContent = `Moves left: ${moves-1}`

        } else if (playerInput === "rock" && computerInput === "paper") {
            result.textContent = "Computer Wins"
            computerScore.textContent = ++computerScoreCounter
            movesLeft.textContent = `Moves left: ${moves-1}`

        } else if (playerInput === "paper" && computerInput === "scissor") {
            result.textContent = "Computer Wins"
            computerScore.textContent = ++computerScoreCounter
            movesLeft.textContent = `Moves left: ${moves-1}`

        } else if (playerInput === "scissor" && computerInput === "rock") {
            result.textContent = "Computer Wins"
            computerScore.textContent = ++computerScoreCounter
            movesLeft.textContent = `Moves left: ${moves-1}`

        } else {
            result.textContent = "It was a draw";
            drawScore.textContent = ++drawScoreCounter
            movesLeft.textContent = `Moves left: ${moves-1}`
        }

        moves--
        if (moves === 0) {
            finalResult(playerScoreCounter, computerScoreCounter, drawScoreCounter)
            gameOver()
        }
    }
}

function finalResult(playerResult, computerResult, drawResult) {
    const result = document.querySelector(".result")
    if (playerResult > computerResult) {
        result.textContent = `Game Over. Player won ${playerResult-computerResult} more games than the computer
        with ${drawResult} draws`
        result.style.color = "green"
    } else if (computerResult > playerResult) {
        result.textContent = `Game over. Computer won ${computerResult-playerResult} more games than the player
        with ${drawResult} draws`
        result.style.color = "red"
    } else {
        result.textContent = `Game Over. It was a total draw where the player won ${playerResult-computerResult} more than the computer`
        result.style.color = "white"
    }
}

function gameOver() {
    //i realize theres more stuff here than needed and ill come back and remove when needed
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const restartBtn = document.querySelector(".restart-btn");
    const playerScore = document.querySelector(".player-counter")
    const computerScore = document.querySelector(".computer-counter")
    const drawScore = document.querySelector(".draw-counter")
    const result = document.querySelector(".result")
    const movesLeft = document.querySelector(".moves")
    const shutDownBtn = document.querySelector(".shut-down-btn")

    playerChoiceArray = [rockBtn, paperBtn, scissorBtn]
    playerChoiceArray.forEach(option => {
        option.style.display = "none"
    })

    restartBtn.style.display = "inline-block"
    shutDownBtn.style.display = "inline-block"

    shutDownBtn.addEventListener("click", () => {
        window.close()
    })

}
game()