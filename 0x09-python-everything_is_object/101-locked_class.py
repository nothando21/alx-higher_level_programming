#!/usr/bin/python3
"""Defines a locked class"""


Class LockedClass:
    """
    Only allows instatiation of a attribute called first_name
    """

    __slots__ = ["first_name"]
