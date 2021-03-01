function Dot (num: number) {
    for (let index = 0; index < num; index++) {
        music.playTone(294, dot_milliseconds)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(dot_milliseconds)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(short_pause)
    }
}
function Dash (num: number) {
    for (let index = 0; index < num; index++) {
        music.playTone(294, dash_milliseconds)
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.pause(dash_milliseconds)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(short_pause)
    }
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
function Code_In_Morse () {
    Dash(1)
    Dot(1)
    Dash(1)
    Dot(1)
    basic.pause(long_pause)
}
let long_pause = 0
let short_pause = 0
let dash_milliseconds = 0
let dot_milliseconds = 0
basic.showString("RA")
let Code = 0
dot_milliseconds = 100
dash_milliseconds = 200
let very_long_pause = 2000
short_pause = 200
long_pause = 500
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Code = 1
        Code_In_Morse()
    } else {
        Dot(1)
        basic.pause(very_long_pause)
    }
    basic.pause(long_pause)
})
