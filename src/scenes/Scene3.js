class Scene3 extends Phaser.Scene {
    constructor() {
        super("Scene3");
    }

      //xCoord = 0;
    preload() {
    this.load.image('background3', './assets/scene3background.jpeg');
    this.load.image('girl', './assets/girl.png');

    }

    create() {
        //this.music = this.sound.play('happyAudio', {loop: false, volume: 0.1});

        this.add.image(50,50, 'background3').setOrigin(0,0);


        const foodItem = new Food(630, 510, 'girl', this, () => console.log("Girl is pressed"));
     

    }

   
}