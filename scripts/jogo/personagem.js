class Personagem extends Animacao {
  constructor(
    imagem,
     imagemConfig,
     xInicial,
     variacaoY,
     altura
  ) {
    super(
      imagem,
      imagemConfig,
      xInicial,
      variacaoY,
      altura
    )    
      this.variacaoY = variacaoY;
      this.yInicial = height - this.altura - this.variacaoY;
      this.y = this.yInicial;
      
      this.velocidadeDoPulo = 0;
      this.gravidade = 6;
      this.alturaDoPulo = -50;
      this.pulos = 0;
  }
  
  pula() {
    if (this.pulos < 3) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
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