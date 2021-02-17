function attackChoice() {
  attackNumber = Math.floor(Math.random() * 4);
    console.log('attack ' + attackNumber);

}

function playerIsAttacking() {
  attackChoice();
  computer.health = computer.health - player.attack[attackNumber];  
  if (computer.health < 1) {theWinnerIs()}
  view();
  //   setTimeout(computerIsAttacking, 2000);
  computerIsAttacking();
}

function computerIsAttacking() {
  attackChoice();
  player.health = player.health - computer.attack[attackNumber];
  if (player.health < 1) {theWinnerIs()}
  view();
}

function theWinnerIs() {
  // console.log(player.health);

  if (player.health < 1) {
    winner = computer.name;
    winnerMessage = 'Computer Wins!';
    restartMessage = 'Restart'; 
  
  }
  if (computer.health < 1) {
    winner = player.name;
    winnerMessage = 'Player Wins!';

  }
  // console.log(winner);
}

function restart() {
  winnerMessage = '';
  restartMessage = '';
  player.health = player.startHealth;
  computer.health = computer.startHealth;
  winner = null;
  view();
}
