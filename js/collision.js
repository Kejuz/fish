function fishFruitCollision() {
	for (var i = 0; i < fruitObj.num; i++) {
		if (fruitObj.alive[i]) {
			var l = calLength2(fruitObj.x[i], fruitObj.y[i], momFishObj.x, momFishObj.y);
			if (l < 900) {
				fruitObj.dead(i);
			}
		}
	}
}
