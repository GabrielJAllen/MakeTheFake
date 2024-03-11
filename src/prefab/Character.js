class Character extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame = 0, playerNum){
        super(scene, x, y, texture, frame)
        this.NUM = playerNum
        scene.add.existing(this)
        scene.physics.add.existing(this)
        if(this.NUM == 1){
            this.body.setOffset(10, 0)
        }else{
            this.body.setOffset(85,0)
        }
        
        this.body.setSize(50, 128, false)

        if(this.NUM == 1){
            scene.Player1SM = new StateMachine('idle', {
                idle: new IdleState(),
                dodge: new DodgeState(),
                lightAttack: new LAttackState(),
            }, [scene, this])
        }else{
            scene.Player2SM = new StateMachine('idle', {
                idle: new IdleState(),
                dodge: new DodgeState(),
                lightAttack: new LAttackState(),
            }, [scene, this])
        }
    }

    getNum(){
        return this.NUM
    }
    setNX(x){
        this.setX(x)
        return
    }
}

class IdleState extends State {
    enter(scene, player) {
        player.anims.play(`player${player.getNum()}Idle`)
    }

    execute(scene, player) {
        const { KEYS } = scene
        if(player.getNum() == 1){
            //dodge
            if(Phaser.Input.Keyboard.JustDown(KEYS.DODGE1)) {
                this.stateMachine.transition('dodge')
            }
    
            // attack
            if(Phaser.Input.Keyboard.JustDown(KEYS.ATTACK1)) {
                this.stateMachine.transition('lightAttack')
                return
            }
        }else{
            //dodge
            if(Phaser.Input.Keyboard.JustDown(KEYS.DODGE2)) {
                this.stateMachine.transition('dodge')
            }
    
            // attack
            if(Phaser.Input.Keyboard.JustDown(KEYS.ATTACK2)) {
                this.stateMachine.transition('lightAttack')
                return
            }
        }
    }
}

class DodgeState extends State {
    enter(scene, player){
        if(player.getNum() == 1){
            
            player.setNX(centerX - 70)
            scene.time.delayedCall(400, () => {player.setNX(centerX-20)})
            scene.time.delayedCall(500, () => {this.stateMachine.transition('idle')})
        }else{
            player.setX(centerX + 70)
            scene.time.delayedCall(400, () => {player.setX(centerX+20)})
            scene.time.delayedCall(500, () => {this.stateMachine.transition('idle') })
        }
        
    }
}

class LAttackState extends State {
    enter(scene, player){
        if(player.getNum() == 1){
            player.anims.play('player1Attack')
        }else{
            player.anims.play('player2Attack')
        }
        scene.time.delayedCall(500, () => {this.stateMachine.transition('idle')})
    }
}
