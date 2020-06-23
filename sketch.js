let imagemCenario;
let imagemPersonagem;
let alturaPersonagem;
let larguraPersonagem;
let cenario;
let personagem;
let somDoJogo;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/cabeca.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(20);
  alturaPersonagem = 238;
  larguraPersonagem = 110;
  somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
}
