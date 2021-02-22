function attackChoice() {
  attackNumber = Math.floor(Math.random() * 4);
}

function playerIsAttacking() {
  playerClass = 'playerFiring'; //aktiver skyte animasjon
  allowAttack = 'no'; //deaktiver onclick for å angripe
  attackChoice(); // lag et tilfeldig tall mellom 1 og 4
  computerSpeech = '';
  playerAttackSound.play();
  view(); //oppdater view
  setTimeout(computerIsAttacking, 1200); //vent x antall tusendels-sekunder og start neste funksjon
}
//computerIsAttacking();

function computerIsAttacking() {
  attackChoice();
  playerClass = 'playerIdle'; //lag et tilfeldig tall mellom 1 og 4
  computerClass = 'computerFiring';
  computerAttackSound.play();
  computer.health = computer.health - player.attack[attackNumber]; //reduser computer sitt liv iht "treff"
  if (computer.health < 1) {
    theWinnerIs();
  }

  view(); //oppdater view
  if (computer.health > 0 && player.health > 0) {
    //dersom begge lever
    setTimeout(fightersIsResting, 560); //start neste funksjon(med forsinkelse)
  }
}

function fightersIsResting() {
  computerClass = 'computerIdle'; //start idle animasjon
  allowAttack = 'yes'; //aktiver onclick for å angripe
  player.health = player.health - computer.attack[attackNumber]; //sjekk om player er død?
  if (player.health < 1) {
    theWinnerIs();
  }
  view();
}

function theWinnerIs() {
  if (player.health < 1) {
    winner = computer.name;
    restartMessage = true;
    playerClass = 'computerVictory';
    computerClass = 'computerIdle';
    gameTitle = 'yes';
    allowAttack = 'no';
    computerSpeech = '';
    playerSpeech = '';
    gameThemeAudio.pause();
    audioComputerVictory.play();
  }

  if (computer.health < 1) {
    winner = player.name;
    restartMessage = true;
    playerClass = 'playerVictory';
    computerClass = 'computerIdle';
    gameTitle = 'yes';
    allowAttack = 'no';
    computerSpeech = '';
    playerSpeech = '';
    gameThemeAudio.pause();
    audioPlayerVictory2.play();
  }
  view();
}

function startGame() {
  gameTheme();
  startMessage = false;
  playerClass = 'playerIdle';
  computerClass = 'computerIdle';
  restart();
}

function restart() {
  restartMessage = '';
  playerClass = 'playerIdle';
  player.health = player.startHealth;
  computer.health = computer.startHealth;
  allowAttack = 'yes';
  gameTitle = 'yes';
  winner = null;
  computerSpeech = 'computerSpeech';
  player.attack = [5, 10, 10, 20];
  audioPlayerVictory2.pause();
  audioComputerVictory.pause();
  gameTheme();
  view();
}

function gameTheme() {
  gameThemeAudio.currentTime = 0;
  gameThemeAudio.volume = 0.3;
  gameThemeAudio.play();
}

function jukseKnapp() {
  player.attack = [40, 40, 40, 40];
  playerSpeech = 'playerSpeech';
  view();
}

function muteMusic() {
 if (gameThemeAudio.muted == false)
    {gameThemeAudio.muted = true;
      audioPlayerVictory2.muted = true;
      computerVictorySound.muted = true;
      playerAttackSound.muted = true
      computerAttackSound.muted = true;
      musicOnOrOff = 'musicOff';
    }
   else if (gameThemeAudio.muted == true)
    {gameThemeAudio.muted = false;
      audioPlayerVictory2.muted = false;
      computerVictorySound.muted = false;
      playerAttackSound.muted = false;
      computerAttackSound.muted = false;
      musicOnOrOff = 'musicOn';
    }  
    view();
}