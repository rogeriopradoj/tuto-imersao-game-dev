class Animacao {
  constructor(
    imagem,
    imagemConfig,
    xInicial,
    variacaoY,
    altura
  ) {
    this.imagem = imagem;

    this.larguraSprite = this.imagem.width / imagemConfig.spritesX;
    this.alturaSprite = this.imagem.height / imagemConfig.spritesY;

    this.altura = altura;
    this.largura = this.altura * this.larguraSprite / this.alturaSprite;

    this.x = xInicial;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
      
    this.matriz = this.geraMatrizSprites(
      this.imagem.width,
      this.imagem.height,
      imagemConfig.spritesX,
      imagemConfig.spritesY,
      imagemConfig.spritesRemover
    );

    this.frameAtual = 0;

  }

  geraMatrizSprites(tamanhoX, tamanhoY, spritesX, spritesY, spritesRemover = 0) {
    let tamanhoSpriteX = tamanhoX / spritesX;
    let tamanhoSpriteY = tamanhoY / spritesY;

    let coordenadasX = [];
    let coordenadasY = [];

    let matrizSprites = [];

    for (let i = 0; i < spritesX; i++) {
      coordenadasX.push(i * tamanhoSpriteX);
    }

    for (let j = 0; j < spritesY; j++) {
      coordenadasY.push(j * tamanhoSpriteY);
    }

    for (const y of coordenadasY) {
      for (const x of coordenadasX) {
        matrizSprites.push([x, y]);
      }
    }
    
    if (spritesRemover > 0) {
      for (let i = 0; i < spritesRemover; i++) {
        matrizSprites.pop();
      }
    }

    return matrizSprites;

  }

  exibe() {

        image(
          this.imagem,
          this.x,
          this.y,
          this.largura,
          this.altura,
          this.matriz[this.frameAtual][0],
          this.matriz[this.frameAtual][1],
          this.larguraSprite,
          this.alturaSprite
        );

        this.anima();
  }

  anima() {
    this.frameAtual++;

    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}