class Scene2_5 extends Phaser.Scene {
    constructor() {
        super('Scene2_5');
    }

    preload() {
        this.load.image('bury', './assets/burial.png');
        this.load.audio('grave', './assets/music/fireflies.mp3');
    }

    create() {
        this.add.image(0, 0, 'bury').setOrigin(0, 0);

        this.sound.get('grave').stop();

        const startScene2 = new Button(630, 510, 'Next', this, () => this.scene.start('instruction3Scene'));

    }
}