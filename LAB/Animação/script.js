class Retangulo {
  constructor(cor_linha, cor_preenchimento, espessura_linha, x, y, largura, altura) {
    this.cor_linha = cor_linha;
    this.cor_preenchimento = cor_preenchimento;
    this.espessura_linha = espessura_linha;
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
  }

  desenhe(contexto) {
    contexto.beginPath();
    contexto.lineWidth = this.espessura_linha;
    contexto.fillStyle = this.cor_preenchimento;
    contexto.strokeStyle = this.cor_linha;
    contexto.fillRect(this.x, this.y, this.largura, this.altura);
    contexto.strokeRect(this.x, this.y, this.largura, this.altura);
    contexto.closePath();
  }
}

const canvas = document.getElementById('canvas');
const ctx1 = canvas.getContext('2d');

let retangulo_3 = new Retangulo('blue', 'yellow', 3, 200, 200, 20, 20);

function animacao() {
  ctx1.clearRect(0, 0, canvas.width, canvas.height);
  retangulo_3.desenhe(ctx1);
  requestAnimationFrame(animacao);
}

document.addEventListener('mousemove', function(evento) {
  let rect = canvas.getBoundingClientRect();
  let x_mouse = evento.clientX - rect.left;
  let y_mouse = evento.clientY - rect.top;

  
  let novoX = x_mouse - retangulo_3.largura / 2;
  let novoY = y_mouse - retangulo_3.altura / 2;

  if (novoX < 0) novoX = 0;
  if (novoX + retangulo_3.largura > canvas.width) {
    novoX = canvas.width - retangulo_3.largura;
  }

  
  if (novoY < 0) novoY = 0;
  if (novoY + retangulo_3.altura > canvas.height) {
    novoY = canvas.height - retangulo_3.altura;
  }

  retangulo_3.x = novoX;
  retangulo_3.y = novoY;
});

animacao();
