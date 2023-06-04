class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
      this.load.image('menuBackdrop', './assets/titlescreen.jpeg');
    }

    create() {
      this.add.image(0,0, 'menuBackdrop').setOrigin(0,0);
    }

    update() {
    }
}