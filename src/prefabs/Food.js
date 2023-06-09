class Food {
    constructor(x, y, label, scene, callback) {
        const foodItem = scene.add.image(x, y, label)
            .setOrigin(0.5)
            .setScale(0.3)
            //.setPadding(10)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
    }
}