"""Address Book API URL router."""

__author__ = 'orlandopozo@gmail.com (Orlando Pozo)'

from django.conf.urls import defaults

urlpatterns = defaults.patterns(
    'api.address_book.views',
    defaults.url(r'/list/?$', 'ListHandler'),
)
