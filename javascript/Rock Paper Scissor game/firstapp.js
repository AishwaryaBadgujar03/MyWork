let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randmIdx=Math.floor(Math.random()*3);
    return options[randmIdx];
}

const drawGame=()=>{
    msg.innerText="Game was Draw.Play again !";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
   if(userWin){
      userScore++;
      userScorePara.innerText=userScore;
      msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green";
   }
   else{
     compScore++;
     compScorePara.innerText=compScore;
    msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
   }
}

const playGame=(userchoice)=> {
  
   const compChoice=genCompChoice();
   
   if(userchoice==compChoice)
   {
      drawGame();
   }
   else{
     let userWin=true;
     //scissor,paper
     if(userchoice==="rock")
     {
        userWin = compChoice==="paper"?false:true;
     }
     else if(userchoice==="paper")
     {
         //rock,scissor
         userWin = compChoice==="scissor"?false:true;
     }
     else{
        //rock,paper
        userWin = compChoice==="rock"?false:true;
     }
     showWinner(userWin,userchoice,compChoice);
   }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     const userchoice=choice.getAttribute("id");
    playGame(userchoice);
    })
})