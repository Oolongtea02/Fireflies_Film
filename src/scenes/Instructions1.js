class Instructions1 extends Phaser.Scene {
    constructor() {
        super('instruction1Scene');
    }

    create() {
        let explainConfig = {
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

          let subTextConfig = {
            fontFamily: 'Georgia',
            fontSize: '30px',
            color: 'white', //#843605
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
          }

          this.add.text(400, 90, 'Scene 1 Instructions', explainConfig).setOrigin(0.5);
          this.add.text(400, 200, 'Use arrow keys <-> to move \nSetsuko(the little girl)', subTextConfig).setOrigin(0.5);
          this.add.text(400, 300, 'The more fruit drops you catch, the less hungry she\'ll be!', subTextConfig).setOrigin(0.5);

          const sceneButton = new Button(400, 380, 'Start Scene 1', this, () => this.scene.start('Scene1'));



    }
    
}