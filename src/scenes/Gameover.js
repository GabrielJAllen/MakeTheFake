class Gameover extends Phaser.Scene {
    constructor() {
        super('gameoverScene')
    }

    create(){
        this.KEYS = this.scene.get('keysScene').KEYS

        if (this.textures.exists('playsnapshot')) {
            let playSnap = this.add.image(centerX, centerY, 'playsnapshot').setOrigin(0.5)
        } else {
            console.log('texture error')
        }
        if( tWinner == 1){
            let gfx = this.make.graphics().fillStyle(0x0000ff).fillRect(0, 0, w/2, h)
            gfx.generateTexture('bluerect', w/2, h)
            this.blueRect = this.add.image(276, h, 'bluerect').setOrigin(0)

            gfx = this.make.graphics().fillStyle(0xff0000).fillRect(0, 0, w/2, h)
            gfx.generateTexture('redrect', w/2, h)
            this.redRect = this.add.image(0, h, 'redrect').setOrigin(0)

            this.winText = this.add.bitmapText(centerX/2, centerY, 'Pixel_font', 'Player 1\nWins', 40).setOrigin(0.5)
            this.loseText = this.add.bitmapText(w * .75, centerY, 'Pixel_font', 'Player 2\nLoses', 40).setOrigin(0.5)
            this.winText.alpha = 0
            this.loseText.alpha = 0
        } else {
            let gfx = this.make.graphics().fillStyle(0x0000ff).fillRect(0, 0, w/2, h)
            gfx.generateTexture('bluerect', w/2, h)
            this.blueRect = this.add.image(0, h, 'bluerect').setOrigin(0)

            gfx = this.make.graphics().fillStyle(0xff0000).fillRect(0, 0, w/2, h)
            gfx.generateTexture('redrect', w/2, h)
            this.redRect = this.add.image(276, h, 'redrect').setOrigin(0)

            this.winText = this.add.bitmapText(centerX/2, centerY, 'Pixel_font', 'Player 1\nLoses', 40).setOrigin(0.5)
            this.loseText = this.add.bitmapText(w * .75, centerY, 'Pixel_font', 'Player 2\nWins', 40).setOrigin(0.5)
            this.winText.alpha = 0
            this.loseText.alpha = 0
        }
        let start_prompt = this.add.sprite(centerX, centerY+50, 'spacePrompt', 0)
        start_prompt.scale = 4
        start_prompt.anims.play('space_prompt')
        start_prompt.alpha = 0
        let blockTween = this.tweens.add({
            targets: [this.blueRect, this.redRect],
            y: [h, 0],
            ease: 'Linear',
            duration: 500,
            repeat: 0,
            onComplete: () => {
                textTween.play()
            }
        })
        let textTween = this.tweens.add({
            targets: [this.winText, this.loseText],
            alpha: 1,
            duration: 500,
            repeat: 0,
            onComplete: () => {
                start_prompt.alpha = .75
            }
        })
    }

    update(){
        const { KEYS } = this
        if (Phaser.Input.Keyboard.JustDown(KEYS.SPACE)) {
            this.scene.start('titleScene')
            this.sound.play('click', { volume: 0.25 })
        }
    }
}