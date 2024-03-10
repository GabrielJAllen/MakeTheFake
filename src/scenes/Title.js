class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }

    create(){
        this.KEYS = this.scene.get('keysScene').KEYS
        let start_prompt = this.add.sprite(centerX, centerY+20, 'spacePrompt', 0)
        start_prompt.scale = 4
        start_prompt.anims.play('space_prompt')
        
        //TEXT
        this.add.bitmapText(centerX, centerY - 32, 'Pixel_font', 'Flametail Fighter', 40).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 70, 'Pixel_font', 'Press Space to Select Character', 15).setOrigin(0.5)
    }

    update(){
        const { KEYS } = this
        if (Phaser.Input.Keyboard.JustDown(KEYS.SPACE)) {
            this.scene.start('playScene')
            //this.scene.start('pregameScene')
            this.sound.play('click', { volume: 0.25 })
        }
    }
}