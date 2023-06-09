class Scene2 extends Phaser.Scene {
    /**  @type {Phaser.Physics.Arcade.Sprite} */
    setsuko

    /** @type {Phaser.GameObjects.Text} */
	fireflyCollectedText

    /** @type {Phaser.Physics.Arcade.Group} */
	fireflies

	firefliesCollected = 0


    constructor() {
        super('Scene2');
    }

    init() {
        this.firefliesCollected = 0;
    }

    preload() {
        this.load.image('fireflies', './assets/fireflies_bg.png');
        this.load.image('firefly', './assets/firefly.png');
        this.load.image('flares', './assets/particles/flares.png');
        //this.load.image('boy', './assets/seita.png');
        this.load.audio('grave', './assets/music/fireflies.mp3');
        this.load.audio('catch', './assets/music/firefly_catch.wav');
    }

    create() {
        this.add.image(0, 0, 'fireflies').setOrigin(0, 0);
        //this.firefly = this.add.sprite(0, 0, 'firefly').setScale(.2).setOrigin(0, 0).setInteractive();
        
        this.sound.play('grave', {loop: false, volume: 0.1});

        const startScene1 = new Button(630, 510, 'Scene 2.5', this, () => this.scene.start('Scene2_5'));


        this.firefly1 = new Firefly(this, 500, 300, 'firefly').setScale(.2).setOrigin(0.5, 0)
        this.firefly2 = new Firefly(this, 550, 400, 'firefly').setScale(.2).setOrigin(0.5, 0)
        this.firefly3 = new Firefly(this, 450, 200, 'firefly').setScale(.2).setOrigin(0.5, 0)
        this.firefly4 = new Firefly(this, 400, 100, 'firefly').setScale(.2).setOrigin(0.5, 0)

        this.firefly1.setVisible(true);
        this.firefly2.setVisible(true);
        this.firefly3.setVisible(true);
        this.firefly4.setVisible(true);

        this.mouse = this.input;

        this.click = this.input.on('firefly', this.onFireflyClicked);
        
        //this.physics.add.overlap(this.setsuko, this.fireflies, this.handleCollectFirefly, undefined, this);

        //this.click = new Button(0, 0, )
        this.firefliesCollectedText = this.add.text(140, 10, 'Fireflies', { color: '#ffffff', fontSize: 24 })
			.setScrollFactor(0)
			.setOrigin(0.5, 0)
        
            
        //this.add.particles(0, 0, 'flares', {speed: this.SPEED})
        this.input.on('pointerdown', (pointer) => {
            this.sound.play('catch');
            this.p1Score++;
            this.add.particles(pointer.x, pointer.y, 'flares', {
                lifespan: 10,
                speed: Phaser.Math.Between(this.SPEEDMIN, this.SPEEDMAX),
                tint: Math.random() * 0xFFFFFF,
                alpha: Phaser.Math.FloatBetween(0.25, 1)
            })
        })

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
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);

        this.gameOver = false;
        /*this.firefliesCollected = 0;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            this.clock--;
            this.add.text(game.config.width/2, game.config.height/2, 'Dawn is approaching', this.firefliesCollected).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Fireflies have left the scene', this.firefliesCollected).setOrigin(0.5);
            this.gameOver = true;
        }, null, this); */
        this.timerOver = false;

        //borrowed from Nathan Altice 'Scenesters' example
        let timeCount = 60
        let timerText = this.add.text(64, 96, `Time: ${timeCount}`)
        this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: function() {
                timeCount--
                timerText.text = `Time: ${timeCount}`
                if(timeCount <= 0){
                    timeCount = 0;
                    this.timerOver = true; // Setting our variable to true
                }
            }
        });
    }

    update() {
        if(!this.gameOver) {
            this.firefly1.update();
            this.firefly2.update();
            this.firefly3.update();
            this.firefly4.update();
        }
        if(this.onFireflyClicked(this.click, this.firefly1)) {
            this.firefly1.setVisible(false);
            this.firefly1.reset();
            this.p1Score++;
        }
        if(this.onFireflyClicked(this.click, this.firefly2)) {
            this.firefly2.setVisible(false);
            this.firefly2.reset();
            this.p1Score++;
        }
        if(this.onFireflyClicked(this.click, this.firefly3)) {
            this.firefly3.setVisible(false);
            this.firefly3.reset();
            this.p1Score++;
        }
        if(this.onFireflyClicked(this.click, this.firefly4)) {
            this.firefly4.setVisible(false);
            this.firefly4.reset();
            this.p1Score++;
        }
        if(this.input.on('pointerdown', this.onFireflyClicked)) {
            this.scoreLeft.text = this.p1Score;
        }
            
    }


    onFireflyClicked(pointer, firefly) {
        if (pointer.x < firefly.x + firefly.width && 
            pointer.x + pointer.width > firefly.x && 
            pointer.y < firefly.y + firefly.height &&
            pointer.height + pointer.y > firefly. y) {
                return true;
        } else {
            return false;
        }
    }
}