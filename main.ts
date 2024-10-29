radio.onReceivedNumber(function (receivedNumber) {
    while (Enviado == 0) {
        basic.pause(100)
    }
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    basic.pause(2000)
    Enviado = 0
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    Enviado = 1
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    Enviado = 1
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    Enviado = 1
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
let Enviado = 0
radio.setGroup(1)
