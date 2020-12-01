radio.onReceivedValue(function (name, value) {
    led.toggle(4, 4)
    serial.writeValue(name, value)
})
basic.showString("Full Receiver")
radio.setGroup(24)
basic.forever(function () {
	
})
