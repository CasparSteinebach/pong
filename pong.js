// JavaScript file for Pong

const animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000 / 60) };
// playing field
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

let player = new Player();
let computer = new Computer();
let ball = new Ball(200, 300);

let render = () => {
    context.fillStyle = "#FF00FF";
    context.fillRect(0, 0, width, height);
    //player.render();
    //computer.render();
    ball.render();
};

// Paddels and the ball

function Paddle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.x_speed = 0;
    this.y_speed = 0;
}

Paddle.prototype.render = () => {
    context.fillStyle = "#0000FF";
    context.fillRect(this.x, this.y, this.width, this.height);
};

// Players - human vs computer

function Player() {
    this.paddle = new Paddle(175, 580, 50, 10);
}

function Computer() {
    this.paddle = new Paddle(175, 10, 50, 10);
}

//Player.prototype.render = () => {
//  this.paddle.render();
//}

//Computer.prototype.render = () => {
// this.paddle.render();
//}

function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.x_speed = 0;
    this.y_speed = 3;
    this.radius = 5;
}

Ball.prototype.render = () => {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
    context.fillStyle = "#000000";
    context.fill();
}