// JavaScript file for Pong

const animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000 / 60) };

let canvas = document.createElement('canvas');
const width = 400;
const height = 600;
canvas.width = width;
canvas.height = height;
let context = canvas.getContext('2d');

window.onload = () => {
    document.body.appendChild(canvas);
    animate(step);
}

let step = () => {
    update();
    render();
    animate(step);
};

let update = () => {};

let render = () => {
    context.fillStyle = "#FF00FF";
    context.fillRect(0, 0, width, height);
};