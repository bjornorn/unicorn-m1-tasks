function attackChoice() {
  attackNumber = Math.floor(Math.random() * 4);
  // console.log('attack ' + attackNumber);
}

function playerIsAttacking() {
  playerClass = 'playerFiring';   //aktiver skyte animasjon
  allowAttack = 'no';            //deaktiver onclick for å angripe
  attackChoice();                 // lag et tilfeldig tall mellom 1 og 4
  view();                         //oppdater view
  console.log(playerClass)
  setTimeout(computerIsAttacking, 1200);   //vent x antall tusendels-sekunder og start neste funksjon
}
// computerIsAttacking();

function computerIsAttacking() {
  attackChoice();  
  playerClass = 'playerIdle';                       // lag et tilfeldig tall mellom 1 og 4         
  computerClass = 'computerFiring';
  computer.health = computer.health - player.attack[attackNumber];  //reduser computer sitt liv iht "treff"
  if (computer.health < 1) {                                        // sjekk om computer er død?
    theWinnerIs(); 
  }

  view();                                                           //oppdater view
  if ((computer.health > 0) && (player.health > 0)) {               // dersom begge lever
    setTimeout(fightersIsResting, 560);                               // start neste funksjon(med forsinkelse)
  }
}

function fightersIsResting() {
  
  computerClass = 'computerIdle'                                            // start idle animasjon
  allowAttack = 'yes';                                                   //aktiver onclick for å angripe
  player.health = player.health - computer.attack[attackNumber];    // sjekk om player er død?
  if (player.health < 1) {
    theWinnerIs();
  }
  view();                                                           //oppdater view
}

function theWinnerIs() {
  // console.log(player.health);

  if (player.health < 1) {
    winner = computer.name;    
    restartMessage = true;
    playerClass = 'computerVictory';
    computerClass = 'computerIdle';
    gameTitle = 'yes';
    allowAttack = 'no';  
  }
  
  if (computer.health < 1) {
    winner = player.name;
    restartMessage = true;
    playerClass = 'playerVictory';
    computerClass = 'computerIdle';
    gameTitle = 'yes';
    allowAttack = 'no';
    
  }
  // console.log(winner);
}

function startGame() {
  startMessage = false;
  playerClass = 'playerIdle';
  computerClass = 'computerIdle';
  
  restart();
}

function restart() {
  // winnerMessage = '';
  // restartMessage = '';
  playerClass = 'playerIdle';
  player.health = player.startHealth;
  computer.health = computer.startHealth;
  allowAttack = 'yes';
  gameTitle = 'yes';
  winner = null;
  

  view();
}

function gameTheme() {
  gameThemeAudio.play(); 
  
  
}