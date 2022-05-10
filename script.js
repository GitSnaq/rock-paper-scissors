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
// console.log(game())
const results = document.querySelector(".display-result");

const rock = document.querySelector(".rock");
rock.addEventListener("click", ()=>{
    results.textContent = roundOfGameplay("rock", computerPlay())})

const paper = document.querySelector(".paper");
paper.addEventListener("click", ()=>{
    results.textContent = roundOfGameplay("paper", computerPlay())})

const scissor = document.querySelector(".scissor");
scissor.addEventListener("click", ()=>{
    results.textContent = roundOfGameplay("scissor", computerPlay())})



























// function game(){
//     playerCount = 0;
//     computerCount = 0;
//     i = 0;
//     while (i<10){
//         let input = prompt("Enter rock, paper, scissor")
//         pcChoice = computerPlay();
//         result = roundOfGameplay(input, pcChoice)
//         console.log(result)
//         i++
//         if (result==="player wins"){
//             playerCount++
//         }
//         else if(result==="computer wins"){
//             computerCount++
//         }
//     }
//     finalResult = [playerCount, computerCount]
//     if (playerCount>computerCount){
//         playerCount = Number(playerCount)
//         computerCount = Number(computerCount)
//         return `final score was:(${finalResult}) where the Player won ${playerCount-computerCount} more games`
//     }
//     else if(playerCount<computerCount){
//         playerCount = Number(playerCount)
//         computerCount = Number(computerCount)
//         return `final score was:(${finalResult}) where the Computer won ${computerCount-playerCount} more games`
//     }
//     else{
//         return "It was a draw"
//     }
// }

















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