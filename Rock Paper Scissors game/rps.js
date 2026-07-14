let userCount = 0;
let compCount = 0;

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#userScore")
let compScore = document.querySelector("#compScore")


let comChoice = () =>{
  let options = ['rock', 'paper', 'scissor'];
  let randNum = Math.floor(Math.random() * 3); // 0 or 1 or 2
 
  return options[randNum]; // rock or paper or scissor
}  

const drawGame = () => {
    console.log('draw');
    msg.style.backgroundColor = "white";
    msg.style.color = "black";
    msg.innerHTML = "It's a draw";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        // console.log(`userWin is ${userWin}`)
        // console.log("You won!");
        userCount++;
        userScore.innerHTML = userCount;
        msg.style.backgroundColor = "green";
        // console.log(userCount)
        msg.innerHTML =`You won as ${userChoice} defeats ${compChoice}`
    } else{
        // console.log('You lose');
        compCount++;
        compScore.innerHTML = compCount;
        // console.log(compCount)
        msg.style.backgroundColor = "red";
        msg.innerHTML = `You lose as ${compChoice} defeats ${userChoice}`
}
}

const playGame = (userChoice) => {
    let compChoice = comChoice();
    // console.log("Your choice :", userChoice);
    // console.log("Computer choice :",compChoice);
   if(userChoice === compChoice){
       drawGame();
   }
   else {
       let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;
            // console.log(userWin);
        }
        else if(userChoice === 'paper'){
            userWin = compChoice === 'scissor' ? false : true;
            // console.log(userWin);
        }else{
            userWin = compChoice === 'rock' ? false : true;
            // console.log(userWin);
        }
    showWinner(userWin,userChoice,compChoice);
    }
    
}



choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    })
});
                