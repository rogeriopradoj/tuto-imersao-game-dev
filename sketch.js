function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(displayWidth, displayHeight);

  botaoGerenciador = new BotaoGerenciador('Jogar', width / 2, height / 2);
  telaInicial = new TelaInicial();
    
  jogo = new Jogo();
  jogo.setup();

  frameRate(16);
  somDoJogo.playMode('restart');
  somDoJogo.loop();

  cenas = {
    jogo,
    telaInicial,
  };

}

function keyPressed() {
  jogo.keyPressed(keyCode)
}

function touchStarted() {
  if (cenaAtual === 'jogo') {
    jogo.pulo();
  }
}

function mousePressed() {
  if (cenaAtual === 'jogo') {
    jogo.pulo();
  }
}

function draw() {
  cenas[cenaAtual].draw();
}