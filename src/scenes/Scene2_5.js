class Scene2_5 extends Phaser.Scene {
    constructor() {
        super('Scene2_5');
    }

    preload() {
        this.load.image('bury', './assets/burial.png');
    }

    create() {
        this.add.image(0, 0, 'bury').setOrigin(0, 0);
    }
}