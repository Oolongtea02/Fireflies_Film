class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
    }

   preload() {
    }

    create() {
        const startScene = new Button(525, 380, 'Scene 2', this, () => this.scene.start('Scene2'));

    }

    update() {
    
    }
  
}