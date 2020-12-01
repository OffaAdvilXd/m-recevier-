radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(4, 4)
    serial.writeValue("x", receivedNumber)
})
basic.showString("m-recevier")
radio.setGroup(24)
serial.writeLine("Acceleration")
serial.writeLine("Direction")
basic.forever(function () {
	
})
