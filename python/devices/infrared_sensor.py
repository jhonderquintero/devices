import RPi.GPIO as GPIO
import helpers.commands as commands


class IRSensor:
    """
      Class that represents a Infra Red sensor
    """
    pin: int = None
    timeout: int = None

    def __init__(self, pin: int):
        assert pin is not None
        self.pin = pin
        GPIO.setup(pin, GPIO.IN)

    def checkObjectDetected(self):
        """
        Checks whether an object is currently placed in front of the sensor.
        returns GPIO.HIGH or GPIO.LOW accordingly.
        """
        if GPIO.input(self.pin):
            return GPIO.LOW
        else:
            return GPIO.HIGH


if __name__ == "__main__":
    GPIO.setmode(GPIO.BOARD)

    pin: int = commands.getArgumentValue("pin")
    timeout: int = commands.getArgumentValue("timeout_ms")

    if(pin is None):
        print('No pin selected, sensor cannot be executed without specify a pin')
        exit(-1)

    IR = IRSensor(pin)

    objectDetected: int = IR.checkObjectDetected()

    if objectDetected:
        print('Object Detection')
        exit(1)
    else:
        print('No Object Detection')
        exit(0)
