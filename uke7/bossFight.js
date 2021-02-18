function attackChoice() {
  attackNumber = Math.floor(Math.random() * 4);
  console.log('attack ' + attackNumber);
}

function playerIsAttacking() {
  playerClass = 'playerFiring';
  winner = 'unknown';
  attackChoice();
  view();
  setTimeout(computerIsAttacking, 600);
}
// computerIsAttacking();

function computerIsAttacking() {
  computer.health = computer.health - player.attack[attackNumber];
  if (computer.health < 1) {
    theWinnerIs();
  }
  attackChoice();
  player.health = player.health - computer.attack[attackNumber];
  if (player.health < 1) {
    theWinnerIs();
  }
  view();
  fightersIsResting();
}

function fightersIsResting() {
  playerClass = 'playerIdle';
  winner = null;
  view();
}

function theWinnerIs() {
  // console.log(player.health);

  if (player.health < 1) {
    winner = computer.name;
    winnerMessage = 'Computer Wins!';
    restartMessage = true;
  }
  if (computer.health < 1) {
    winner = player.name;
    winnerMessage = 'Player Wins!';
    restartMessage = true;
  }
  // console.log(winner);
}

function startGame() {
  startMessage = false;
  let winner = null;
  playerClass = 'idle';
  restart();
}

function restart() {
  winnerMessage = '';
  restartMessage = '';
  player.health = player.startHealth;
  computer.health = computer.startHealth;
  winner = null;
  view();
}
