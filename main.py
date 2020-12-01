def on_received_number(receivedNumber):
    led.toggle(4, 4)
    serial.write_value("x", 0)
radio.on_received_number(on_received_number)

basic.show_string("m-recevier")
radio.set_group(24)
serial.write_line("Acceleration")
serial.write_line("Direction")

def on_forever():
    pass
basic.forever(on_forever)
