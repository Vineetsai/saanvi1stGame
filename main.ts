let jump = 0
basic.showString("jump")
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        jump += 1
        basic.showString("" + (`${jump}`))
    }
})
