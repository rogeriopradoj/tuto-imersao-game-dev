class Personagem extends Animacao {
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
      this.yInicial = height - this.altura;
      this.y = this.yInicial;
      
      this.velocidadeDoPulo = 0;
      this.gravidade = 3;
  }
  
  pula() {
    this.velocidadeDoPulo = -30;
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
    }
  }
  
  estaColidindo(inimigo) {
    const precisao = 0.8;
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    )
    
    return colisao;
  }

}