let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#message");

const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");

const getComputerChoice=()=>{
    const options=["rock","paper","scissors"];
   const randomIndex= Math.floor(Math.random()*3);
   return options[randomIndex];
}

const drawGame=()=>{
    message.innerText="Game was draw";
    message.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin===true){
       userScore++;
       userScorePara.innerText=userScore;
        message.innerText=`You win! your choice ${userChoice} beats computer choice ${computerChoice}`;
        message.style.backgroundColor="green";
    }else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        message.innerText=`You lose! computer choice ${computerChoice} beats user choice ${userChoice}`;
        message.style.backgroundColor="red";
    }
}

const playGame = (userChoice) =>{
    //Generate computer choice
    const computerChoice=getComputerChoice();
    if(userChoice===computerChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=computerChoice==="scissors"?false:true;
    }else {
        userWin=computerChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,computerChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})