//判断大鱼和果实的距离
function fishFruitCollision() {
	if (!data.gameOver) {
		for (var i = 0; i < fruitObj.num; i++) {
			if (fruitObj.alive[i]) {
				var l = calLength2(fruitObj.x[i], fruitObj.y[i], momFishObj.x, momFishObj.y);
				if (l < 900) {
					fruitObj.dead(i);
					data.fruitNum++;
					momFishObj.momBodyCount++;
					if (momFishObj.momBodyCount > 7) {
						momFishObj.momBodyCount = 7;
					}
					if (fruitObj.fruitType[i] == "blue") {
						data.double = 2;
					}
					wave.born(fruitObj.x[i], fruitObj.y[i]);
				}
			}
		}
	}
}
//判断大鱼和小鱼的距离
function momBabyCollision() {
	if (data.fruitNum > 0 && !data.gameOver) {
		var l = calLength2(momFishObj.x, momFishObj.y, babyFishObj.x, babyFishObj.y);
		if (l < 900) {
			babyFishObj.babyBodyCount = 0;
			momFishObj.momBodyCount = 0;
			halo.born(babyFishObj.x, babyFishObj.y);
			data.addScore();
		}
	}
}
