class Instructions2 extends Phaser.Scene {
    constructor() {
        super('instruction2Scene');
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

          this.add.text(400, 90, 'Scene 2 Instructions', explainConfig).setOrigin(0.5);
          this.add.text(400, 200, 'Press and click on the fireflies \n to catch them', subTextConfig).setOrigin(0.5);
          this.add.text(400, 300, 'The more you catch, the happier the siblings will be!', subTextConfig).setOrigin(0.5);
          this.add.text(400, 350, 'Night falls and the crickets are chirping', subTextConfig).setOrigin(0.5);

          const sceneButton = new Button(400, 420, 'Start Scene 2', this, () => this.scene.start('Scene2'));



    }
    
}