const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


function drawRect(x, y, w, h, color, stroke = true) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.fillRect(x, y, w, h);
  if (stroke) ctx.strokeRect(x, y, w, h);
  ctx.closePath();
}

function drawCircle(x, y, r, colorFill, colorStroke = colorFill, start = 0, end = 2 * Math.PI) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.fillStyle = colorFill;
  ctx.strokeStyle = colorStroke;
  ctx.arc(x, y, r, start, end);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawLine(x1, y1, x2, y2, color) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = color;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}

function drawText(text, x, y, font = "30px Arial", color = "black") {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = "center";
  ctx.fillText(text, x, y);
  ctx.closePath();
}


drawRect(0, 0, 70, 70, 'blue');
drawRect(335, 0, 70, 70, 'red');
drawRect(0, 335, 70, 70, 'yellow');
drawRect(330, 335, 70, 70, 'black');


drawRect(30, 330, 40, 40, 'white');
drawRect(320, 330, 40, 40, 'white');


drawRect(-15, 160, 60, 80, 'aquamarine');
drawRect(350, 180, 50, 50, 'aquamarine');


drawRect(150, (canvas.height / 2) - 10, 50, 50, 'red');


drawCircle(200, 200, 50, 'white', 'green', Math.PI, 0); 
drawCircle(100, 300, 20, 'yellow', 'green');
drawCircle(300, 300, 20, 'yellow', 'green');
drawCircle(200, 180, 20, 'aquamarine', 'black');


drawText("Canvas", 195, 70);


drawLine(0, 0, canvas.width / 2, canvas.height / 2, 'blue');
drawLine(canvas.width, 0, canvas.width / 2, canvas.height / 2, 'red');
drawLine(0, canvas.height / 2, canvas.width, canvas.height / 2, 'green');
drawLine(canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height, 'black');


drawCircle(200, canvas.height / 2, 100, 'transparent', 'green', Math.PI, 1.5 * Math.PI);
drawCircle(200, canvas.height / 2, 100, 'transparent', 'green', 1.5 * Math.PI, 2 * Math.PI);
drawCircle(canvas.width / 2, canvas.height, 100, 'transparent', 'green', Math.PI, 1.5 * Math.PI);
drawCircle(canvas.width / 2, canvas.height, 70, 'transparent', 'green', 1.5 * Math.PI, 2 * Math.PI);


ctx.beginPath();
ctx.lineWidth = 3;
ctx.fillStyle = 'aquamarine';
ctx.strokeStyle = 'green';
ctx.arc(canvas.width / 2, canvas.height, 150, 0, Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

drawCircle(canvas.width / 2, canvas.height, 50, 'cyan', 'green', Math.PI, 2 * Math.PI);
























