function computerPlay(){
    let choiceArray = ["rock", "paper", "scissor"];
    let choice = choiceArray[Math.floor(Math.random()*choiceArray.length)]
    return choice
}
function roundOfGameplay(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection==="rock" && computerSelection ==="paper"){
        return "computer wins"
    }
    else if(playerSelection==="paper" && computerSelection ==="scissor"){
        return "computer wins"
    }
    else if(playerSelection==="scissor" && computerSelection ==="rock"){
        return "computer wins"
    }
    else if(playerSelection==="paper" && !(computerSelection ==="scissor")){
        return "player wins"
    }
    else if(playerSelection==="scissor" && !(computerSelection ==="rock")){
        return "player wins"
    }
    else if(playerSelection==="rock" && !(computerSelection ==="paper")){
        return "player wins"
    }
    else if (playerSelection===computerSelection){
        return "was a draw"
    }
}
// console.log(roundOfGameplay("Rock", computerPlay()))
console.log(game())

function game(){
    playerCount = 0;
    computerCount = 0;
    i = 0;
    while (i<10){
        let input = prompt("Enter rock, paper, scissor")
        pcChoice = computerPlay();
        result = roundOfGameplay(input, pcChoice)
        console.log(result)
        i++
        if (result==="player wins"){
            playerCount++
        }
        else if(result==="computer wins"){
            computerCount++
        }
    }
    finalResult = [playerCount, computerCount]
    if (playerCount>computerCount){
        playerCount = Number(playerCount)
        computerCount = Number(computerCount)
        return `final score was:(${finalResult}) where the Player won ${playerCount-computerCount} more games`
    }
    else if(playerCount<computerCount){
        playerCount = Number(playerCount)
        computerCount = Number(computerCount)
        return `final score was:(${finalResult}) where the Computer won ${computerCount-playerCount} more games`
    }
    else{
        return "It was a draw"
    }
}

//currently the code only asks user once for input and then uses that all rounds
//need to make the program wait for input for all rounds
//and maybe let user select number of rounds to be played

















// function singleRoundOfPlay(playerSelect, computerSelect=computerPlay()){
//     playerSelect = playerSelect.toLowerCase();
//     let i = 0
//     switch (playerSelect){
//         case "rock":
//             if(computerSelect === "paper"){
//                 return("Computer wins")
//             }
//             else {
//                 return("Player wins")
//             }
//         case "paper":
//             if(computerSelect === "scissor"){
//                 return("Computer wins")
//             }
//             else{
//                 return("Player wins");
//             }
//         case "scissor":
//             if(computerSelect === "rock"){
//                 return("Computer wins")
//             }
//             else{
//                 return("Player wins");
//             }
//         default:
//             return("You fudged up")
//     }
// }

// console.log(game("rock"));

// function game(input){
//     for (i=0;i<3;i++){
//     a = singleRoundOfPlay(input);
//     playerWin = 0;
//     computerWin = 0;
//     if(a === "Computer wins"){
//         computerWin++
//     }
//     else if(a === "Player wins"){
//         playerWin++
//     }
// }
// if (playerWin>computerWin){
//     return "player won"
// }
// else if (playerWin<computerWin){
//     return "computer won"
// }
// else{
//     return "draw"
// }
// }