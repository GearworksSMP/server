let PlayersLastPos = {}

PlayerEvents.tick(e => {
	if(Utils.server.tickCount % 5) return

	let { player } = e;
	if (player.getLevel().getDimension() !== "uberswe:terra") {
		return
	}

	let playerUUID = player.getId();
	let { x, z } = player

	let speed = 0
	Object.keys(PlayersLastPos).forEach(key => {
		if (key === playerUUID && PlayersLastPos[key] !== undefined && PlayersLastPos[key].x !== 0 && PlayersLastPos[key].z !== 0) {
			speed = Math.sqrt( Math.pow((PlayersLastPos[key].x-x), 2) + Math.pow((PlayersLastPos[key].z-z), 2) );
			let timediff = (new Date).getTime() - PlayersLastPos[key].lastTime
			// divide time diff by 50 because 1 tick is 50 ms
			speed = ((speed * 1000) / ((timediff) / 50)) / 1000
		}
	})
	PlayersLastPos[playerUUID]= {x:x, z:z}
	if (speed > 5) {
		// If speed is over 20 it's probably a teleport or something
	} else if (speed > 0.6) {
		//player.displayClientMessage(Component.gold('Speed: ').append(Component.red(speed.toFixed(2))), true)
		player.displayClientMessage(Component.red('Moving Too Fast:').append(Component.red(speed.toFixed(2))), true)
		player.attack('generic', 8)
	}
})