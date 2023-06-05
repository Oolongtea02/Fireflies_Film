class Scene2 extends Phaser.Scene {
    /**  @type {Phaser.Physics.Arcade.Sprite} */
    setsuko

    /** @type {Phaser.GameObjects.Text} */
	fireflyCollectedText

    /** @type {Phaser.Physics.Arcade.Group} */
	fireflies

	firefliesCollected = 0

	/** @type {Phaser.GameObjects.Text} */
	firefliesCollectedText


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
        this.load.audio('grave', './assets/music/fireflies.mp3');
        this.load.audio('catch', './assets/music/firefly_catch.wav');
    }

    create() {
        this.add.image(0, 0, 'fireflies').setOrigin(0, 0);
        this.firefly = this.add.sprite(0, 0, 'firefly').setScale(.2).setOrigin(0, 0).setInteractive();
        this.firefly1 = new Firefly(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'firefly').setOrigin(0.5, 0);
        this.sound.play('grave', {loop: false, volume: 0.1});

        this.mouse = this.input;

        //this.click = new Button(0, 0, )
        this.carrotsCollectedText = this.add.text(240, 10, 'Fireflies: 0', { color: '#ffffff', fontSize: 24 })
			.setScrollFactor(0)
			.setOrigin(0.5, 0)
        
        this.add.particles(0, 0, 'flares', {speed: this.SPEED})
        this.input.on('pointerdown', (pointer) => {
            this.sound.play('catch');
            this.add.particles(pointer.x, pointer.y, 'flares', {
                speed: Phaser.Math.Between(this.SPEEDMIN, this.SPEEDMAX),
                tint: Math.random() * 0xFFFFFF,
                alpha: Phaser.Math.FloatBetween(0.25, 1)
            })
        })

        //borrowed from Nathan Altice 'Scenesters' example
        let timeCount = 60
        let timerText = this.add.text(64, 96, `Time: ${timeCount}`)
        this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: function() {
                timeCount--
                timerText.text = `Time: ${timeCount}`
            }
        });
    }

    update() {

    }

    /**
	 * 
	 *  
	 * @param {Firefly} firefly
	 */
	handleCollectCarrot(firefly)
	{
		this.fireflies.killAndHide(firefly);

		this.sound.play('catch');

		this.physics.world.disableBody(firefly.body);

		this.firefliesCollected++;

		this.firefliesCollectedText.text = `Fireflies: ${this.firefliesCollected};`
	}

    
    /* fireflyCaught(firefly) {
        this.emitter = this.add.particles(400, 250, 'flares', {
            frame: [ 'red', 'yellow', 'green' ],
            lifespan: 1000,
            speed: { min: 150, max: 250 },
            scale: { start: 0.8, end: 0 },
            gravityY: 150,
            blendMode: 'ADD',
            emitting: true
        }); 
    } */
}