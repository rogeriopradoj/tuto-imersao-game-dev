function preload() {
  //imagemCenario    = loadImage('imagens/cenario/floresta.png');
  imagemCenario    = loadImage('imagens/cenario/beach.png');
  imagemGameOver   = loadImage(imagemGameoverConfig.src);
  // imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  // imagemTelaInicial = loadImage('imagens/cenario/happy_birthday.jpg');
  imagemTelaInicial = loadImage('imagens/cenario/coronel.jpg');
  
  imagemPersonagem = loadImage(imagemPersonagemConfig.src);
  
  imagemInimigo    = loadImage(imagemInimigoConfig.src);
  imagemInimigoGrande = loadImage(imagemInimigoGrandeConfig.src);
  imagemInimigoVoador = loadImage(imagemInimigoVoadorConfig.src);
  imagemInimigoCorona = loadImage(imagemInimigoCoronaConfig.src);
  imagemInimigoGotinha = loadImage(imagemInimigoGotinhaConfig.src);

  //fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  // fonteTelaInicial = loadFont('imagens/assets/FFF_Tusj.ttf');
  fonteTelaInicial = loadFont('imagens/assets/foo.ttf');
    
  somDoJogo        = loadSound('sons/trilha_fazendinha.mp3');
  somDoPulo        = loadSound('sons/somPulo.mp3');
}