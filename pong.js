// JavaScript file for Pong

const animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000 / 60) };

let canvas = document.createElement('canvas');
const width = 400;
const height = 600;
canvas.width = width;
canvas.height = height;
let context = canvas.getContext('2d');