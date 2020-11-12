input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
function AlertaHumedad2 () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(100)
    basic.showArrow(ArrowNames.North)
    basic.pause(100)
    basic.clearScreen()
}
function AlertaTemperatura () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showArrow(ArrowNames.South)
    basic.pause(100)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
function AlertaHumedad () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(100)
    basic.showArrow(ArrowNames.South)
    basic.pause(100)
    basic.clearScreen()
}
function AlertaTemperatura2 () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showArrow(ArrowNames.North)
    basic.pause(100)
    basic.clearScreen()
}
basic.forever(function () {
    while (input.temperature() < 8) {
        AlertaTemperatura()
    }
    while (input.temperature() > 30) {
        AlertaTemperatura2()
    }
    while (pins.analogReadPin(AnalogPin.P0) < 200) {
        AlertaHumedad()
    }
    while (pins.analogReadPin(AnalogPin.P0) > 600) {
        AlertaHumedad2()
    }
})
