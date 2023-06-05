let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 538,
    scene: [Menu, Scene1, Scene2],
    physics: {
		default: 'arcade',
		arcade: {
			gravity: {
				y: 200
			},
			debug: true
		}
	}
}

let game = new Phaser.Game(config);

//Set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let x;
//Reserve keyboard variables
let keyLEFT, keyRIGHT, keyUP, keyDOWN;

//mouse
let mouse;