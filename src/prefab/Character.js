class Character extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame = 0, playerNum){
        super(scene, x, y, texture, frame)
        this.num = playerNum
        scene.add.existing(this)
        scene.physics.add.existing(this)

        /*scene. = new StateMachine('idle', {
            idle: new IdleState(),
            walk: new WalkState(),
            jump: new JumpState(),
            attack: new AttackState()
        }, [scene, this])*/
    }
}

class IdleState extends State {
    enter(scene, player) {
        player.anims.play('boss-idle')
    }

    execute(scene, boss) {
        const { KEYS } = scene

        // dodge
        if(Phaser.Input.Keyboard.JustDown(KEYS.JUMP)) {
            this.stateMachine.transition('jump')
        }

        // attack
        if(KEYS.LEFT.isDown || KEYS.RIGHT.isDown) {
            this.stateMachine.transition('walk')
            return
        }
    }
}
