import sys
import RPi.GPIO as GPIO

if __name__ == "__main__":
    GPIO.setmode(GPIO.BOARD)

    pin = None

    for arg in sys.argv:
        if(arg.startswith('--pin=')):
            # Parse sensor from all the possible params passed
            pin = int(arg.split('--pin=')[1])

    if(pin is None):
        print('No pin selected, sensor cannot be executed without specify a pin')
        exit(-1)

    GPIO.setup(pin, GPIO.IN)

    if GPIO.input(pin):
        print('Input was HIGH')
        exit(0)
    else:
        print('Input was LOW')
        exit(1)
