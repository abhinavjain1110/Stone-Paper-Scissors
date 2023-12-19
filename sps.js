let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genComputerChoice = () =>
{
    //stone,paper, scissors
    const options = ["stone","paper","scissors"];
    const randIndex=Math.floor(Math.random()*3);      //Generate random number
    return options[randIndex];
};

const drawGame = () =>
{
    console.log("game was draw.");
    msg.innerText="Game was Draw. Play Again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin,userChoice,compChoice) =>
{
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        console.log("you loose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText= `You Loose, Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) =>
{
    console.log("user choice = ",userChoice);
    //Generate computer choice;
    const compChoice = genComputerChoice();
    console.log("Computer Choice = ",compChoice);

    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else
    {
        let userWin = true;
        if(userChoice === "stone")
        {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            //scissors,rock
            userWin = compChoice === "scissors" ? false : true;
        }
        else 
        {
            //paper,rock
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice,"choice was clicked");
        playGame(userChoice);
    });
});