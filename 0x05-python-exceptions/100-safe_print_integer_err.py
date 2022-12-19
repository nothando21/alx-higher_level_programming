#!/usr/bin/python3
import sys

safe_print_integer_err(value):
    try:
        print("{:d}".format(value))
        return (True)
    except (TypeError, ValueError):
        print("Excepton: {}".format(sys.exc_info()[1]), file=sys.stderr)
        return (False)
