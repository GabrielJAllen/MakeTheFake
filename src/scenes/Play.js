class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create(){
        //this.sound.play('bgm', { volume: 0.25 })
        this.add.image(276, 162, 'bg').setScale(4);
        this.add.bitmapText(centerX, 20, 'Pixel_font', ':', 30).setOrigin(0.5)
        this.add.bitmapText(centerX - 30, 20, 'Pixel_font', '0', 30).setOrigin(0.5)
        this.add.bitmapText(centerX + 30, 20, 'Pixel_font', '0', 30).setOrigin(0.5)
        // set HP bar
        let p1heart1 = this.add.sprite(70, 30, 'heart', 0).setOrigin(0.5)
        p1heart1.anims.play('HeartIdle')
        let p1heart2 = this.add.sprite(100, 30, 'heart', 0).setOrigin(0.5)
        p1heart2.anims.play('HeartIdle')
        let p1heart3 = this.add.sprite(130, 30, 'heart', 0).setOrigin(0.5)
        p1heart3.anims.play('HeartIdle')
        let p2heart1 = this.add.sprite(482, 30, 'heart', 0).setOrigin(0.5)
        p2heart1.anims.play('HeartIdle')
        let p2heart2 = this.add.sprite(452, 30, 'heart', 0).setOrigin(0.5)
        p2heart2.anims.play('HeartIdle')
        let p2heart3 = this.add.sprite(422, 30, 'heart', 0).setOrigin(0.5)
        p2heart3.anims.play('HeartIdle')
        // set player
        let Player1 = this.add.sprite(centerX - 20, centerY + 50, 'player1', 0).setOrigin(0.5)
        Player1.anims.play('player1Idle')
        let Player2 = this.add.sprite(centerX + 20, centerY + 50, 'player2', 0).setOrigin(0.5)
        Player2.anims.play('player2Idle')
        
        
    }

    
}