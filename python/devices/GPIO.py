import RPi.GPIO as GPIO
import helpers.commands as commands

if __name__ == "__main__":
    GPIO.setmode(GPIO.BOARD)
    pin: int = int(commands.getArgumentValue("GPIO_PIN"))
    output: int = int(commands.getArgumentValue("OUTPUT"))

    assert pin is not None
    assert output is not None
    GPIO.setup(pin, GPIO.OUT)

    if(output == 1):
        GPIO.output(pin, GPIO.HIGH)
        exit(1)

    if(output == 0):
        GPIO.output(pin, GPIO.LOW)
        exit(1)

    exit(0)
