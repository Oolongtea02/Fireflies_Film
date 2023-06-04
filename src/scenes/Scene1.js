class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
    }

   preload() {
        this.load.audio('happyAudio', './assets/music/firstaudio.mp3');
    }

    create() {
        this.sound.play('happyAudio', {loop: false, volume: 0.1});

        const startScene = new Button(525, 380, 'Scene 2', this, () => this.scene.start('Scene2'));

    }

    update() {
    
    }
  
}