class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }

    preload() {
        this.load.image('fireflies', './assets/fireflies_bg.png');
        this.load.image('firefly', './assets/firefly.png');
        this.load.audio('grave', './assets/music/fireflies_bgm.mp3');
    }

    create() {
        this.add.image(0, 0, 'fireflies').setOrigin(0, 0);
        this.sound.play('grave', {loop: false, volume: 0.1});

    }

    update() {

    }
}