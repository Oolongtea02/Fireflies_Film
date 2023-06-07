class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
      this.load.image('menuBackdrop', './assets/titlescreen.jpeg');
    }

    create() {
      this.add.image(0,0, 'menuBackdrop').setOrigin(0,0);
      
      const startButton = new Button(525, 380, 'Start Game', this, () => this.scene.start('instruction1Scene'));
      const creditButton = new Button(525, 420, 'Credit Page', this, () => this.scene.start('instructionScene'));

      keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

      
      let menuConfig = {
        fontFamily: 'Georgia',
        fontSize: '40px',
        color: 'white', //#843605
        align: 'center',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
      }
      
      this.add.text(400, 90, 'Graveyard Of The Fireflies', menuConfig).setOrigin(0.5);
      
    }

    update() {
      if(keyS.isDown) {
        //console.log('LEFT IS PRESSED YALL');
        this.scene.start('Scene3')
    }
    }
}