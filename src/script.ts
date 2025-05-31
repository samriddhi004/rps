let playerScore: number = 0;
let computerScore: number = 0;
let roundsPlayed : number =0;
let maxRounds : number = 5;
const roundElement = document.getElementById("round") as HTMLElement;
const playerScoreElement  = document.getElementById("playerScore") as HTMLElement;
const compScoreElement = document.getElementById("computerScore") as HTMLElement;
const resultElement = document.getElementById("result") as HTMLElement;
const resetElement = document.getElementById("reset") as HTMLElement;

type Choice = "Rock" | "Paper" | "Scissors"
const choices : Choice[] = ["Rock","Paper","Scissors"] //for length 

function getCompChoice():Choice{
    return choices[Math.floor(Math.random()*choices.length)];
}

function checkWinner(player:Choice,computer:Choice): string{
    if(player===computer) return "IT'S A TIE!";
    if(player==="Rock" && computer==="Scissors" ||
        player==="Scissors" && computer==="Paper" ||
        player ==="Paper" && computer==="Rock"
    ){
        playerScore++;
        playerScoreElement.textContent = playerScore.toString();
        return "You win!";
    }else{
        computerScore++;
        compScoreElement.textContent = computerScore.toString();
        return "You lose!";
    }
}

const playGame = (playerChoice:Choice)=>{
    if(roundsPlayed>=maxRounds){
        resultElement.textContent="Game Over! Click reset to play again."
        return;
    }
    const computerChoice = getCompChoice();
    const result = checkWinner(playerChoice,computerChoice);
    resultElement.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}.${result}`;
    roundsPlayed++;
    roundElement.textContent = roundsPlayed.toString();
    if(roundsPlayed >=maxRounds){
        const finalmessage = playerScore > computerScore ? "VICTORY! YOU'VE WON THE GAME!" : computerScore>playerScore ? "DEFEAT! YOU'VE LOST THE GAME!" : "It's a tie!";
        resultElement.textContent = `${finalmessage} Game resetting...`;

        setTimeout(resetGame,3000);
    }

}
document.getElementById("rock")?.addEventListener("click",()=>playGame("Rock"));
document.getElementById("paper")?.addEventListener("click",()=>playGame("Paper"));
document.getElementById("scissors")?.addEventListener("click",()=>playGame("Scissors"));

const resetGame=()=>{
    playerScore=0;
    computerScore=0;
    roundsPlayed=0;
    playerScoreElement.textContent="0";
    compScoreElement.textContent="0";
    resultElement.textContent="";
    roundElement.textContent="0";
}
document.getElementById("reset")?.addEventListener("click",resetGame);