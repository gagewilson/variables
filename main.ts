input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onGesture(Gesture.TiltLeft, function () {
    Ferdinand.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.TiltRight, function () {
    Ferdinand.change(LedSpriteProperty.X, 1)
})
let Ferdinand: game.LedSprite = null
let number = 0
basic.showIcon(IconNames.House)
number = 8
basic.showNumber(number)
Ferdinand = game.createSprite(2, 2)
