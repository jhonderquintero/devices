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

    def setPinValue(self, newPinValue):
        self.pin = newPinValue

    def setTimeoutValue(self, newtimeoutValue):
        self.timeout = newtimeoutValue

    def getTimeoutValue(self):
        return self.timeout

    def checkObjectDetected(self):
        """
        Checks whether an object is currently placed in front of the sensor.
        returns GPIO.HIGH or GPIO.LOW accordingly.
        If detect an object returns GPIO.LOW
        else returns GPIO.HIGH
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

    if(timeout is None):
        objectDetected: int = IR.checkObjectDetected()

        if objectDetected:
            print('Object Detection')
            exit(1)
        else:
            print('No Object Detection')
            exit(0)
    else:
        IR.setTimeoutValue(timeout)
        print(IR.getTimeoutValue, "timeoutValue")
