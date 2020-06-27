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
    const precisao = {
      top: 0.8,
      bottom: 1,
      left: 0.7,
      right: 0.6,
    };
    
    const precisaoInimigo = {
      top: 0.7,
      bottom: 0.7,
      left: 0.7,
      right: 0.7,
    };
    
    let personagemPoly = [
      {
        x:this.x + this.largura * (1 - precisao.left),
        y:this.y + this.altura * (1 - precisao.top),
      },
      {
        x:this.x + this.largura - this.largura * (1 - precisao.right),
        y:this.y + this.altura * (1 - precisao.top),
      },
      {
        x:this.x + this.largura - this.largura * (1 - precisao.right),
        y:this.y + this.altura - this.largura * (1 - precisao.bottom),
      },
      {
        x:this.x + this.largura * (1 - precisao.left),
        y:this.y + this.altura - this.largura * (1 - precisao.bottom),
      },
    ];
    let inimigoPoly = [
      {
        x:inimigo.x + inimigo.largura * (1 - precisaoInimigo.left),
        y:inimigo.y + inimigo.altura * (1 - precisaoInimigo.top),
      },
      {
        x:inimigo.x + inimigo.largura - inimigo.largura * (1 - precisaoInimigo.right),
        y:inimigo.y + inimigo.altura * (1 - precisaoInimigo.top),
      },
      {
        x:inimigo.x + inimigo.largura - inimigo.largura * (1 - precisaoInimigo.right),
        y:inimigo.y + inimigo.altura - inimigo.largura * (1 - precisaoInimigo.bottom),
      },
      {
        x:inimigo.x + inimigo.largura * (1 - precisaoInimigo.left),
        y:inimigo.y + inimigo.altura - inimigo.largura * (1 - precisaoInimigo.bottom),
      },
    ];
    
    noFill();
    strokeWeight(3);
    stroke(0);
    
	// beginShape();
	// for(let i=0; i < personagemPoly.length; i++){
	// 	vertex(personagemPoly[i].x,personagemPoly[i].y);
	// }
	// endShape(CLOSE);
	// beginShape();
	// for(let i=0; i < inimigoPoly.length; i++){
	// 	vertex(inimigoPoly[i].x,inimigoPoly[i].y);
	// }
	// endShape(CLOSE);
    
    const colisao = collidePolyPoly(personagemPoly, inimigoPoly, false)
    
    // console.log({personagemPoly});
    // console.log({inimigoPoly});
    // console.log({colisao});
    
    return colisao;
  }

}