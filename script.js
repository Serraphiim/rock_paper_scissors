
//the round function is using an arrow function () => I am not entirely sure what it does I should research

function round() {
  rockButton.addEventListener('click', () => getRoundResult('rock'));
  paperButton.addEventListener('click', () => getRoundResult('paper'));
  scissorsButton.addEventListener('click', () => getRoundResult('scissors'));
}

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
        return document.getElementById('test').innerHTML = aiPick + ' beats ' + userPick + ', you lose!';
        break;
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        return document.getElementById('test').innerHTML = userPick + ' beats ' + aiPick + ', you win!';
        break;
      case 'rockrock':
      case 'paperpaper':
      case 'scissorsscissors':
        return document.getElementById('test').innerHTML = 'It is a draw!';
        break;
    }
}

round();
