let rounds = 0;
let currentRound = 0;
let computerWins = 0;
let yourWins = 0;
const availableChoices = ["rock", "paper", "scissors"];

function restartGame() {
  rounds = 0;
  currentRound = 0;
  computerWins = 0;
  yourWins = 0;

  roundsPrompt = parseInt(
    prompt(
      "How many rounds would you like to play? \nThe maximum number of rounds you can play is 10",
      3
    )
  );

  if (isNaN(roundsPrompt)) {
    alert("Please enter a valid input");
  } else if (roundsPrompt > 10) {
    alert(
      "You cannot play more than 10 rounds. Please enter a valid number of rounds."
    );
  } 
  else if(roundsPrompt <= 0){
    alert(
      "You cannot enter a number less than 1. Please enter a valid number of rounds."
    );
  }
  else {
    rounds = roundsPrompt;
    currentRound = 1;
    roundStarted();
    setNavBar(currentRound);
    document.getElementById("welcome").remove();
  }
}

function setNavBar(roundNum) {
  if (rounds > 0) {
    document.getElementById(
      "navbar"
    ).innerHTML = `<div><span class='float-left'>ROUND ${roundNum} of ${rounds}</span><span class='float-right'><button class="btnPurple" onclick="restartGame()">Restart</button></span></div><br /><br /><div id="scoreboard"><span style="margin-right: 50px"><img src="images/computer_icon.png"/> Computer</span> ${computerWins} - ${yourWins} <span style="margin-left: 50px">You <img src="images/person_icon.png" /></span></div>`;
  }
}

function selectedRoundChoice(selectedChoice) {
  let yourChoice = selectedChoice;
  let computerChoice = getComputerRoundChoice();
  let roundWinner = "";

  /*
    Rock beats Scissors
    Scissors beats Paper
    Paper beats Rock
  */

  if (yourChoice === computerChoice) {
    roundWinner = "Tie";
  } else if (
    (yourChoice === "rock" && computerChoice === "scissors") ||
    (yourChoice === "scissors" && computerChoice === "paper") ||
    (yourChoice === "paper" && computerChoice === "rock")
  ) {
    roundWinner = "You";
    yourWins++;
  } else if (
    (computerChoice === "rock" && yourChoice === "scissors") ||
    (computerChoice === "scissors" && yourChoice === "paper") ||
    (computerChoice === "paper" && yourChoice === "rock")
  ) {
    roundWinner = "Computer";
    computerWins++;
  }else{
    
  }

  displayRoundResults(yourChoice, computerChoice, roundWinner);
}

function getComputerRoundChoice() {
  return availableChoices[Math.floor(Math.random() * Math.floor(3))];
}

function roundStarted(){
  document.body.style.backgroundColor = "#4b0082";
  let setupGame = `<header id="navbar"></header>
              <section id="content">
                <a href="#" onclick="selectedRoundChoice('rock')">
                    <img src="images/rock.png"/>
                </a>
                <a href="#" onclick="selectedRoundChoice('paper')">
                    <img src="images/paper.png" />
                </a>
                <a href="#" onclick="selectedRoundChoice('scissors')">
                    <img src="images/scissors.png" />
                </a>
                <h3>Select Rock, Paper, or Scissors</h3>
            </section>`;
   document.getElementById(
      "game"
    ).innerHTML = setupGame;
}

function displayRoundResults(yourChoice, computerChoice, roundWinner) {
  if(roundWinner == "Tie"){
     document.getElementById(
      "game"
    ).innerHTML = `<header id="navbar"></header>
              <section id="content">
                <h2>You both chose ${yourChoice.toUpperCase()}.</h2>
                <br/><br/>
                <h2>It's a tie! Replay Round ${currentRound} by selecting either rock, paper, or scissors.</h2>
                <a href="#" onclick="selectedRoundChoice('rock')">
                    <img src="images/rock.png"/>
                </a>
                <a href="#" onclick="selectedRoundChoice('paper')">
                    <img src="images/paper.png" />
                </a>
                <a href="#" onclick="selectedRoundChoice('scissors')">
                    <img src="images/scissors.png" />
                </a>
            </section>`;
        document.body.style.backgroundColor = "blue";
  }
  else{
    let reasonForWin = "";

    if(roundWinner == "You"){
      reasonForWin = `You chose ${yourChoice}, Computer chose ${computerChoice}. ${yourChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`
    }

    if(roundWinner == "Computer"){
       reasonForWin = `Computer chose ${computerChoice}, You chose ${yourChoice}. ${computerChoice.toUpperCase()} beats ${yourChoice.toUpperCase()}.`
    }
  
    document.getElementById(
      "game"
    ).innerHTML = `
              <section id="content">
                <h2 id="scoreboard">The Winner of Round ${currentRound} is ${roundWinner}!</h2>
                <h4>${reasonForWin}</h4>
                <span><img src="images/computer_icon.png"/><img src="images/${computerChoice} flip.png"/></span>
                <span><img src="images/${yourChoice}.png"/><img src="images/person_icon.png"/></span>
                <br/><br/><br/>
                <button class="btnGray" onclick="nextRound()">Next Round</button>
        </section>`;
    if(roundWinner == "You"){
      document.body.style.backgroundColor = "green";
    }

    if(roundWinner == "Computer"){
      document.body.style.backgroundColor = "red";
    }
  }
}

function nextRound(){
  if(currentRound < rounds){
      currentRound++;
      roundStarted();
      setNavBar(currentRound);
    }
    else{
      gameCompleted();
    }
}

function gameCompleted(){
  let displayFinalWinner = "";
  if(yourWins > computerWins){
    displayFinalWinner = `
              <section id="content">
                <div id="scoreboard">
                <h1>YOU WIN!!!</h1>
                <h2><img src="images/person_icon.png"/> ${yourWins} - ${computerWins} <img src="images/computer_icon.png"/></h2>
                </div>
                <br/><br/><br/>
                <button class="btnGray" onclick="restartGame()">Play Again</button>
        </section>`;
    document.body.style.backgroundColor = "green";
  }
  else if(computerWins > yourWins){
     displayFinalWinner = `
              <section id="content">
                <div id="scoreboard">
                <h1>YOU LOST!!!</h1>
                <h2><img src="images/person_icon.png"/> ${yourWins} - ${computerWins} <img src="images/computer_icon.png"/></h2>
                </div>
                <br/><br/><br/>
                <button class="btnGray" onclick="restartGame()">Play Again</button>
        </section>`;
    document.body.style.backgroundColor = "red";
  }
  else{
     displayFinalWinner = `
              <section id="content">
                <div id="scoreboard">
                <h1>IT's A TIE!!!</h1>
                <h2><img src="images/person_icon.png"/> ${yourWins} - ${computerWins} <img src="images/computer_icon.png"/></h2>
                </div>
                <br/><br/><br/>
                <button class="btnGray" onclick="restartGame()">Play Again</button>
        </section>`;
    document.body.style.backgroundColor = "blue";
  }

  document.getElementById(
      "game"
    ).innerHTML = displayFinalWinner;
}