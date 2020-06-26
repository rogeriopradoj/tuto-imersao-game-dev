class Inimigo extends Animacao {
  constructor(
    imagem,
     imagemConfig,
     xInicial,
     variacaoY,
     altura,
     velocidade,
     delay
  ) {
    super(
      imagem,
      imagemConfig,
      xInicial,
      variacaoY,
      altura
    )
      
    this.velocidade = velocidade;
    this.delay = delay;
    this.x = width + this.delay;
  }
  
  move() {
    this.x = this.x - this.velocidade;
    
    if(this.x < - this.largura - this.delay){
      this.x = width;
    }
  }
}