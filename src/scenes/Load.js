class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }


    preload() {
        this.load.image('bg', './assets/img/Background.png')
        this.load.spritesheet('spacePrompt', './assets/img/spacebar.png', {frameWidth: 32, frameHeight: 16})
        this.load.spritesheet('heart', './assets/img/Heart-Sheet.png', {frameWidth: 36, frameHeight: 36})
        this.load.spritesheet('player', './assets/img/PlayerRed-Sheet.png', {frameWidth: 143, frameHeight: 128})
        this.load.audio('hit', "./assets/audio/temp_hit.wav")
    }

    create() {
        this.anims.create({
            key:'space_prompt',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('spacePrompt', { start: 0, end: 1 }),
        })
        // go to Title scene
        this.scene.start('keysScene')
    }
}