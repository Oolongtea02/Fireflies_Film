class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
    }

    count = 10; 

    //xCoord = 0;
    preload() {
        this.load.audio('happyAudio', './assets/music/firstaudio.mp3');
        this.load.image('background1', './assets/scene1background.jpeg');
        this.load.image('fruitd', './assets/fruitDrops.png');
        this.load.image('girl', './assets/girl.png');


    }

    create() {
        //this.music = this.sound.play('happyAudio', {loop: false, volume: 0.1});

        this.add.image(0,0, 'background1').setOrigin(0,0);

        this.p1 = new Girl(this, 300, 400, 'girl').setOrigin(0, 0);


        const startScene = new Button(630, 510, 'Scene 2', this, () => this.scene.start('Scene2'));
        if(startScene == true) {
            this.music.pause();
        }

        //Keyboard Mechanics
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.fruit1 = new FruitDrop(this, 200, 200, 'fruitd', 0, 30).setOrigin(0, 0);
        this.fruit2 = new FruitDrop(this, 500, 200, 'fruitd', 0, 30).setOrigin(0, 0);
        this.fruit3 = new FruitDrop(this, 600, 200, 'fruitd', 0, 30).setOrigin(0, 0);

         //Initialize score
         this.p1Score = 0;

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
        this.scoreLeft = this.add.text(30, 10, this.p1Score, scoreConfig);

        //GAME OVER flag
        this.gameOver = false;
        /*
         //60-second play clock
         scoreConfig.fixedWidth = 0;
         this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
             this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
             this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← to Menu', scoreConfig).setOrigin(0.5);
             this.gameOver = true;
         }, null, this);
*/  

    }

    update() {

        if(!this.gameOver){
            this.p1.update();
            this.fruit1.update();
            this.fruit2.update();
            this.fruit3.update();
        }

         //Check collisions
        if(this.checkCollision(this.p1, this.fruit1)) {
            this.fruit1.reset();
            this.p1Score++;
        }
        if (this.checkCollision(this.p1, this.fruit2)) {
            this.fruit2.reset();
            this.p1Score++;
        }
        if (this.checkCollision(this.p1, this.fruit3)) {
            this.fruit3.reset();
            this.p1Score++;
        }
        this.scoreLeft.text = this.p1Score; 

    }

    checkCollision(person, drops) {
        //Simple AABB checking
        if (person.x < drops.x + drops.width && 
            person.x + person.width > drops.x && 
            person.y < drops.y + drops.height &&
            person.height + person.y > drops.y) {
                return true;
        } else {
            return false;
        }
    }
  
}