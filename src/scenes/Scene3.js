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

        game.settings = {
            gameTimer: 60000
        }

        //Initialize score
        this.countScore = 0;

        //Display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#ff9933',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.countScore, scoreConfig);
        this.text = this.add.text(300,200);


        this.gameOver = false;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.gameOver = true;

        }, null, this);

        const cN = new Food(630, 300, 'corn', this, () => this.count += 2);
        const gO= new Food(170, 300, 'green', this, () => this.count += 2);
        const bL = new Food(400, 500, 'bowl', this, () => this.count += 1);

        this.sound.play('cook', {loop: false, volume: 0.1});
    }

    update(){
        this.scoreLeft.text = this.count; 

        if(this.gameOver) {
            this.text.setText("Despite making food for her, \n Setsuko passes away due to malnourishment...");
            this.sound.get('end').stop();
            const restartButton = new Button(450, 300, 'Click Here to Restart', this, () => this.scene.start('menuScene'));
        }

        if(this.count >= 50) {
            this.gameOver = true;
            this.count = 50;
            this.sound.get('end').stop();
            const restartButton = new Button(630, 510, 'Back to Menu', this, () => this.scene.start('menuScene'));
        }
    }

   
}