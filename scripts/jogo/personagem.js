class Personagem {
  constructor(imagem) {
    this.imagem = imagem;
    this.matriz = [
      [0, 0],
      [231, 0],
      [462, 0],
      [693, 0],
      [0, 500],
      [231, 500],
      [462, 500],
      [693, 500],
    ];
    this.frameAtual = 0;
    this.alturaPersonagem = 300;
    this.larguraPersonagem = this.alturaPersonagem / 2.16;
  }
  
  exibe() {
    image(
      imagemPersonagem,
      0,
      height - this.alturaPersonagem + 20, 
      this.larguraPersonagem, this.alturaPersonagem, 
      this.matriz[this.frameAtual][0], 
      this.matriz[this.frameAtual][1],
      231,
      500
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