let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 538,
    scene: [Menu, Instructions1, Scene1, Scene2, Scene3],
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

let x = 0;
//Reserve keyboard variables
let keyLEFT, keyRIGHT, keyUP, keyDOWN;

let keyS;

//mouse
let mouse;

//let x = 0;
let y = 0;

let value = 0;
