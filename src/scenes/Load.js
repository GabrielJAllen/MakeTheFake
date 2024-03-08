class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }


    preload() {
        this.load.spritesheet('spacePrompt', './assets/img/spacebar.png', {frameWidth: 32, frameHeight: 16})
    }

    create() {
        


        // go to Title scene
        this.scene.start('titleScene')
    }
}