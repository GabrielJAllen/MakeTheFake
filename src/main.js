let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    height: 274,
    width: 552,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    zoom: 2,
    scene: [ Load , Keys, Title , Pregame, Play, Gameover ]
}
let game = new Phaser.Game(config)

// define globals
let centerX = game.config.width/2
let centerY = game.config.height/2
let w = game.config.width
let h = game.config.height
let tWinner = 0