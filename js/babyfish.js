var babyFishObj = function () {
	this.x;
	this.y;
	this.angle;

	this.babyTailTimer = 0;
	this.babyTailCount = 0;

	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;

	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;
}

babyFishObj.prototype.init = function () {
	this.x = canWidth * 0.5 - 50;
	this.y = canHeight * 0.5 - 50;
	this.angle = 0;
}

babyFishObj.prototype.draw = function () {
	//lerp x y
	this.x = lerpDistance(momFishObj.x, this.x, 0.99);
	this.y = lerpDistance(momFishObj.y, this.y, 0.99);

	//lerp angle
	var delataY = momFishObj.y - this.y;
	var delataX = momFishObj.x - this.x;
	var beta = Math.atan2(delataY, delataX) + Math.PI;

	this.angle = lerpAngle(beta, this.angle, 0.6);

	//baby tail count
	this.babyTailTimer += deltaTime;
	if (this.babyTailTimer > 50) {
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer %= 50;
	}

	//baby eye count
	this.babyEyeTimer += deltaTime;
	if (this.babyEyeTimer > this.babyEyeInterval) {
		this.babyEyeCount = (this.babyEyeCount + 1) % 2;
		this.babyEyeTimer %= this.babyEyeInterval;

		if (this.babyEyeCount == 0) {
			this.babyEyeInterval = Math.random() * 5000 + 500;
		} else {
			this.babyEyeInterval = 200;
		}
	}

	//baby body count
	this.babyBodyTimer += deltaTime;
	if (this.babyBodyTimer > 300) {
		this.babyBodyCount = this.babyBodyCount + 1;
		this.babyBodyTimer %= 300;
		if (this.babyBodyCount > 19) {
			this.babyBodyCount = 19;
			//game over
			data.gameOver = true;
		}
	}

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);

	var babyTailCount = this.babyTailCount;
	ctx1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width * 0.5 + 25, -babyTail[babyTailCount].height * 0.5);

	var babyBodyCount = this.babyBodyCount;
	ctx1.drawImage(babyBody[babyBodyCount], -babyBody[babyBodyCount].width * 0.5, -babyBody[babyBodyCount].height * 0.5);

	var babyEyeCount = this.babyEyeCount;
	ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width * 0.5, -babyEye[babyEyeCount].height * 0.5);

	ctx1.restore();
}
