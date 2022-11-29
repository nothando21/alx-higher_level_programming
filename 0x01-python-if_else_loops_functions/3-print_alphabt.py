#!/usr/bin/python3
in range(ord('a'), ord('z') + 1):
    if chr(i) != 'e' and chr(i) != 'q':
        print('{:c}'.format(i), end='')
