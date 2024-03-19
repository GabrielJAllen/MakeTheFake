class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }

    create(){
        this.KEYS = this.scene.get('keysScene').KEYS
        let start_prompt = this.add.sprite(centerX, centerY+20, 'spacePrompt', 0)
        start_prompt.scale = 4
        start_prompt.anims.play('space_prompt')
        let credits_prompt = this.add.sprite(120 , centerY + 80, 'leftPrompt', 0)
        credits_prompt.scale = 3
        credits_prompt.anims.play('left_prompt')
        let tutorial_prompt = this.add.sprite( w - 120 , centerY + 80, 'rightPrompt', 0)
        tutorial_prompt.scale = 3
        tutorial_prompt.anims.play('right_prompt')
        
        //TEXT
        this.add.bitmapText(centerX, centerY - 32, 'Pixel_font', 'Flametail Fighter', 40).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 70, 'Pixel_font', 'Press Space to Play', 15).setOrigin(0.5)
        this.add.bitmapText(120, centerY + 100, 'Pixel_font', 'Press left to Credits', 15).setOrigin(0.5)
        this.add.bitmapText(w - 120, centerY + 100, 'Pixel_font', 'Press right to Tutorial', 15).setOrigin(0.5)

        if (this.textures.exists('transnapshot')) {
            this.tranSnap = this.add.image(centerX, centerY, 'transnapshot').setOrigin(0.5)
            let line = new Phaser.Geom.Line(0, 0, game.config.width + 30, 0);

            this.trans = this.add.particles(0, 0, 'solid', {
                speedY: 500,
                lifespan: 1000,
                frequency: 5,
                scale: 5,
                tint: [ 0xffffff, 0xadadad, 0x707070, 0x424242 ],
                emitZone: { type: 'edge', source: line, quantity: 12 },
                active:true,
                advance: -50
            })

            this.time.delayedCall(500, () => {[this.trans.emitting = false,this.tranSnap.alpha = 0]})
        }
    }

    update(){
        const { KEYS } = this
        if (Phaser.Input.Keyboard.JustDown(KEYS.SPACE)) {
            this.scene.start('playScene')
            this.sound.play('click', { volume: 0.25 })
        }
        if (Phaser.Input.Keyboard.JustDown(KEYS.ATTACK2)) {
            let textureManager = this.textures
            this.game.renderer.snapshot((snapshotImage) => {
            if(textureManager.exists('titlesnapshot')) {
                textureManager.remove('titlesnapshot')
            }
            textureManager.addImage('titlesnapshot', snapshotImage)})
            this.scene.start('creditsScene')
            this.sound.play('click', { volume: 0.25 })
        }
        if (Phaser.Input.Keyboard.JustDown(KEYS.DODGE2)) {
            let textureManager = this.textures
            this.game.renderer.snapshot((snapshotImage) => {
            if(textureManager.exists('titlesnapshot')) {
                textureManager.remove('titlesnapshot')
            }
            textureManager.addImage('titlesnapshot', snapshotImage)})
            this.scene.start('pregameScene')
            this.sound.play('click', { volume: 0.25 })
        }
    }
}