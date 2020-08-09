let shake = 0
basic.showString("shake")
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        shake += 1
        basic.showString("" + (`${shake}`))
    }
})
