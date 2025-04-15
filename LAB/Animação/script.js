const canvas = document.getElementById('Canvas1');
const ctx = canvas.getContext('2d');


const img = new Image();
img.src = 'https://via.placeholder.com/50'; 


const imgWidth = 50;
const imgHeight = 50;


let imgX = (canvas.width - imgWidth) / 2;
let imgY = (canvas.height - imgHeight) / 2;


function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
}

document.addEventListener('mousemove', function(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  imgX = Math.min(
    Math.max(mouseX - imgWidth / 2, 0),
    canvas.width - imgWidth
  );
  imgY = Math.min(
    Math.max(mouseY - imgHeight / 2, 0),
    canvas.height - imgHeight
  );

  desenhar();
});

canvas.addEventListener('mouseleave', () => {
  desenhar(); 
});

img.onload = desenhar;
