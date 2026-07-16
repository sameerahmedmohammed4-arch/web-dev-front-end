// Confetti animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = [];

function ConfettiPiece() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height - canvas.height;
  this.size = Math.random() * 8 + 2;
  this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  this.speed = Math.random() * 3 + 2;
}

function createConfetti() {
  for (let i = 0; i < 150; i++) {
    confettiPieces.push(new ConfettiPiece());
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces.forEach(piece => {
    ctx.fillStyle = piece.color;
    ctx.fillRect(piece.x, piece.y, piece.size, piece.size);
    piece.y += piece.speed;
    if (piece.y > canvas.height) {
      piece.y = -piece.size;
      piece.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawConfetti);
}

createConfetti();
drawConfetti();

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
document.body.addEventListener("click", () => {
  document.getElementById("birthdaySong").play();
});
