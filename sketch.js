let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoGotinha;
let imagemInimigoCorona;

let cenario;
let pontuacao;

let personagem;

let inimigo;
let inimigoGrande;
let inimigoVoador;
let inimigoCorona;
let inimigoGotinha;

let somDoJogo;

const imagemPersonagemConfig = {
  src: 'imagens/personagem/cabeca.png',
  spritesX: 4,
  spritesY: 2,
};

const imagemInimigoConfig = {
  src: 'imagens/inimigos/bolso.png',
  spritesX: 1,
  spritesY: 17,
};

const imagemInimigoGrandeConfig = {
  src: 'imagens/inimigos/troll.png',
  spritesX: 5,
  spritesY: 6,
  spritesRemover: 2,
};

const imagemInimigoVoadorConfig = {
  src: 'imagens/inimigos/gotinha-voadora.png',
  spritesX: 3,
  spritesY: 6,
  spritesRemover: 2,
};
const imagemInimigoCoronaConfig = {
  src: 'imagens/inimigos/corona.png',
  spritesX: 5,
  spritesY: 4,
};
const imagemInimigoGotinhaConfig = {
  src: 'imagens/inimigos/gotinha.png',
  spritesX: 4,
  spritesY: 7,
};

const imagemGameoverConfig = {
  src: 'imagens/assets/game-over.png',
  spritesX: 1,
  spritesY: 1,
};

const inimigos = [];

function preload() {
  imagemCenario    = loadImage('imagens/cenario/floresta.png');
  
  imagemPersonagem = loadImage(imagemPersonagemConfig.src);
  
  imagemInimigo    = loadImage(imagemInimigoConfig.src);
  imagemInimigoGrande = loadImage(imagemInimigoGrandeConfig.src);
  imagemInimigoVoador = loadImage(imagemInimigoVoadorConfig.src);
  imagemInimigoCorona = loadImage(imagemInimigoCoronaConfig.src);
  imagemInimigoGotinha = loadImage(imagemInimigoGotinhaConfig.src);

  imagemGameOver   = loadImage(imagemGameoverConfig.src);
  
  somDoJogo        = loadSound('sons/trilha_jogo.mp3');
  somDoPulo        = loadSound('sons/somPulo.mp3');
}

function init() {
  loop();
  cenario = new Cenario(imagemCenario, 3);
  
  pontuacao = new Pontuacao();
  
  

  const alturaPersonagem = 0.5;
  const variacaoXPersonagem = 30;
  const xInicialPersonagem = 0;
  personagem = new Personagem(
    imagemPersonagem,
    imagemPersonagemConfig,
    xInicialPersonagem,
    variacaoXPersonagem,
    alturaPersonagem * windowHeight
  );
  
  const alturaInimigo = 0.3;  
  const xInicialInimigo = width - 52;
  const variacaoYInimigo = 0;
  const velocidadeInimigo = 10;
  const delayInimigo = 200;
  const inimigo = new Inimigo(
    imagemInimigo,
    imagemInimigoConfig,
    xInicialInimigo,
    variacaoYInimigo,
    alturaInimigo * windowHeight,
    velocidadeInimigo,
    delayInimigo
  );
  
  const alturaInimigoGrande = 0.3;
  const xInicialInimigoGrande = width;
  const variacaoYInimigoGrande = 0;
  const velocidadeInimigoGrande = 10;
  const delayInimigoGrande = 1500;
  const inimigoGrande = new Inimigo(
    imagemInimigoGrande,
    imagemInimigoGrandeConfig,
    xInicialInimigoGrande,
    variacaoYInimigoGrande,
    alturaInimigoGrande * windowHeight,
    velocidadeInimigoGrande,
    delayInimigoGrande
  );
  
  const alturaInimigoVoador = 0.1;
  const xInicialInimigoVoador = width - 52;
  const variacaoYInimigoVoador = 200;
  const velocidadeInimigoVoador = 10;
  const delayInimigoVoador = 2500;
  const inimigoVoador = new Inimigo(
    imagemInimigoVoador,
    imagemInimigoVoadorConfig,
    xInicialInimigoVoador,
    variacaoYInimigoVoador,
    alturaInimigoVoador * windowHeight,
    velocidadeInimigoVoador,
    delayInimigoVoador
  );
  
  const alturaInimigoCorona = 0.3;
  const xInicialInimigoCorona = width - 52;
  const variacaoYInimigoCorona = 0;
  const velocidadeInimigoCorona = 10;
  const delayInimigoCorona = 3500;
  const inimigoCorona = new Inimigo(
    imagemInimigoCorona,
    imagemInimigoCoronaConfig,
    xInicialInimigoCorona,
    variacaoYInimigoCorona,
    alturaInimigoCorona * windowHeight,
    velocidadeInimigoCorona,
    delayInimigoCorona
  );
  
  const alturaInimigoGotinha = 0.1;
  const xInicialInimigoGotinha = width - 52;
  const variacaoYInimigoGotinha = 0;
  const velocidadeInimigoGotinha = 10;
  const delayInimigoGotinha = 4500;
  const inimigoGotinha = new Inimigo(
    imagemInimigoGotinha,
    imagemInimigoGotinhaConfig,
    xInicialInimigoGotinha,
    variacaoYInimigoGotinha,
    alturaInimigoGotinha * windowHeight,
    velocidadeInimigoGotinha,
    delayInimigoGotinha
  );
  
  
  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);
  inimigos.push(inimigoCorona);
  inimigos.push(inimigoGotinha);
  
  frameRate(16);
  
    somDoJogo.playMode('restart');
    somDoJogo.loop();
}
 
function setup() {
  let faseJogo = 0;
  createCanvas(windowWidth, windowHeight);
  //createCanvas(displayWidth, displayHeight);
  
  init();
  
}

function pulo() {
    personagem.pula();
    somDoPulo.play();
}

function keyPressed() {
  if (keyCode === 32) {
    pulo();
  }
}

function touchStarted() {
  pulo();
}

function mousePressed() {
  //init();
  pulo();
}

function gameOver() {
    let corFundoGameover;
    corFundoGameover = color(128, 128, 128);
    corFundoGameover.setAlpha(200);
    fill(corFundoGameover);
    rect(0, 0, width, height);
    
    image(imagemGameOver, width/2 - imagemGameOver.width/2, height/2 - imagemGameOver.height/2);
  
    noLoop();
    somDoJogo.stop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();
      if(personagem.estaColidindo(inimigo)) {
        console.log('colidiu');
        gameOver();
      }

  })
  
}