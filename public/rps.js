let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");

const compChoice= () => {
    let choices=["rock", "paper", "scissors"];
    let random= Math.floor(Math.random()*3);
    return choices[random];
}

let msg = document.querySelector(".msg");
const showWinner = (win) => {
    if(win){
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green"
    }else{
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    let computer = compChoice();

    console.log("comp choice = ", computer);

    let win = true;

        if(computer === userChoice){
            return draw();
        }else if(userChoice=="paper"){
            win = computer === "rock" ? true : false;
        }else if(userChoice === "rock"){
            win = computer === "scissors"? true : false;
        }else{
            win = computer === "paper" ? true : false;
        }

        showWinner(win);
        scoreBoard(win);
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        
        const userChoice = choice.getAttribute("id");
        console.log("choice was selected", userChoice);
        playGame(userChoice);

    });
});

let draw = () => {
    msg.innerText = "Draw! Try again";
    msg.style.backgroundColor = "grey";
}

let compScore = document.querySelector("#comp-score");
let userScore = document.querySelector("#your-score");
let scoreBoard = (win) => {
    if(win){
        user++;
        userScore.innerText = user;
        
    }else{
        comp++;
        compScore.innerText = comp;
    }
}

