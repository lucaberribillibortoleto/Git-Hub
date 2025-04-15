let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Função para desenhar um retângulo preenchido e com contorno
function drawRectangle(x, y, width, height, fillColor, strokeColor, lineWidth) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x + width, y + height, width, height); // Desenha o contorno ao lado
    ctx.closePath();
}

// Função para desenhar um polígono fechado
function drawPolygon(points, fillColor, strokeColor, lineWidth) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

// Função para desenhar um arco
function drawArc(x, y, radius, startAngle, endAngle, fillColor, strokeColor, lineWidth) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

// Função para desenhar texto
function drawText(text, x, y, fontSize, fontFamily, fillColor, strokeColor, lineWidth) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x - 5, y); // Ajuste para centralizar o texto com o contorno
    ctx.closePath();
}

// Chamada das funções

// Desenho dos retângulos
drawRectangle(0, 0, 70, 70, 'blue', 'red', 5);

// Desenho do polígono
drawPolygon([{x: 200, y: 150}, {x: 120, y: 120}, {x: 60, y: 250}, {x: 200, y: 250}], 'blue', 'red', 5);

// Desenho do arco
drawArc(200, 200, 50, 0 * Math.PI, 2 * Math.PI, 'blue', 'red', 5);

// Desenho do texto
drawText("Olá", 200, 350, 90, "Arial", 'blue', 'red', 5);
