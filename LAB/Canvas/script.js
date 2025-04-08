let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(0, 0, 70, 70);
ctx.strokeRect(0, 0, 70, 70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(335, 0, 70, 70);
ctx.strokeRect(335, 0, 70, 70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(0, 335, 70, 70);
ctx.strokeRect(0, 335, 70, 70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(330, 335, 70, 70);
ctx.strokeRect(330, 335, 70, 70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.fillRect(30, 330, 40, 40);
ctx.strokeRect(30, 330, 40, 40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.fillRect(320, 330, 40, 40);
ctx.strokeRect(320, 330, 40, 40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aquamarine';
ctx.strokeStyle = 'aquamarine';
ctx.fillRect(-15, 160, 60, 80);
ctx.strokeRect(-15, 160, 60, 80);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aquamarine';
ctx.strokeStyle = 'aquamarine';
ctx.fillRect(350, 180, 50, 50);
ctx.strokeRect(350, 180, 50, 50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';

ctx.fillRect(150, (canvas.height / 2) - 10, 50, 50); 
ctx.strokeRect(150, (canvas.height / 2) - 10, 50, 50); 
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(200, 200, 50, 1 * Math.PI, 0 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(100, 300, 20, 0 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(300, 300, 20, 0 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.font = "30px Arial";
ctx.textAlign = "center";
ctx.fillText("Canvas", 195, 70);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aquamarine';
ctx.strokeStyle = 'black';
ctx.arc(200, 180, 20, 0 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(0, 0);  
ctx.lineTo(canvas.width / 2, canvas.height / 2);  
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(canvas.width, 0);  
ctx.lineTo(canvas.width / 2, canvas.height / 2);  
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(0, canvas.height / 2);  
ctx.lineTo(canvas.width, canvas.height / 2);  
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200, canvas.height / 2, 100, Math.PI, 1.5 * Math.PI);  
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200, canvas.height / 2, 100, 1.5 * Math.PI, 2 * Math.PI);  
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.moveTo(canvas.width / 2, canvas.height / 2);  
ctx.lineTo(canvas.width / 2, canvas.height);  
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(canvas.width / 2, canvas.height, 100, Math.PI, 1.5 * Math.PI);  
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(canvas.width / 2, canvas.height, 70, 1.5 * Math.PI, 2 * Math.PI);  
ctx.stroke();
ctx.closePath();
 
ctx.beginPath();
ctx.lineWidth = 3; 
ctx.strokeStyle = 'green'; 
ctx.fillStyle = 'aquamarine'; 
ctx.arc(canvas.width / 2, canvas.height, 150, 0, Math.PI);  
ctx.fill();  
ctx.stroke();  
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'cyan'; 
ctx.strokeStyle = 'green';
ctx.arc(canvas.width / 2, canvas.height, 50, Math.PI, 2 * Math.PI);  
ctx.fill();  
ctx.stroke(); 
ctx.closePath();























