class Firefly extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture, frame, pointValue, label, callback)
    {
        super(scene, x, y, texture, frame)
        this.firefly = scene.add.image(x, y, label)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.firefliesCollected += 1)
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