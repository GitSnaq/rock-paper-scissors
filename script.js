function computerPlay(){
    let choiceArray = ["rock", "paper", "scissor"];
    let choice = choiceArray[Math.floor(Math.random()*choiceArray.length)]
    return choice
}

function singleRoundOfPlay(playerSelect, computerSelect=computerPlay()){
    playerSelect = playerSelect.toLowerCase();
    let i = 0
    switch (playerSelect){
        case "rock":
            if(computerSelect === "paper"){
                return("Computer wins")
            }
            else {
                return("Player wins")
            }
        case "paper":
            if(computerSelect === "scissor"){
                return("Computer wins")
            }
            else{
                return("Player wins");
            }
        case "scissor":
            if(computerSelect === "rock"){
                return("Computer wins")
            }
            else{
                return("Player wins");
            }
        default:
            return("You fudged up")
    }
}

console.log(singleRoundOfPlay("ROCK"))