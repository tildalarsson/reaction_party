input.onButtonPressed(Button.A, function () {
    if (Motor) {
        radio.sendValue(control.deviceName(), 1)
        Motor = false
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (Motor) {
        radio.sendValue(control.deviceName(), 5)
        Motor = false
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Motor) {
        radio.sendValue(control.deviceName(), 3)
        Motor = false
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Ny runda!") {
        Motor = true
    }
})
input.onButtonPressed(Button.B, function () {
    if (Motor) {
        radio.sendValue(control.deviceName(), 2)
        Motor = false
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Motor) {
        radio.sendValue(control.deviceName(), 4)
        Motor = false
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (Motor) {
        radio.sendValue(control.deviceName(), 6)
        Motor = false
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == control.deviceName()) {
        if (value == 111) {
            basic.showString("Rätt!",50)
Poängställning += 1
        } else {
            basic.showString("Fel!",50)
        }
    }
})
let Poängställning = 0
let Motor = false
Motor = true
basic.forever(function () {
    radio.setGroup(18)
    basic.showNumber(Poängställning)
})
