let lastPos = {
	x:0,
	z:0,
}
PlayerEvents.tick(e => {
	const { player } = e;
	const { x, z } = player
	if (player.getLevel().getDimension() !== "uberswe:terra") {
		return
	}

	let speed = 0
	if (lastPos.x !== 0 && lastPos.z !== 0) {
		speed = Math.sqrt( Math.pow((lastPos.x-x), 2) + Math.pow((lastPos.z-z), 2) );
	}
	lastPos = {
		x:x,
		z:z,
	}
	if (speed > 20) {
		// If speed is over 20 it's probably a teleport or something
	} else if (speed > 0.6) {
		//player.displayClientMessage(Component.gold('Speed: ').append(Component.red(speed.toFixed(2))), true)
		player.displayClientMessage(Component.red('It Hurts To Move Too Fast'), true)
		player.attack('generic', 10)
	} else if (speed > 0.3) {
		player.displayClientMessage(Component.yellow('You Feel A Mysterious Force'), true)
	}
})