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