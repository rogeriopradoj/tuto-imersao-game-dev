class Pontuacao {
  constructor() {
    this.pontos = 0;
  }
  
  getPontos() {
    return this.pontos;
  }
  
  exibe() {
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  exibeGameOver() {
    strokeWeight(1);
    stroke(255);
    
    textAlign(CENTER);
    fill(0);
    textSize(100);
    text(parseInt(this.pontos), width / 2, height / 2 + 120);
    
    noStroke();
  }
  
  adicionarPonto() {
    this.pontos = this.pontos + 0.2;
  }
}