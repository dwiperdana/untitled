namespace SpriteKind {
    export const ball = SpriteKind.create()
}
function create_1pl () {
    armd = sprites.create(img`
1 1 1 1 
2 1 1 2 
1 1 1 1 
1 2 2 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
`, SpriteKind.Player)
    controller.moveSprite(armd, 0, 150)
    armd.setFlag(SpriteFlag.StayInScreen, true)
    armd.x = 10
}
function create_2pl () {
    dmra = sprites.create(img`
1 1 1 1 
8 1 1 8 
1 1 1 1 
1 8 8 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
`, SpriteKind.Player)
    dmra.setFlag(SpriteFlag.StayInScreen, true)
    controller.player2.moveSprite(dmra, 0, 150)
    dmra.x = 150
}
function create_balle () {
    mySprite2 = sprites.create(img`
. . . . 1 1 1 1 . . . . 
. . 1 1 1 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 . 
. 1 1 1 1 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 . 
. . 1 1 1 1 1 1 1 1 . . 
`, SpriteKind.ball)
    mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
    mySprite2.setVelocity(68, 68)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ball, function (sprite, otherSprite) {
    otherSprite.vx = 0 - otherSprite.vx
    scene.cameraShake(4, 500)
    if (sprite == armd) {
        otherSprite.left = sprite.right
        info.changeScoreBy(1)
    } else {
        otherSprite.right = sprite.left
        info.player2.changeScoreBy(1)
    }
})
let mySprite2: Sprite = null
let dmra: Sprite = null
let armd: Sprite = null
create_1pl()
create_2pl()
create_balle()
effects.clouds.startScreenEffect()
