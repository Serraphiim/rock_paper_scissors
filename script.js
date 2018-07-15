let userScore = 0;
let aiScore = 0;
let span = document.getElementsByClassName("close")[0];
let modal = document.getElementById('myModal');
document.getElementById('userScore').innerHTML = userScore;
document.getElementById('aiScore').innerHTML = aiScore;
//the round function is using an arrow function () => I am not entirely sure what it does I should research

// use a modal box to pop-up when the player reaches 5 points then the button on the modal box will reset the scores to 0
function round() {
  rockButton.addEventListener('click', () => getRoundResult('rock'));
  paperButton.addEventListener('click', () => getRoundResult('paper'));
  scissorsButton.addEventListener('click', () => getRoundResult('scissors'));
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

getRoundResult();

function userLoseRound(userPick, aiPick) {
  if (aiScore <  4) {
    aiScore++;
  } else if (aiScore = 4) {
    aiScore++;
    openModal();
  } else {
    document.getElementById('end').innerHTML='ERROR';
  }
  document.getElementById('test').innerHTML = aiPick + ' beats ' + userPick+ ', you lose!';
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
    document.getElementById('end').innerHTML = 'ERROR';
  }
  document.getElementById('test').innerHTML = userPick + ' beats ' + aiPick+ ', you win!';
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('aiScore').innerHTML = aiScore;
}

function drawRound(userPick, aiPick) {
  document.getElementById('test').innerHTML = ' Both players chose ' + userPick+ ', it is a draw!';
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('aiScore').innerHTML = aiScore;
}

function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
