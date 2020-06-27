let imagemCenario;

let imagemPersonagem;

let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoGotinha;
let imagemInimigoCorona;
let imagemTelaInicial;

let fonteTelaInicial;

let somDoJogo;

let cenario;
let pontuacao;

let personagem;

let inimigo;
let inimigoGrande;
let inimigoVoador;
let inimigoCorona;
let inimigoGotinha;

let cenaAtual = 'telaInicial';
let cenas;
let jogo;
let telaInicial;
let botaoGerenciador;

// const imagemPersonagemConfig = {
//   src: 'imagens/personagem/cabeca.png',
//   spritesX: 4,
//   spritesY: 2,
// };
const imagemPersonagemConfig = {
  src: 'imagens/personagem/leo.png',
  spritesX: 5,
  spritesY: 2,
  spritesRemover: 1,
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