let PlayersLastPos = {}

PlayerEvents.tick(e => {
	let { player } = e;
	let playerUUID = player.getId();
	let { x, z } = player
	if (player.getLevel().getDimension() !== "uberswe:terra") {
		return
	}

	let speed = 0
	Object.keys(PlayersLastPos).forEach(key => {
		if (key === playerUUID && PlayersLastPos[key] !== undefined && PlayersLastPos[key].x !== 0 && PlayersLastPos[key].z !== 0) {
			speed = Math.sqrt( Math.pow((PlayersLastPos[key].x-x), 2) + Math.pow((PlayersLastPos[key].z-z), 2) );
		}
	})
	PlayersLastPos[playerUUID]= {x:x, z:z, lastTime: (new Date).getTime()}
	if (speed > 5) {
		// If speed is over 20 it's probably a teleport or something
	} else if (speed > 1.5) {
		//player.displayClientMessage(Component.gold('Speed: ').append(Component.red(speed.toFixed(2))), true)
		player.displayClientMessage(Component.red('Moving Too Fast'), true)
		player.attack('generic', 4)
	}
})
