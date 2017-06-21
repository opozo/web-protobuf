"""Address Book API view handlers."""

__author__ = 'orlandopozo@gmail.com (Orlando Pozo)'

import json as simplejson
from protojson import pbliteserializer
from django import http

from lib.address_book import addressbook_lib

def ListHandler(request):
  """List address book.

  Args:
    request: HTTP request object.
  Returns:
    Protocol buffer.
  """
  proto_obj = addressbook_lib.InMemoryList()
  serializer = pbliteserializer.PbLiteSerializer()
  result = serializer.serialize(proto_obj)
  json_result = simplejson.dumps(result)
  return http.HttpResponse(json_result)
