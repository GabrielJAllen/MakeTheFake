class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene')
    }

    create(){
        this.KEYS = this.scene.get('keysScene').KEYS

        //if (this.textures.exists('playsnapshot')) {
        //    let playSnap = this.add.image(centerX, centerY, 'playsnapshot').setOrigin(0.5)
        //} else {
        //    console.log('texture error')
        //}
            let start_prompt = this.add.sprite(centerX, h-50, 'spacePrompt', 0)
            start_prompt.scale = 3
            start_prompt.anims.play('space_prompt')
            this.add.bitmapText(centerX, h - 20, 'Pixel_font', 'Press Space to return', 15).setOrigin(0.5)

            this.title = this.add.bitmapText(centerX, 30, 'Pixel_font', 'Credits', 40).setOrigin(0.5)
            this.credits = this.add.bitmapText(centerX, centerY, 'Pixel_font', 'Gabriel Allen: Programming\nQizhe Lao:Art, Animations\n\nMusic&FX:Demon King Spirit\n(yes that is how their site said to attribute them)\n\nGameplay inspired by Arknights\' character Flametail\'s\nAchievement Star Skin Animations', 20).setOrigin(0.5)
        
            if (this.textures.exists('titlesnapshot')) {
                this.titleSnap = this.add.image(centerX, centerY, 'titlesnapshot').setOrigin(0.5)
            } else {
                console.log('texture error')
            }
    
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
    
            this.time.delayedCall(500, () => {[this.trans.emitting = false,this.titleSnap.alpha = 0]})
        }

    update(){
        const { KEYS } = this
        if (Phaser.Input.Keyboard.JustDown(KEYS.SPACE)) {
            let textureManager = this.textures
            this.game.renderer.snapshot((snapshotImage) => {
            if(textureManager.exists('transnapshot')) {
                textureManager.remove('transnapshot')
            }
            textureManager.addImage('transnapshot', snapshotImage)})
            this.scene.start('titleScene')
            this.sound.play('click', { volume: 0.25 })
        }
    }
}