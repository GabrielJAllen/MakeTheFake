class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create(){
        this.KEYS = this.scene.get('keysScene').KEYS
        this.bgm = this.sound.add('bgm', { 
            mute: false,
            volume: .3,
            rate: 1,
            loop: true 
        })
        this.bgm.play()
        this.add.image(276, 162, 'bg').setScale(4);
        this.add.bitmapText(centerX, 20, 'Pixel_font', ':', 30).setOrigin(0.5)
        this.score1 = this.add.bitmapText(centerX - 30, 20, 'Pixel_font', '0', 30).setOrigin(0.5)
        this.score2 = this.add.bitmapText(centerX + 30, 20, 'Pixel_font', '0', 30).setOrigin(0.5)
        this.ps1 = 0
        this.ps2 = 0
        // set HP bar
        this.p1heart1 = this.add.sprite(70, 30, 'heart', 0).setOrigin(0.5)
        this.p1heart1.anims.play('HeartIdle')
        this.p1heart2 = this.add.sprite(100, 30, 'heart', 0).setOrigin(0.5)
        this.p1heart2.anims.play('HeartIdle')
        this.p1heart3 = this.add.sprite(130, 30, 'heart', 0).setOrigin(0.5)
        this.p1heart3.anims.play('HeartIdle')
        this.p2heart1 = this.add.sprite(482, 30, 'heart', 0).setOrigin(0.5)
        this.p2heart1.anims.play('HeartIdle')
        this.p2heart2 = this.add.sprite(452, 30, 'heart', 0).setOrigin(0.5)
        this.p2heart2.anims.play('HeartIdle')
        this.p2heart3 = this.add.sprite(422, 30, 'heart', 0).setOrigin(0.5)
        this.p2heart3.anims.play('HeartIdle')
        // set player
        this.Player1 = new Character(this, centerX - 20, centerY + 50, 'player1', 0, 1)
        this.attack1 = this.add.rectangle(0,0, 5, 5)
        this.physics.add.existing(this.attack1)
        
        this.Player2 = new Character(this, centerX + 20, centerY + 50, 'player2', 0, 2)
        this.attack2 = this.add.rectangle(0,0, 5, 5)
        this.physics.add.existing(this.attack2)
    }

    update(){
        const {KEYS} = this

        this.Player1SM.step()
        this.Player2SM.step()
        this.physics.world.overlap(this.attack1, this.Player2, (attack, player) => this.hit(this.attack1, this.Player2), null, this)
        this.physics.world.overlap(this.attack2, this.Player1, (attack, player) => this.hit(this.attack2, this.Player1), null, this)
    }

    jitter(target){
        this.tweens.add({
            targets: target,
            x: target.x-1,
            ease: "Elastic.easeOut",
            duration: 200,
            repeat:0
        })
        target.setX(target.x + 1)
    }

    hit(attack, player){
        attack.setPosition(0,0)
        let health = player.getHEALTH()
        if(player.getNum() == 1){
            if(health == 3){
                player.setHEALTH(2)
                this.p1heart3.anims.play('HeartDamage')
                this.sound.play('hit', { volume: 0.5 })
            }else if( health == 2){
                player.setHEALTH(1)
                this.p1heart2.anims.play('HeartDamage')
                this.sound.play('hit', { volume: 0.5 })
            }else if(health == 1){
                player.setHEALTH(0)// temp later do round reset and win con checking
                this.p1heart1.anims.play('HeartDamage')
                this.sound.play('hit', { volume: 0.5 })
            }
        }else{
            if(health == 3){
                player.setHEALTH(2)
                this.p2heart3.anims.play('HeartDamage')
                this.sound.play('hit', { volume: 0.5 })
            }else if( health == 2){
                player.setHEALTH(1)
                this.p2heart2.anims.play('HeartDamage')
                this.sound.play('hit', { volume: 0.5 })
            }else if(health == 1){
                player.setHEALTH(0)// temp later do round reset and win con checking
                this.p2heart1.anims.play('HeartDamage')
                this.sound.play('hit', { volume: 0.5 })
            }
        }
    }
}

