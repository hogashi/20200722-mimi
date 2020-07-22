var deg2rad = function (deg) { return 2 * Math.PI * (deg - 90) / 360; };
var canvas = document.querySelector('canvas');
var width = canvas.width, height = canvas.height;
var ctx = canvas.getContext('2d');
var path = function (code) {
    ctx.beginPath();
    code();
    ctx.stroke();
};
var timer = setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    var _loop_1 = function (radius) {
        path(function () {
            var start = Math.random() * 360;
            var diff = Math.random() * 120;
            ctx.arc(width / 2, height / 2, radius, deg2rad(start), deg2rad(start - 60 - diff));
        });
    };
    for (var radius = 0; radius < 100; radius += 10) {
        _loop_1(radius);
    }
}, 200);
document.querySelector('body').insertAdjacentHTML('beforeend', '<div>press ESC to stop</div>');
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        console.log('stopped');
        clearInterval(timer);
    }
});
