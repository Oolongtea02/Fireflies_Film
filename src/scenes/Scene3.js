class Scene3 extends Phaser.Scene {
    constructor() {
        super("Scene3");
    }

      //xCoord = 0;
    preload() {
    this.load.image('background3', './assets/scene3background.jpeg');
    //this.load.image('corn', './assets/corn.jpeg');
    this.load.image('pot', './assets/ricePot.png');
    //this.load.image('bowl', 'rice_bowl.jpeg');
    //this.load.image('green', 'greenonion.png');
    
    }

    create() {
        //this.music = this.sound.play('happyAudio', {loop: false, volume: 0.1});

        this.add.image(0, 0, 'background3').setOrigin(0,0);

        const cP = new Food(400, 300, 'pot', this, () => console.log("Girl is pressed"));

        /*const cP = new Food(630, 400, 'cookingPot', this, () => console.log("Girl is pressed"));
        const cN = new Food(630, 300, 'corn', this, () => console.log("Girl is pressed"));
        const gO= new Food(630, 500, 'green', this, () => console.log("Girl is pressed"));
        const bL = new Food(630, 610, 'bowl', this, () => console.log("Girl is pressed"));*/



     

    }

   
}