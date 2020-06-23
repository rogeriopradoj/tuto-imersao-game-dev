class Personagem {
  constructor(imagem) {
    this.imagem = imagem;
    this.matriz = [
      [0, 0],
      [554, 0],
      [1108, 0],
      [1662, 0],
      [0, 1200],
      [554, 1200],
      [1108, 1200],
      [1662, 1200],
    ];
    this.frameAtual = 0;
  }
  
  exibe() {
    image(imagemPersonagem, 0, height - alturaPersonagem, larguraPersonagem, alturaPersonagem, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 554, 1200);
    
    this.anima();
  }
  
  anima() {
    this.frameAtual++;
    
    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}