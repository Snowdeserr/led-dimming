input.onPinPressed(TouchPin.P1, function () {
    if (LED_Zustand == 1) {
        LED_Zustand = 0
    } else {
        LED_Zustand = 1
    }
})
let LED_Zustand = 0
LED_Zustand = 0
basic.forever(function () {
    if (LED_Zustand == 1) {
        pins.analogWritePin(AnalogPin.P0, pins.analogReadPin(AnalogPin.P2))
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
