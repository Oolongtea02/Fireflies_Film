class Instruction extends Phaser.Scene {
    constructor() {
        super('instructionScene');
    }

    create() {
        const text = this.add.text(100, 180, 'Scene1: Arrowkeys <-> to move left and right', {
            fontFamily: 'Courier',
            fontSize: '38px',
            color: '#3c91d6',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        });

        const text1 = this.add.text(50, 240, 'Scene2: Click to obtain fireflies', {
            fontFamily: 'Courier',
            fontSize: '28px',
            color: 'pink',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        });

        const text2 = this.add.text(50, 340, 'Scene3: ', {
            fontFamily: 'Courier',
            fontSize: '24px',
            color: '#3c91d6',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        });
    }
    
}