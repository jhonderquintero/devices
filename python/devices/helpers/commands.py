import sys


def getArgumentValue(argument):
    value = None
    for arg in sys.argv:
        if(arg.startswith('--{0}='.format(argument))):
            # Parse sensor from all the possible params passed
            value = (arg.split('--{0}='.format(argument))[1])
    return value