class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
      this.load.image('menuBackdrop', './assets/titlescreen.jpeg');
    }

    create() {
      this.add.image(0,0, 'menuBackdrop').setOrigin(0,0);
      
      const startButton = new Button(525, 380, 'Start Game', this, () => this.scene.start('Scene1'));
      const InstructionButton = new Button(525, 420, 'Instructions', this, () => this.scene.start('instructionScene'));   
    }

    update() {
    }
}