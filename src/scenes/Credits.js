class Credits extends Phaser.Scene {
    constructor() {
        super('creditScene');
    }

    create() {
        const text = this.add.text(100, 180, 'Created by Tristyn Lai and Samuel Zhang \n music credits from pixabay', {
            fontFamily: 'Courier',
            fontSize: '28px',
            color: '#3c91d6',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        });

    }
    
}