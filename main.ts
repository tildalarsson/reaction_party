radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 999) {
        if (Poängställning < 5) {
            basic.showIcon(IconNames.Sad)
        }
    }
})
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
            Poängställning += 1
            basic.showIcon(IconNames.Heart)
            basic.pause(2000)
        } else {
            basic.showIcon(IconNames.No)
            basic.pause(2000)
        }
    }
})
let Poängställning = 0
let Motor = false
let visapoäng = 1
Motor = true
radio.setGroup(18)
basic.forever(function () {
    if (visapoäng == 1) {
        basic.showNumber(Poängställning)
        if (Poängställning == 5) {
            visapoäng = 0
            radio.sendNumber(999)
            basic.showString("VINST!!!")
        }
    }
})
