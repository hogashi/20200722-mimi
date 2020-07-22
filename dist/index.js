var deg2rad = function (deg) { return 2 * Math.PI * (deg - 90) / 360; };
var canvas = document.querySelector('canvas');
var width = canvas.width, height = canvas.height;
var ctx = canvas.getContext('2d');
var path = function (code) {
    ctx.beginPath();
    code();
    ctx.stroke();
};
var mimis = [
    {
        radius: 30,
        raddiff: 1.2,
        radfrom: 10,
        radto: 40,
        start: 120,
        diff: 60
    },
    {
        radius: 70,
        raddiff: 7,
        radfrom: 45,
        radto: 90,
        start: 80,
        diff: 50
    },
    {
        radius: 100,
        raddiff: 4,
        radfrom: 75,
        radto: 100,
        start: 30,
        diff: 40
    },
];
var timer = setInterval(function () {
    console.log(JSON.stringify(mimis));
    ctx.clearRect(0, 0, width, height);
    var _loop_1 = function (i) {
        var _a = mimis[i], radius = _a.radius, raddiff = _a.raddiff, radfrom = _a.radfrom, radto = _a.radto, start = _a.start, diff = _a.diff;
        path(function () {
            var start = Math.random() * 360;
            var diff = Math.random() * 60 + 120;
            ctx.arc(width / 2, height / 2, radius, deg2rad(start), deg2rad(start - diff));
        });
        var newRadius = radius + raddiff;
        var sign = 1;
        if (newRadius < radfrom || newRadius > radto) {
            sign = -1;
        }
        var newRaddiff = raddiff * sign;
        var newMimi = {
            radius: newRadius,
            raddiff: newRaddiff,
            radfrom: radfrom,
            radto: radto,
            start: start + Math.random() * 10,
            diff: Math.random() * 60 + 60
        };
        mimis[i] = newMimi;
    };
    for (var i = 0; i < mimis.length; i += 1) {
        _loop_1(i);
    }
}, 80);
var button = document.querySelector('button');
button.addEventListener('click', function (e) {
    console.log('stopped');
    clearInterval(timer);
    button.disabled = true;
    button.innerHTML = '耳を動かすには再読込';
    document.getElementById('what').style.visibility = 'visible';
});
