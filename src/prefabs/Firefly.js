class Firefly extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, texture, frame, pointValue, label)
    {
        super(scene, x, y, texture, frame)
        scene.add.existing(this);
        this.points = pointValue;   // store pointValue
        this.moveSpeed = 3;         // pixels per frame
            
        this.setScale(0.5)
    }

    update() {
        // move fireflies right
        this.x += this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.x > 800) {
            this.reset();
        }
    }

    reset() {
        this.x = 0;
        this.y = Phaser.Math.Between(10, 228);

    }
}