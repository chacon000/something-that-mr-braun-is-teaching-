controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    moving_left = false
})
let projectile: Sprite = null
let moving_left = false
moving_left = false
game.onUpdateInterval(500, function () {
    if (moving_left) {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 3 . . . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . . . . 3 3 3 . . . . . 
. . . . . . . . . . 3 3 . . . . 
. . . . . . . . . . . 3 3 . . . 
. . . . . . . . . . . . 3 3 . . 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . . . . . . . . . 3 3 3 . . 
. . . . . . . . 3 3 3 3 . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . 3 3 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, projectile, Math.randomRange(0, 100), Math.randomRange(80, 80))
    } else {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . 3 3 . . . . . . . . . 
. . . . 3 3 . . . . . . . . . . 
. . . 3 . . . . . . . . . . . . 
. . 3 . . . . . . . . . . . . . 
3 3 . . . . . . . . . . . . . . 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 . . . . . . . . . . . . . . . 
. 3 . . . . . . . . . . . . . . 
. 3 . . . . . . . . . . . . . . 
. 3 . . . . . . . . . . . . . . 
. 3 3 . . . . . . . . . . . . . 
. . 3 3 . . . . . . . . . . . . 
. . . . 3 3 . . . . . . . . . . 
`, projectile, Math.randomRange(0, -100), Math.randomRange(50, 80))
    }
})
