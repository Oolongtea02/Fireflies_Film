/*
CMPM 120 (Game Development Experience) Film Adaptation: The Game
Pair project: Samuel Zhang, Tristyn Lai

Phaser Components Used: vertical/horizontal physics movement, particle effects, timers, button point and click usage, and text objects(score).

Sources: assets from Pinterest, music from Pixabay
setsuko: searched from google images
firefly: https://in.pinterest.com/pin/548172585905954462/
pot: searched from google images
scene1 sfx: https://pixabay.com/ru/sound-effects/apple-eating-36127/ 
scene1 soundtrack: https://pixabay.com/music/cartoons-cute-creatures-150622/ by geoff harvey
scene2 soundtrack: https://pixabay.com/ru/music/fireflies-120609/ by magiksolo
scene3 soundtrack: https://www.youtube.com/watch?v=whk7aEVgmBg 


Tilt: We tried to make each of our scenes have a different genre of play in order to support the unique experience of each scene as depicted in Grave of the Fireflies.
For example, scene 1 has a dropping tetris style of movement, scene 2 has a left to right movement, and scene 3 has a clicker heroes type gameplay with repetitive clicking.
*/

let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 538,
    scene: [Menu, Credits, Instructions1, Scene1, Instructions2, Scene2, Instructions3, Scene3],
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
