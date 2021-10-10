import sys
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)

pin = None

for arg in sys.argv:
    if(arg.startswith('--sensor=')):
        # Parse sensor from all the possible params passed
        pin = int(arg.split('--sensor=')[1])

if(pin is None):
    print('No pin selected, sensor cannot be executed without specify an out')
    exit(-1)

GPIO.setup(pin, GPIO.IN)

if GPIO.input(pin):
    print('Input was HIGH')
    exit(1)
else:
    print('Input was LOW')
    exit(0)
