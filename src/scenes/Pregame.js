class Pregame extends Phaser.Scene {
    constructor() {
        super('pregameScene')
    }

    create(){
        this.KEYS = this.scene.get('keysScene').KEYS
        let start_prompt = this.add.sprite(centerX, centerY+70, 'spacePrompt', 0)
        start_prompt.scale = 4
        start_prompt.anims.play('space_prompt')
        this.add.bitmapText(centerX, centerY + 120, 'Pixel_font', 'Press Space to Play', 15).setOrigin(0.5)

        this.add.bitmapText(120, 40, 'Pixel_font', 'Player 1 Controls', 20).setOrigin(0.5)
        let a_prompt = this.add.sprite(60, 80, 'aPrompt', 0)
        a_prompt.scale = 3
        a_prompt.anims.play('a_prompt')
        this.add.bitmapText(60, 120, 'Pixel_font', 'A to Dodge', 15).setOrigin(0.5)

        let d_prompt = this.add.sprite(180, 80, 'dPrompt', 0)
        d_prompt.scale = 3
        d_prompt.anims.play('d_prompt')
        this.add.bitmapText(180, 120, 'Pixel_font', 'D to Attack', 15).setOrigin(0.5)

        this.add.bitmapText(game.config.width-120, 40, 'Pixel_font', 'Player 2 Controls',20).setOrigin(0.5)
        let right_prompt = this.add.sprite(game.config.width-60, 80, 'rightPrompt', 0)
        right_prompt.scale = 3
        right_prompt.anims.play('right_prompt')
        this.add.bitmapText(game.config.width-60, 120, 'Pixel_font', 'Right to Dodge', 15).setOrigin(0.5)

        let left_prompt = this.add.sprite(game.config.width-180, 80, 'leftPrompt', 0)
        left_prompt.scale = 3
        left_prompt.anims.play('left_prompt')
        this.add.bitmapText(game.config.width-180, 120, 'Pixel_font', 'Left to Attack', 15).setOrigin(0.5)

        let line = new Phaser.Geom.Line(0, 0, game.config.width + 30, 0);

        this.trans = this.add.particles(0, 0, 'solid', {
            speedY: 500,
            lifespan: 1000,
            frequency: 5,
            scale: 5,
            tint: [ 0xffff00, 0xff0000, 0x00ff00, 0x00ffff, 0x0000ff ],
            emitZone: { type: 'edge', source: line, quantity: 12 },
            active:false,
            advance: 0
        })
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