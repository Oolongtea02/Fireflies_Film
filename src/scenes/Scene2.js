class Scene2 extends Phaser.Scene {
    /**  @type {Phaser.Physics.Arcade.Sprite} */
    firefly

    constructor() {
        super('Scene2');
    }

    preload() {
        this.load.image('fireflies', './assets/fireflies_bg.png');
        this.load.image('firefly', './assets/firefly.png');
        this.load.image('flares', './assets/particles/flares.png');
        this.load.audio('grave', './assets/music/fireflies_bgm.mp3');
    }

    create() {
        this.add.image(0, 0, 'fireflies').setOrigin(0, 0);
        this.add.image(0, 0, 'firefly').setOrigin(0, 0);
        this.sound.play('grave', {loop: false, volume: 0.1});

        mouse = this.input;


    }

    update() {

    }

    fireflyCaught(firefly) {
        this.emitter = this.add.particles(400, 250, 'flares', {
            frame: [ 'red', 'yellow', 'green' ],
            lifespan: 1000,
            speed: { min: 150, max: 250 },
            scale: { start: 0.8, end: 0 },
            gravityY: 150,
            blendMode: 'ADD',
            emitting: true
        });
    }
}