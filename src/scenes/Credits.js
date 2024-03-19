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
            let start_prompt = this.add.sprite(centerX, h-45, 'spacePrompt', 0)
            start_prompt.scale = 3
            start_prompt.anims.play('space_prompt')
            this.add.bitmapText(centerX, h - 20, 'Pixel_font', 'Press Space to return', 15).setOrigin(0.5)

            this.title = this.add.bitmapText(centerX, 30, 'Pixel_font', 'Credits', 40).setOrigin(0.5)
            this.credits = this.add.bitmapText(centerX, centerY, 'Pixel_font', 'Gabriel Allen: Programming\nQizhe Lao:Art, Animations\n\nMusic:Demon King Spirit\n(yes that is how they want to be attributed)\n\nGameplay inspired by Arknights\' character Flametail\'s\nAchievement Star Skin Animations', 20).setOrigin(0.5)
        }

    update(){
        const { KEYS } = this
        if (Phaser.Input.Keyboard.JustDown(KEYS.SPACE)) {
            this.scene.start('titleScene')
            this.sound.play('click', { volume: 0.25 })
        }
    }
}