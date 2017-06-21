"""API URL router."""

__author__ = 'orlandopozo@gmail.com (Orlando Pozo)'

from django.conf.urls import defaults

urlpatterns = defaults.patterns(
    '',
    defaults.url(r'^/address_book', defaults.include('api.address_book.urls')),
)
