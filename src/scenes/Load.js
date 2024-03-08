class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }


    preload() {
        
    }

    create() {
        
        

        // go to Title scene
        this.scene.start('titleScene')
    }
}