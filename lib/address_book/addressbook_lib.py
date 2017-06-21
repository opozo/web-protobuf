"""Address Book library."""

__author__ = 'orlandopozo@gmail.com (Orlando Pozo)'

# Generated proto code.
from lib.address_book import addressbook_pb2


def InMemoryList():
  """Create list of persons.

  Returns:
    Returns address book protocol buffer.
  """
  proto_obj = addressbook_pb2.AddressBook()

  # In-memory data just for the example.
  person = proto_obj.person.add()
  person.id = 1
  person.name = "Peter"
  person.email = "peter@gmail.com"
  person = proto_obj.person.add()
  person.id = 2
  person.name = "Mike"
  person.email = "mike@gmail.com"
  return proto_obj
