var momFishObj = function () {
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
}

momFishObj.prototype.init = function () {
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	this.bigEye.src = "img/bigEye0.png";
	this.bigBody.src = "img/bigSwim0.png";
	this.bigTail.src = "img/bigTail0.png";
}

momFishObj.prototype.draw = function () {
	this.x = lerpDistance(mousex, this.x, 0.99);
	this.y = lerpDistance(mousey, this.y, 0.99);

	var delataY = mousey - this.y;
	var delataX = mousex - this.x;
	var beta = Math.atan2(delataY, delataX) + Math.PI;

	this.angle = lerpAngle(beta, this.angle, 0.6);

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);

	ctx1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5);
	ctx1.drawImage(this.bigBody, -this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
	ctx1.drawImage(this.bigEye, -this.bigEye.width * 0.5, -this.bigEye.height * 0.5);

	ctx1.restore();
}