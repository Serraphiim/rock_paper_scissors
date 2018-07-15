let userScore = 0;
let aiScore = 0;
let span = document.getElementsByClassName("close")[0];
let modal = document.getElementById('myModal');
let result = 'Select a button to begin.';
document.getElementById('userScore').innerHTML = userScore;
document.getElementById('aiScore').innerHTML = aiScore;
document.getElementById('result').innerHTML = result;
//the round function is using an arrow function () => I am not entirely sure what it does I should research

// use a modal box to pop-up when the player reaches 5 points then the button on the modal box will reset the scores to 0
// add an event to reset the score when the span button is selected
function round() {
  rockButton.addEventListener('click', () => getRoundResult('rock'));
  paperButton.addEventListener('click', () => getRoundResult('paper'));
  scissorsButton.addEventListener('click', () => getRoundResult('scissors'));
  document.getElementById('close').addEventListener('click', () => resetClose(aiScore, userScore));
}

round();

function getAiPick() {
  let aiPick= Math.floor(Math.random() * 3) + 1;
    switch (aiPick) {
      case 1:
        return 'rock';
        break;
      case 2:
        return 'paper';
        break;
      case 3:
        return 'scissors';
        break;
    }

}

function getRoundResult(userPick) {
  let aiPick = getAiPick();
    switch (userPick + aiPick) {
      case 'rockpaper':
      case 'paperscissors':
      case 'scissorsrock':
        userLoseRound(userPick, aiPick);
        break;
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        userWinRound(userPick, aiPick);
        break;
      case 'rockrock':
      case 'paperpaper':
      case 'scissorsscissors':
        drawRound(userPick, aiPick);
        break;
    }
}

function userLoseRound(userPick, aiPick) {
  if (aiScore <  4) {
    aiScore++;
  } else if (aiScore = 4) {
    aiScore++;
    openModal();
  } else {
    aiScore = 'ERROR';
  }
  result = aiPick + ' beats ' + userPick+ ', you lose!';
  document.getElementById('result').innerHTML = result;
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('aiScore').innerHTML = aiScore;
}


function userWinRound(userPick, aiPick) {
  if (userScore < 4) {
    userScore++;
  } else if (userScore = 4) {
    userScore++;
    openModal();
  } else {
    userScore = 'ERROR';
  }
  result = userPick + ' beats ' + aiPick+ ', you win!';
  document.getElementById('result').innerHTML  = result;
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('aiScore').innerHTML = aiScore;
}

function drawRound(userPick, aiPick) {
  result = ' Both players chose ' + userPick+ ', it is a draw!';
  document.getElementById('result').innerHTML = result;
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('aiScore').innerHTML = aiScore;
}

function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

function resetClose() {
  aiScore = 0;
  userScore = 0;
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('aiScore').innerHTML = aiScore;
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      aiScore = 0;
      userScore = 0;
      document.getElementById('userScore').innerHTML = userScore;
      document.getElementById('aiScore').innerHTML = aiScore;
      modal.style.display = "none";
  }
}
