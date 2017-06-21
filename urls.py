"""Application URL router."""

__author__ = 'orlandopozo@gmail.com (Orlando Pozo)'

from django.conf.urls import defaults

urlpatterns = defaults.patterns(
    '',
    defaults.url(r'^api', defaults.include('api.urls')),
    defaults.url(r'', defaults.include('frontend.urls')),
)
