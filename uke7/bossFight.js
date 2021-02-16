function attackChoice() {
  attackNumber = Math.floor(Math.random() * 3);
  //   console.log(attackNumber);
}

function playerIsAttacking() {
  attackChoice();
  computer.health = computer.health - player.attack[attackNumber];
  console.log(computer.health);
  view();
  //   setTimeout(computerIsAttacking, 2000);
  computerIsAttacking();
  computer.health < 1 ? theWinnerIs() : null;
}

function computerIsAttacking() {
  attackChoice();
  player.health = computer.health - computer.attack[attackNumber];
  view();
  player.health < 1 ? theWinnerIs() : null;
}

function theWinnerIs() {
  // console.log(player.health);

  if (player.health < 1) {
    winner = computer.name;
    winnerMessage = 'Computer Wins!';
    view();
  }
  if (computer.health < 1) {
    winner = player.name;
    winnerMessage = 'Player Wins!';
    view();
  }
  console.log(winner);
}
