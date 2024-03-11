class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }


    preload() {
        // Load image
        this.load.image('bg', './assets/img/Background.png')
        this.load.spritesheet('spacePrompt', './assets/img/spacebar.png', {frameWidth: 32, frameHeight: 16})
        this.load.spritesheet('heart', './assets/img/Heart-Sheet.png', {frameWidth: 36, frameHeight: 36})
        this.load.spritesheet('player1', './assets/img/PlayerRed-Sheet.png', {frameWidth: 143, frameHeight: 128})
        this.load.spritesheet('player2', './assets/img/PlayerBlue-Sheet.png', {frameWidth: 143, frameHeight: 128})
        // Load audio
        this.load.audio('hit', "./assets/audio/temp_hit.wav")
        this.load.audio('click', './assets/audio/maou_se_system1.mp3')
        this.load.audio('bgm', './assets/audio/maou_bgm1.mp3')
        // Load font
        this.load.bitmapFont('Pixel_font', './assets/font/Pixel.png', './assets/font/Pixel.xml')
    }

    create() {
        this.anims.create({
            key:'space_prompt',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('spacePrompt', { start: 0, end: 1 }),
        })

        this.anims.create({
            key:'player1Attack',
            frameRate: 5,
            repeat: 1,
            frames: this.anims.generateFrameNumbers('player1', { frames:[0,1,0] }),
        })
        this.anims.create({
            key:'player1Idle',
            frameRate: 1,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('player1', { frames:[0] }),
        })

        this.anims.create({
            key:'player2Attack',
            frameRate: 5,
            repeat: 1,
            frames: this.anims.generateFrameNumbers('player2', { frames:[0,1,0] }),
        })
        this.anims.create({
            key:'player2Idle',
            frameRate: 1,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('player2', { frames:[0] }),
        })
        this.anims.create({
            key:'HeartIdle',
            frameRate: 1,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('heart', { frames:[0] }),
        })
        this.anims.create({
            key:'HeartDamage',
            frameRate: 1,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('heart', { start: 0, end: 3 }),
        })
        // go to Title scene
        this.scene.start('keysScene')
    }
}