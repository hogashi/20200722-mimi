const deg2rad = (deg: number): number => 2 * Math.PI * (deg - 90) / 360;

const canvas = document.querySelector('canvas');
const { width, height } = canvas;
const ctx = canvas.getContext('2d');

const path = (code: () => void) => {
  ctx.beginPath();
  code();
  ctx.stroke();
};

interface Mimi {
  radius: number;
  raddiff: number;
  radfrom: number;
  radto: number;
  start: number;
  diff: number;
}
const mimis: Mimi[] = [
  {
    radius: 30,
    raddiff: 1.2,
    radfrom: 10,
    radto: 40,
    start: 120,
    diff: 60,
  },
  {
    radius: 70,
    raddiff: 7,
    radfrom: 45,
    radto: 90,
    start: 80,
    diff: 50,
  },
  {
    radius: 100,
    raddiff: 4,
    radfrom: 75,
    radto: 100,
    start: 30,
    diff: 40,
  },
];

const timer = setInterval(() => {
  console.log(JSON.stringify(mimis));
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < mimis.length; i += 1) {
    const { radius, raddiff, radfrom, radto, start, diff } = mimis[i];
    path(() => {
      const start = Math.random() * 360;
      const diff = Math.random() * 60 + 120;
      ctx.arc(width / 2, height / 2, radius, deg2rad(start), deg2rad(start - diff));
    });

    const newRadius = radius + raddiff;
    let sign = 1;
    if (newRadius < radfrom || newRadius > radto) {
      sign = -1;
    }
    let newRaddiff = raddiff * sign;

    const newMimi: Mimi = {
      radius: newRadius,
      raddiff: newRaddiff,
      radfrom,
      radto,
      start: start + Math.random() * 10,
      diff: Math.random() * 60 + 60,
    };

    mimis[i] = newMimi;
  }
}, 80);

const button = document.querySelector('button');
button.addEventListener('click', (e) => {
  console.log('stopped');
  clearInterval(timer);
  button.disabled = true;
  button.innerHTML = '耳を動かすには再読込';
  document.getElementById('what').style.visibility = 'visible';
});
