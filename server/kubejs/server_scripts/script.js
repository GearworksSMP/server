let PlayersLastPos = {}

PlayerEvents.tick(e => {
	let { player } = e;
	let playerUUID = player.getId();
	let { x, z } = player
	if (player.getLevel().getDimension() !== "uberswe:terra") {
		return
	}

	let speed = 0
	for (const [key, value] of Object.entries(PlayersLastPos)) {
		if (key === playerUUID && value !== undefined && value.x !== 0 && value.z !== 0) {
			speed = Math.sqrt( Math.pow((value.x-x), 2) + Math.pow((value.z-z), 2) );
		}
	}

	Object.assign(PlayersLastPos, {playerUUID: {x:x, z:z}});
	if (speed > 20) {
		// If speed is over 20 it's probably a teleport or something
	} else if (speed > 0.7) {
		//player.displayClientMessage(Component.gold('Speed: ').append(Component.red(speed.toFixed(2))), true)
		player.displayClientMessage(Component.red('Moving Too Fast'), true)
		player.attack('generic', 10)
	} else if (speed > 0.4) {
		player.displayClientMessage(Component.yellow('You Feel A Mysterious Force'), true)
	}
})