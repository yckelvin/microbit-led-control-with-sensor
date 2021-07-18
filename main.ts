basic.forever(function () {
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P2),
    1023
    )
    if (pins.analogReadPin(AnalogPin.P2) < 500) {
        pins.analogWritePin(AnalogPin.P0, 200)
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
