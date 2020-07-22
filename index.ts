const deg2rad = (deg: number): number => 2 * Math.PI * (deg - 90) / 360;

const canvas = document.querySelector('canvas');
const { width, height } = canvas;
const ctx = canvas.getContext('2d');

const path = (code: () => void) => {
  ctx.beginPath();
  code();
  ctx.stroke();
};

const timer = setInterval(() => {
  ctx.clearRect(0, 0, width, height);
  for (let radius = 0; radius < 100; radius += 10) {
    path(() => {
      const start = Math.random() * 360;
      const diff = Math.random() * 120;
      ctx.arc(width / 2, height / 2, radius, deg2rad(start), deg2rad(start - 60 - diff));
    });
  }
}, 200);

document.querySelector('body').insertAdjacentHTML('beforeend', '<div>press ESC to stop</div>');
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    console.log('stopped');
    clearInterval(timer);
  }
});
