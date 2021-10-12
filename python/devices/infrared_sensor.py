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

    def __setPinValue(self, newPinValue):
        self.pin = newPinValue

    def __setTimeoutValue(self, newtimeoutValue):
        self.timeout = newtimeoutValue

    def getTimeoutValue(self):
        return self.timeout

    def pinCleanup(self):
        GPIO.cleanup()
        self.__setPinValue(None)

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

    def waitUntilObjectDetected(self, timeout):
        """
            Stop the Script execution until the sensor detects an object, or the
            optional timeout is reached

            timeout: The max time, in milliseconds, that this function will stop the execution

            returns: Boolean value, whether the object was detected or not (None or True).
        """
        self.__setTimeoutValue(timeout)
        return GPIO.wait_for_edge(self.pin, GPIO.FALLING, timeout=self.timeout)


if __name__ == "__main__":
    GPIO.setmode(GPIO.BOARD)

    pin: int = commands.getArgumentValue("pin")
    timeout: int = commands.getArgumentValue("timeout_ms")
    objectDetected = None

    if(pin is None):
        print('No pin selected, sensor cannot be executed without specify a pin')
        exit(-1)

    IR = IRSensor(pin)

    if(timeout is None):
        objectDetected: int = IR.checkObjectDetected()
    else:
        objectDetected: int = IR.waitUntilObjectDetected(timeout)

    if objectDetected:
        print('Object Detection')
        IR.pinCleanup()
        exit(1)
    else:
        print('No Object Detection')
        IR.pinCleanup()
        exit(0)
