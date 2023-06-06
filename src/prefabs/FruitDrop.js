class FruitDrop extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue;   // store pointValue
        this.moveSpeed = 1;         // pixels per frame
    }

    create(){
        this.changePosition();
    }

    update() {

        //this.changePosition();
        this.y += this.moveSpeed;

        if(this.y >= 538) {
            this.reset();
        }
    
        
    }

    //Position reset
    reset() {
        this.y = 0;
    }

    changePosition(){
        value = Phaser.Math.Between(0, 10);
        x = value;
    }
}
