class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
    }

    count = 20; 

    preload() {
        this.load.audio('happyAudio', './assets/music/firstaudio.mp3');
        this.load.image('background1', './assets/scene1background.jpeg');
        this.load.image('fruitd', './assets/fruitDrops.png');
        this.load.image('girl', './assets/girl.png');
        this.load.audio('fruitdrop', './assets/music/fruit_drop.wav');


    }

    create() {
        this.sound.play('happyAudio', {loop: false, volume: 0.1});

        this.add.image(0,0, 'background1').setOrigin(0,0);

        this.p1 = new Girl(this, 300, 400, 'girl').setOrigin(0, 0);

        game.settings = {
            gameTimer: 60000
        }

        const nextButton = new Button(450, 350, 'Next Scene', this, () => this.scene.start('instruction2Scene'));

        
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
        this.scoreLeft = this.add.text(30, 10, this.count, scoreConfig);
        this.text = this.add.text(300,200);


        //GAME OVER flag
        this.gameOver = false;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.gameOver = true;

        }, null, this);
    }

    update() {

        if(this.gameOver == true || this.count == 0){
            this.resultOfGame();
        }
        
        if(!this.gameOver){
            this.p1.update();
            this.fruit1.update();
            this.fruit2.update();
            this.fruit3.update();
        }

         //Check collisions
        if(this.checkCollision(this.p1, this.fruit1)) {
            this.music = this.sound.play('fruitdrop');
            this.fruit1.reset();
            this.count--;
            //this.p1Score--;
        }
        if (this.checkCollision(this.p1, this.fruit2)) {
            this.music = this.sound.play('fruitdrop');
            this.fruit2.reset();
            this.count--;
        }
        if (this.checkCollision(this.p1, this.fruit3)) {
            this.music = this.sound.play('fruitdrop');
            this.fruit3.reset();
            this.count--;
        }
        this.scoreLeft.text = this.count; 

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

    resultOfGame(){
        if(this.gameOver){
            this.text.setText("Setsuko is left hungry. You failed.");
            this.sound.get('happyAudio').stop();
            const restartButton = new Button(450, 300, 'Click Here to Restart', this, () => this.scene.restart("Scene1"));
            const nextButton = new Button(450, 350, 'Next Scene', this, () => this.scene.start('instruction2Scene'));
        }
        if(this.count == 0){
            this.gameOver = true;
            this.text.setText("Good job! You fed Setsuko!");
            this.sound.get('happyAudio').stop();
            const restartButton = new Button(450, 300, 'Click Here to Play Again', this, () => this.scene.restart("Scene1"));
            const nextButton = new Button(450, 350, 'Next Scene', this, () => this.scene.start('instruction2Scene'));
        }
    }
  
}