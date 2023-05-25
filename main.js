let config = ({
    type: Phaser.AUTO,
    width: 680,
    height: 750,
    scene: [Menu],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: -200
            },
            debug: true
        }
    }
})

let game = new Phaser.Game(config);