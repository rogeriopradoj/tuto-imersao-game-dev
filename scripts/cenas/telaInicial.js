class TelaInicial {
  constructor() {}
    
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo() {
    // let cor = color(128, 128, 128);
    // cor.setAlpha(200);
    // fill(cor);
    // rect(0, 0, width, height);
    
    tint(255, 10); // Display at half opacity
    image(imagemTelaInicial, 0, 0, width, height);
    noTint();
  }
  
  _texto() {
    strokeWeight(1);
    stroke(255);
    
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(30);
    text('by @RogerioPradoJ', width / 2, height / 5 * 1.3);
    text('v35.0.0 (24/06/2020)', width / 2, height / 5 * 1.5);
    textSize(50);
    text('As aventuras dos', width / 2, height / 5 * 2.2);
    text('amigos do', width / 2, height / 5 * 2.52);
    textSize(140);
    text('LeonardO', width / 2, height / 5 * 3.20);
    
    noStroke();
  }
  
  _botao() {
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
}