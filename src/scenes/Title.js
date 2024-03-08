class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }

    create(){

    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.scene.start('pregameScene')
        }
    }
}