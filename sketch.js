let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let cenario;
let personagem;
let inimigo;

let corFundoGameover;

let somDoJogo;

const imagemPersonagemConfig = {
  src: 'imagens/personagem/cabeca.png',
  spritesX: 4,
  spritesY: 2,
};
// const imagemInimigoConfig = {
//   src: 'imagens/inimigos/gotinha.png',
//   spritesX: 4,
//   spritesY: 7,
// };
// const imagemInimigoConfig = {
//   src: 'imagens/inimigos/corona.png',
//   spritesX: 5,
//   spritesY: 4,
// };
const imagemInimigoConfig = {
  src: 'imagens/inimigos/bolso.png',
  spritesX: 1,
  spritesY: 17,
};


const alturaPersonagem = 0.5;

const alturaInimigo = 0.3;

const imagemGameoverConfig = {
  src: 'imagens/assets/game-over.png',
  spritesX: 1,
  spritesY: 1,
};

function preload() {
  imagemCenario    = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage(imagemPersonagemConfig.src);
  imagemInimigo    = loadImage(imagemInimigoConfig.src);
  imagemGameOver   = loadImage(imagemGameoverConfig.src);
  
  somDoJogo        = loadSound('sons/trilha_jogo.mp3');
  somDoPulo        = loadSound('sons/somPulo.mp3');
}

function init() {
  loop();
  cenario = new Cenario(imagemCenario, 3);
  
  corFundoGameover = color(128, 128, 128);

  const xInicialPersonagem = 0;
  personagem = new Personagem(
    imagemPersonagem,
    imagemPersonagemConfig,
    xInicialPersonagem,
    alturaPersonagem * windowHeight
  );
  
  const xInicialInimigo = width - 52;
  inimigo = new Inimigo(
    imagemInimigo,
    imagemInimigoConfig,
    xInicialInimigo,
    alturaInimigo * windowHeight
  );
  
  frameRate(16);
  
    somDoJogo.playMode('restart');
    somDoJogo.loop();
}
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  init();
  
}

function keyPressed() {
  if (keyCode === 32) {
    personagem.pula();
    somDoPulo.play();
  }
}

function mousePressed() {
  init();
}

function gameOver() {
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

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();
  
  if(personagem.estaColidindo(inimigo)) {    
    gameOver();
  }
  
}