// Character prefab
class Girl extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        //this.isMoving = false;
        this.moveSpeed = 2;
        //edge = false;
    }


    update() {
       
        if(keyLEFT.isDown && this.x >= borderUISize) {
            //console.log('LEFT IS PRESSED YALL');
            this.x -= this.moveSpeed;
        }else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            //console.log('RIGHT IS PRESSED YALL');
            this.x += this.moveSpeed;
        } 
       
        x = this.x;
        y = this.y;
    }
}