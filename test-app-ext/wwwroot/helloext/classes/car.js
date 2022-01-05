Ext.define('Classes.Car', {
	speed: 0,
	drive: function(speed) {
		this.speed = speed;
		if(speed > 0) {
			console.log('Машина едет');
		} else {
			console.log('Машина остановилась');
		}
	}
})