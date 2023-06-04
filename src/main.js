let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 538,
    scene: [Menu, Scene1, Scene2]
}

let game = new Phaser.Game(config);

//Set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//Reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;