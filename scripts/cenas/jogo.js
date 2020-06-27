class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {

    loop();
    cenario = new Cenario(imagemCenario, 3);

    pontuacao = new Pontuacao();
    
    const alturaPersonagem = 0.5;
    const variacaoXPersonagem = 5;
    const xInicialPersonagem = 5;
    
    // console.log(this);
    
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
    const velocidadeInimigo = 20;
    const delayInimigo = 100;
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
    const variacaoYInimigoGrande = -20;
    const velocidadeInimigoGrande = 20;
    const delayInimigoGrande = 100;
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
    const velocidadeInimigoVoador = 20;
    const delayInimigoVoador = 100;
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
    const velocidadeInimigoCorona = 20;
    const delayInimigoCorona = 100;
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
    const velocidadeInimigoGotinha = 20;
    const delayInimigoGotinha = 100;
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

  }

  pulo() {
    personagem.pula();
    somDoPulo.play();
  }

  keyPressed(keyOrKeyCode) {
    if (keyOrKeyCode === 32) {
      this.pulo();
    }
  }

  touchStarted() {
    this.pulo();
  }

  mousePressed() {
    this.pulo();
  }

  draw() {
    cenario.exibe();
    cenario.move();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    // console.log({inimigo});
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();
    
    // console.log(inimigo.velocidade);

    if (inimigoVisivel) {
      this.inimigoAtual++;
      
      if (this.inimigoAtual === inimigos.length) {
        this.inimigoAtual = 0;
      }
      // inimigo.velocidade = parseInt(random(10, 30));
      inimigo.velocidade = parseInt(20 + pontuacao.getPontos() / 50);
    }

    if (personagem.estaColidindo(inimigo)) {
      // console.log('colidiu');
      this.gameOver();
    }
  }

  gameOver() {
    let corFundoGameover;
    corFundoGameover = color(128, 128, 128);
    corFundoGameover.setAlpha(200);
    fill(corFundoGameover);
    rect(0, 0, width, height);

    image(imagemGameOver, width / 2 - imagemGameOver.width / 2, height / 2 - imagemGameOver.height / 2);
    
    pontuacao.exibeGameOver();

    noLoop();
    somDoJogo.stop();

    let botaoTelaInicial;

    botaoTelaInicial = createButton('Tela Inicial');
    botaoTelaInicial.mousePressed(
      () => location.reload()
    );
    botaoTelaInicial.addClass('botao-tela-inicial');

    botaoTelaInicial.position(width / 2, height / 7 * 5.5);

    botaoTelaInicial.center('horizontal');
  }


}