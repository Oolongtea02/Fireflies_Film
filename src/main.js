let config = ({
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
}) 

let game = new Phaser.Game(config);

