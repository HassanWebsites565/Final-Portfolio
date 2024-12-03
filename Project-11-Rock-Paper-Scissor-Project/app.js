let UserScore = 0; // To Track User Score
let CompScore = 0; // To Track Comp Score

let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice")

let UserScorePara = document.querySelector("#user-score")
let CompScorePara = document.querySelector("#comp-score")

const DrawGame = () => {
    console.log("Game was Draw ")
    msg.innerText = "Game was Draw. Play Again "
    msg.style.backgroundColor = "orange";
};

const showWinner = (UserWin, UserChoice, CompChoice) => {
    if(UserWin === true){
        UserScore ++;
        UserScorePara.innerText = UserScore;
        msg.innerText = `Congratulation You Win ! Your  ${UserChoice}  beats  ${CompChoice}`
        msg.style.backgroundColor = "green";
    } else{
        CompScore ++;
        CompScorePara.innerText = CompScore;
        msg.innerText = `Oops You Loose ! ${CompChoice}  beats  ${UserChoice} `
        msg.style.backgroundColor = "red";
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const playGame = (UserChoice) => {
    console.log("User Choice = ", UserChoice);
    // Generate Computer Choice 
    const CompChoice = genCompChoice();
    console.log("Computer Choice = ", CompChoice);

    if(UserChoice === CompChoice){
        // Game was Draw
        DrawGame();
    } else {

        let UserWin = true;

        if(UserChoice === "rock"){
            // Comp Choice is Paper or Scissor 
            UserWin = CompChoice === "paper" ? false : true;
        } else if(UserChoice == "paper"){
            // Comp Choice is Scissor or Rock 
            UserWin = CompChoice === "rock" ? true : false;
        } else {
            // Comp Choice is Paper or Rock 
            UserWin = CompChoice === "rock" ? false : true;
        }
        showWinner(UserWin, UserChoice, CompChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const UserChoice = choice.getAttribute("id");
        playGame(UserChoice);
    });
});






