class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }


    preload() {
        // Load image
        this.load.image('bg', './assets/img/Background.png')
        this.load.image('solid', './assets/img/solid.png')
        this.load.spritesheet('spacePrompt', './assets/img/spacebar.png', {frameWidth: 32, frameHeight: 16})
        this.load.spritesheet('leftPrompt', './assets/img/left_prompt.png', {frameWidth: 10, frameHeight: 10})
        this.load.spritesheet('rightPrompt', './assets/img/right_prompt.png', {frameWidth: 10, frameHeight: 10})
        this.load.spritesheet('aPrompt', './assets/img/a_prompt.png', {frameWidth: 10, frameHeight: 10})
        this.load.spritesheet('dPrompt', './assets/img/d_prompt.png', {frameWidth: 10, frameHeight: 10})
        this.load.spritesheet('heart', './assets/img/Heart-Sheet.png', {frameWidth: 36, frameHeight: 36})
        this.load.spritesheet('player1', './assets/img/PlayerRed-Sheet.png', {frameWidth: 143, frameHeight: 128})
        this.load.spritesheet('player2', './assets/img/PlayerBlue-Sheet.png', {frameWidth: 143, frameHeight: 128})
        // Load audio
        this.load.audio('hit', "./assets/audio/temp_hit.wav")
        this.load.audio('click', './assets/audio/maou_se_system1.mp3')
        this.load.audio('attack', './assets/audio/maou_se_Attack.mp3')
        this.load.audio('bgm', './assets/audio/maou_bgm2.mp3')
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
            key:'left_prompt',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('leftPrompt', { start: 0, end: 1 }),
        })

        this.anims.create({
            key:'right_prompt',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('rightPrompt', { start: 0, end: 1 }),
        })

        this.anims.create({
            key:'a_prompt',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('aPrompt', { start: 0, end: 1 }),
        })

        this.anims.create({
            key:'d_prompt',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('dPrompt', { start: 0, end: 1 }),
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
            frameRate: 3,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('heart', { start: 0, end: 3 }),
        })
        // go to Title scene
        this.scene.start('keysScene')
    }
}