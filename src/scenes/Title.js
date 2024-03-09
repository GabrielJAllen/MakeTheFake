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
        //need Title in the top center "Flametail Fighter" for now until we decide a name
        //below the spacebar animation "Press Space to Character Select"
    }

    update(){
        const { KEYS } = this
        if (Phaser.Input.Keyboard.JustDown(KEYS.SPACE)) {
            this.scene.start('pregameScene')
        }
    }
}