from subprocess import Popen, PIPE
from time import sleep
from datetime import datetime

import helpers.commands as commands
from RPLCD.gpio import CharLCD
import RPi.GPIO as GPIO

"""
This sript prints in a LCD display connected the given string via args.

"""
# LCD Display size
lcd_columns = 16
lcd_rows = 2

# Check wiring here: https://learn.adafruit.com/drive-a-16x2-lcd-directly-with-a-raspberry-pi/wiring
# Init the LCD class
# See the charmap used in pages 17 and 18 from the datasheet
lcd = CharLCD(pin_rs=11, pin_rw=12, pin_e=13, 
              pins_data=[15, 16, 18, 22],
              numbering_mode=GPIO.BOARD,
              cols=lcd_columns, rows=lcd_rows, dotsize=8,
              charmap='A02',
              auto_linebreaks=True)

# ---------- LCD Code
# wipe LCD screen before we start
lcd.clear()

test_mode = commands.getArgumentValue("test_mode")

if(test_mode == 'True'):
    for x in range(10):
        # date and time
        date = datetime.now().strftime('%b %d  %H:%M:%S\n')

        # The class already formats the new lines and carriage return to the LCD
        lcd.write_string('Hello World!\r\n {0}'.format(date))
        sleep(1)
else:
    text: str = commands.getArgumentValue("text")
    assert text is not None
    print(text)
    print(type(text))
    lcd.write_string(text)
    lcd.close()
    GPIO.cleanup()

exit(0)


# ----- OPTIONAL
# Code from: https://learn.adafruit.com/drive-a-16x2-lcd-directly-with-a-raspberry-pi/python-code
# This code shows the IP adress, could be usefull for the initial configuration process.

# # looking for an active Ethernet or WiFi device
# def find_interface():
#     find_device = "ip addr show"
#     interface_parse = run_cmd(find_device)
#     for line in interface_parse.splitlines():
#         if "state UP" in line:
#             dev_name = line.split(':')[1]
#     return dev_name

# # find an active IP on the first LIVE network device
# def parse_ip():
#     find_ip = "ip addr show %s" % interface
#     find_ip = "ip addr show %s" % interface
#     ip_parse = run_cmd(find_ip)
#     for line in ip_parse.splitlines():
#         if "inet " in line:
#             ip = line.split(' ')[5]
#             ip = ip.split('/')[0]
#     return ip

# # run unix shell command, return as ASCII
# def run_cmd(cmd):
#     p = Popen(cmd, shell=True, stdout=PIPE)
#     output = p.communicate()[0]
#     return output.decode('ascii')

# before we start the main loop - detect active network device and ip address
# sleep(2)
# interface = find_interface()
# ip_address = parse_ip()

# current ip address
# lcd_line_2 = "IP " + ip_address
