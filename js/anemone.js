var anemoneObj = function () {
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = [];
	this.alpha = 0;
}

anemoneObj.prototype.num = 50;

anemoneObj.prototype.init = function () {
	for (var i = 0; i < this.num; i++) {
		this.rootx[i] = i * 16 + Math.random() * 20;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 220 + Math.random() * 50;
		this.amp[i] = Math.random() * 50 + 20;
	}
}

anemoneObj.prototype.draw = function () {
	this.alpha += deltaTime * 0.0005;
	var l = Math.sin(this.alpha);
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";
	for (var i = 0; i < this.num; i++) {
		this.headx[i] = this.rootx[i] + l * this.amp[i];
		//beginPath, moveTo, lineTo, stroke, strokeStyle, lineWidth, lineCap, globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i], canHeight);
		ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}
