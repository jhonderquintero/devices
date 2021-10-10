from time import sleep
import RPi.GPIO as GPIO
import sys

class ServoMotor:
    """Class representing the Servo Motor device"""
    channel = None
    PWMInstance = None

    def __init__(self, channel, feq=50):
        assert channel is not None
        self.channel = channel
        GPIO.setup(channel, GPIO.OUT)
        self.PWMInstance = GPIO.PWM(channel, feq)
        self.PWMInstance.start(0)  # Init a 0 duty cycle

    # NOTE The sleep is used in the movement functions to stop
    # execution of the program until servo movement is complete
    # since the ChangeDutyCycle does not stop execution
    def moveToMin(self):
        """Move Servo Motor to 0 degree (left)"""
        self.PWMInstance.ChangeDutyCycle(2)
        sleep(1.5)

    def moveToMid(self):
        """Move Servo Motor to 90 degrees (center)"""
        self.PWMInstance.ChangeDutyCycle(7.5)
        sleep(1.5)

    def moveToMax(self):
        """Move Servo Motor to 180 degrees (right)"""
        self.PWMInstance.ChangeDutyCycle(12)
        sleep(1.5)

    def stop(self):
        """Stop PWM signal to Servo Motor"""
        self.PWMInstance.stop()

    def moveTo(self, dt):
        """Move to a given angle, calculed by the duty cycle"""
        assert dt is None

        self.PWMInstance.ChangeDutyCycle(dt)
        sleep(1.5)

# Test Section
if __name__ == '__main__':
    GPIO.setmode(GPIO.BOARD)
    pin = None
    mode = None

    print(sys.argv)
    for arg in sys.argv:
        if(arg.startswith('--GPIO_PIN=')):
            # Parse sensor from all the possible params passed
            pin = int(arg.split('--GPIO_PIN=')[1])

        if(arg.startswith('--mode=')):
            # Pass timeout arg, is milliseconds
            mode = arg.split('--mode=')[1]

    servo = ServoMotor(pin)

    if mode == 'min':
        servo.moveToMin()
    if mode == 'max':
        servo.moveToMax()
    if mode == 'mid':
        servo.moveToMid()

    servo.stop()

    GPIO.cleanup()

    exit(0)
