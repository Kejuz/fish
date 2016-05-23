var fruitObj = function () {
	this.alive = [];
	this.x = [];
	this.y = [];
	this.anemoneId = [];
	this.time = [];
	this.speed = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function () {
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.anemoneId[i] = 0;
		this.speed[i] = Math.random() * 0.02 + 0.005;
		this.fruitType[i] = "";
	}
	this.orange.src = "img/fruit.png";
	this.blue.src = "img/blue.png";
}

fruitObj.prototype.born = function (i) {
	this.anemoneId[i] = Math.floor(Math.random() * anemoneObj.num);
	this.x[i] = anemoneObj.headx[this.anemoneId];
	this.y[i] = anemoneObj.heady[this.anemoneId];
	this.time[i] = 0;
	this.alive[i] = true;
	var randomNumber = Math.random();
	if (randomNumber > 0.9) {
		this.fruitType[i] = "blue";
	} else {
		this.fruitType[i] = "orange";
	}
}

function sendFruit() {
	for (var i = 0; i < fruitObj.num; i++) {
		if (!fruitObj.alive[i]) {
			fruitObj.born(i);
			return;
		}
	}
}

fruitObj.prototype.dead = function (i) {
	this.alive[i] = false;
}

function fruitMonitor() {
	var num = 0;
	for (var i = 0; i < fruitObj.num; i++) {
		if (fruitObj.alive[i]) {
			num++;
		}
	}
	if (num < 15) {
		sendFruit();
		return;
	}
}

fruitObj.prototype.draw = function () {
	for (var i = 0; i < this.num; i++) {
		//find an anemone, grow up, fly up
		if (this.alive[i]) {
			var pic;
			if (this.fruitType[i] == "blue") {
				pic = this.blue;
			} else {
				pic = this.orange;
			}

			if (this.time[i] < 15) {
				var id = this.anemoneId[i];
				this.x[i] = anemoneObj.headx[id];
				this.y[i] = anemoneObj.heady[id];
				this.time[i] += this.speed[i] * deltaTime;
			} else {
				this.y[i] -= this.speed[i] * 2 * deltaTime;
			}

			ctx2.drawImage(pic, this.x[i] - this.time[i] * 0.5, this.y[i] - this.time[i] * 0.5, this.time[i], this.time[i]);

			if (this.y[i] < 0) {
				this.alive[i] = false;
			}
		}
	}
}
