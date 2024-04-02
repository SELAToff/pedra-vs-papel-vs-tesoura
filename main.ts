let X = 0
input.onGesture(Gesture.Shake, function () {
    X += randint(0, 2)
    if (X == 0) {
        music.play(music.stringPlayable("E B C5 A B G A F ", 500), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (X == 1) {
        music.play(music.stringPlayable("G F G A - F E D ", 500), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        music.play(music.stringPlayable("E D G F B A C5 B ", 500), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
})
