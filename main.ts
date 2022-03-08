input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    enemy.change(LedSpriteProperty.X, 1)
})
let enemy: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(4, 0)
enemy = game.createSprite(0, 0)
basic.forever(function () {
    if (player.isTouching(enemy)) {
        basic.showIcon(IconNames.Skull)
        game.gameOver()
    } else {
    	
    }
})
