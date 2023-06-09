class Instructions3 extends Phaser.Scene {
    constructor() {
        super('instruction3Scene');
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

          this.add.text(400, 90, 'Scene 3 Instructions', explainConfig).setOrigin(0.5);
          this.add.text(400, 200, 'Click on the ingredients that appear \n to make food', subTextConfig).setOrigin(0.5);
          this.add.text(400, 300, 'You do not want to make Setsuko starve!', subTextConfig).setOrigin(0.5);
          this.add.text(400, 350, 'Dawn is approaching', subTextConfig).setOrigin(0.5);

          const sceneButton = new Button(400, 420, 'Start Scene 3', this, () => this.scene.start('Scene3'));



    }
    
}