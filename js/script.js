var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic = new Image();

var anemoneObj;
var fruitObj;

var momFishObj;
var babyFishObj;

var babyTail = [];
var babyEye = [];

var mousex;
var mousey;

document.body.onload = game;

function game() {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init() {
	can1 = document.getElementById("canvas1");
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove', onmousemove, false);

	bgPic.src = "./img/background.jpg";

	canWidth = can1.width;
	canHeight = can1.height;

	anemoneObj = new anemoneObj();
	anemoneObj.init();

	fruitObj = new fruitObj();
	fruitObj.init();

	momFishObj = new momFishObj();
	momFishObj.init();

	babyFishObj = new babyFishObj();
	babyFishObj.init();

	mousex = canWidth * 0.5;
	mousey = canHeight * 0.5;

	for (var i = 0; i < 8; i++) {
		babyTail[i] = new Image();
		babyTail[i].src = "./img/babyTail" + i + ".png";
	}

	for (var i = 0; i < 2; i++) {
		babyEye[i] = new Image();
		babyEye[i].src = "./img/babyEye" + i + ".png";
	}
}

function onmousemove(e) {
	if (e.offsetX || e.layerX) {
		mousex = e.offsetX == undefined ?
			e.layerX : e.offsetX;

	}
	if (e.offsetY || e.layerY) {
		mousey = e.offsetY == undefined ?
			e.layerY : e.offsetY;

	}
}

function gameloop() {
	requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if (deltaTime > 30) {
		deltaTime = 30;
	}

	drawBackground();
	anemoneObj.draw();
	fruitObj.draw();
	fruitMonitor();

	ctx1.clearRect(0, 0, canWidth, canHeight);
	momFishObj.draw();

	babyFishObj.draw();

	fishFruitCollision();
}
