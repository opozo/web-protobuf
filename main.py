"""Application bootstrapper."""

__author__ = 'orlandopozo@gmail.com (Orlando Pozo)'

import os
from django.core.handlers import wsgi

os.environ['DJANGO_SETTINGS_MODULE'] = ('settings')

app = wsgi.WSGIHandler()