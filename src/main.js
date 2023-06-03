/* let config = ({
    type: Phaser.CANVAS,
    width: 680,
    height: 750,
    scene: [Scene2],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: true
        }
    }
}) */

let config = {
    type: Phaser.CANVAS,
    width: 1056, 
    height: 594,
    scene: [ Scene2 ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//set mouse control
let mouse;