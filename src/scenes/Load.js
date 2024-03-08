class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }


    preload() {
        this.load.image('bg', './assets/img/Background.png')
        this.load.spritesheet('spacePrompt', './assets/img/spacebar.png', {frameWidth: 32, frameHeight: 16})
        this.load.spritesheet('heart', './assets/img/Heart-Sheet.png', {frameWidth: 36, frameHeight: 36})
    }

    create() {
        


        // go to Title scene
        this.scene.start('titleScene')
    }
}