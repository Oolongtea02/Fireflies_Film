class Firefly extends Phaser.Physics.Arcade.Sprite
{
    /**
	 * @param {Phaser.Scene} scene 
	 * @param {number} x 
	 * @param {number} y 
	 * @param {string} texture 
	 */
    constructor(scene, x, y, texture = 'firefly')
    {
        super(scene, x, y, texture)

        this.setScale(0.5)
    }

    update() {
        // move fireflies right
        this.x += this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.x >= 0 + this.width) {
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}