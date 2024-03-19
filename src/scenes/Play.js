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
        this.trans = true
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
        this.Player1 = new Character(this, centerX - 30, centerY + 50, 'player1', 0, 1)
        this.attack1 = this.add.rectangle(0,0, 5, 5)
        this.physics.add.existing(this.attack1)
        
        this.Player2 = new Character(this, centerX + 30, centerY + 50, 'player2', 0, 2)
        this.attack2 = this.add.rectangle(0,0, 5, 5)
        this.physics.add.existing(this.attack2)

        this.round1 = this.add.bitmapText(centerX, centerY - 40, 'Pixel_font', 'Round 1', 40).setOrigin(0.5)
        this.round1.alpha = 0
        this.round2 = this.add.bitmapText(centerX, centerY - 40, 'Pixel_font', 'Round 2', 50).setOrigin(0.5)
        this.round2.alpha = 0
        this.round3 = this.add.bitmapText(centerX, centerY - 40, 'Pixel_font', 'Round 3', 40).setOrigin(0.5)
        this.round3.alpha = 0
        this.textScroll(this.round1)
    }

    update(){
        if( !this.trans ){
            const {KEYS} = this

            this.Player1SM.step()
            this.Player2SM.step()
            this.physics.world.overlap(this.attack1, this.Player2, (attack, player) => this.hit(this.attack1, this.Player2), null, this)
            this.physics.world.overlap(this.attack2, this.Player1, (attack, player) => this.hit(this.attack2, this.Player1), null, this)
        }
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

    /*jump(target){
        this.tweens.add({
            targets: target,
            x: centerX - 120,
            ease: "Sine.easeInOut",
            duration: 400,
            hold: 700,
            repeat:0,
            yoyo: true,
            onYoyo: () => { target.anims.play('player1Jump') }
        })
    }*/

    damage(target){
        this.tweens.add({
            targets: target,
            scale: [1, 1.5, 2],
            duration: 150,
            tint: [ 0xdb2a21, 0x75706f],
            repeat: 2,
            yoyo: true,
            onComplete: () => { target.tint = 0x75706f }
        })
    }

    textScroll(target){
        //Circ.easeIn
        this.tweens.add({
            targets: target,
            alpha: {from: 1, to: 0},
            duration: 1000,
            onComplete: () => { 
                this.reset()
            }
        }) 
    }

    reset(){
        this.p1heart1.anims.stop()
        this.p1heart2.anims.stop()
        this.p1heart3.anims.stop()
        this.p2heart1.anims.stop()
        this.p2heart2.anims.stop()
        this.p2heart3.anims.stop()
        this.p1heart1.anims.play('HeartIdle')
        this.p1heart2.anims.play('HeartIdle')
        this.p1heart3.anims.play('HeartIdle')
        this.p2heart1.anims.play('HeartIdle')
        this.p2heart2.anims.play('HeartIdle')
        this.p2heart3.anims.play('HeartIdle')
        this.p1heart1.setTint(0xffffff)
        this.p1heart2.setTint(0xffffff)
        this.p1heart3.setTint(0xffffff)
        this.p2heart1.setTint(0xffffff)
        this.p2heart2.setTint(0xffffff)
        this.p2heart3.setTint(0xffffff)
        this.Player1.setHEALTH(3)
        this.Player2.setHEALTH(3)
        this.trans = false
    }

    roundChange(winner){
        this.trans = true;
        if( winner == 1 ){
            this.ps1++
            this.score1.text = `${this.ps1}`
            if(this.ps1 == 2 ){
                tWinner = 1
                //go to gameover
                let textureManager = this.textures
                this.game.renderer.snapshot((snapshotImage) => {
                if(textureManager.exists('playsnapshot')) {
                    textureManager.remove('playsnapshot')
                }
                textureManager.addImage('playsnapshot', snapshotImage)
                this.bgm.stop()
                this.scene.start('gameoverScene')
            })
            } else {
                this.time.delayedCall(600, () => this.reset())
                if( this.ps1 + this.ps2 == 1){
                    this.textScroll(this.round2)
                } else {
                    this.textScroll(this.round3)
                }
            }
        } else {
            this.ps2++
            this.score2.text = `${this.ps2}`
            if(this.ps2 == 2){
                tWinner = 2
                //go to gameover
                let textureManager = this.textures
                this.game.renderer.snapshot((snapshotImage) => {
                if(textureManager.exists('playsnapshot')) {
                    textureManager.remove('playsnapshot')
                }
                textureManager.addImage('playsnapshot', snapshotImage)
                this.bgm.stop()
                this.scene.start('gameoverScene')
            })
            } else {
                this.time.delayedCall(600, () => this.reset())
                if( this.ps1 + this.ps2 == 1){
                    this.textScroll(this.round2)
                } else {
                    this.textScroll(this.round3)
                }
            }
        }
    }

    hit(attack, player){
        attack.setPosition(0,0)
        let health = player.getHEALTH()
        if(player.getNum() == 1){
            if(health == 3){
                player.setHEALTH(2)
                this.p1heart3.anims.play('HeartDamage')
                this.damage(this.p1heart3)
                this.sound.play('hit', { volume: 0.75 })
            }else if( health == 2){
                player.setHEALTH(1)
                this.p1heart2.anims.play('HeartDamage')
                this.damage(this.p1heart2)
                this.sound.play('hit', { volume: 0.75 })
            }else if(health == 1){
                player.setHEALTH(0)
                this.p1heart1.anims.play('HeartDamage')
                this.damage(this.p1heart1)
                this.sound.play('hit', { volume: 0.75 })
                this.roundChange(2)
            }
        }else{
            if(health == 3){
                player.setHEALTH(2)
                this.p2heart3.anims.play('HeartDamage')
                this.damage(this.p2heart3)
                this.sound.play('hit', { volume: 0.75 })
            }else if( health == 2){
                player.setHEALTH(1)
                this.p2heart2.anims.play('HeartDamage')
                this.damage(this.p2heart2)
                this.sound.play('hit', { volume: 0.75 })
            }else if(health == 1){
                player.setHEALTH(0)
                this.p2heart1.anims.play('HeartDamage')
                this.damage(this.p2heart1)
                this.sound.play('hit', { volume: 0.75 })
                this.roundChange(1)
            }
        }
    }
}

