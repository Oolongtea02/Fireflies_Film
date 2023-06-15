class Scene3 extends Phaser.Scene {
    constructor() {
        super("Scene3");
    }

    count = 0;
      //xCoord = 0;
    preload() {
    this.load.image('background3', './assets/scene3background.jpeg');
    this.load.image('corn', './assets/corn.png');
    this.load.image('cookingPot', './assets/ricePot.png');
    this.load.image('bowl', './assets/rice_bowl.png');
    this.load.image('green', './assets/greenonion.png');
    this.load.audio('cook', './assets/music/cook.wav');
    this.load.audio('end', './assets/music/ending_bgm.mp3');
    
    }

    create() {
        this.music = this.sound.play('end', {loop: false, volume: 0.1});

        this.add.image(0, 0, 'background3').setOrigin(0,0);

        //const P = new Food(400, 300, 'pot', this, () => console.log("Girl is pressed"));
        const cP = new Food(400, 300, 'cookingPot', this, () => this.count += 1);

        let subTextConfig = {
            fontFamily: 'Georgia',
            fontSize: '28px',
            color: 'white', //#843605
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
          }

        this.add.text(400, 100, 'Tap Cooking Pot To Start', subTextConfig).setOrigin(0.5);

        const cN = new Food(630, 300, 'corn', this, () => this.count += 1);
        const gO= new Food(170, 300, 'green', this, () => this.count += 1);
        const bL = new Food(400, 500, 'bowl', this, () => this.count += 1);

        cP.on('pointerdown', () => this.sound.play('cook', {loop: false, volume: 0.1}));
    }

    update(){
        console.log(this.count);
    }

   
}