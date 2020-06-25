class Inimigo extends Animacao {
  constructor(
    imagem,
     imagemConfig,
     xInicial,
     altura
  ) {
    super(
      imagem,
      imagemConfig,
      xInicial,
      altura
    )
      
    this.velocidade = 8;
  }
  
  move() {
    this.x = this.x - this.velocidade;
    
    if(this.x < - this.largura){
      this.x = width;
    }
  }
}