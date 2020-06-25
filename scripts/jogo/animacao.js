class Animacao {
  constructor(
    imagem,
    imagemConfig,
    xInicial,
    altura
  ) {
    this.imagem = imagem;
    
    this.larguraSprite = this.imagem.width / imagemConfig.spritesX;
    this.alturaSprite = this.imagem.height / imagemConfig.spritesY;
      
      this.altura = altura;
      this.largura = this.altura * this.larguraSprite / this.alturaSprite;

    this.x = xInicial;
    this.y = height - this.altura;

    this.matriz = this.geraMatrizSprites(
      this.imagem.width,
      this.imagem.height,
      imagemConfig.spritesX,
      imagemConfig.spritesY
    );

    this.frameAtual = 0;

  }

  geraMatrizSprites(tamanhoX, tamanhoY, spritesX, spritesY) {
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

    return matrizSprites;

  }

  exibe() {

    image(
      this.imagem,
      this.x, this.y,
      this.largura, this.altura,
      this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1],
      this.larguraSprite, this.alturaSprite);

    this.anima();
  }

  anima() {
    this.frameAtual++;

    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}