import RPi.GPIO as GPIO
import helpers.commands as commands

if __name__ == "__main__":
    GPIO.setmode(GPIO.BOARD)
    pin: int = int(commands.getArgumentValue("GPIO_PIN"))
    output: int = int(commands.getArgumentValue("OUTPUT"))

    assert pin is not None
    assert output is not None

    if(output == 1 | output == 0):
      GPIO.setup(pin, GPIO.OUT)
      GPIO.output(pin, output)
      exit(1)
    else:
        exit(0)