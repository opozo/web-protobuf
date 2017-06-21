"""Frontend URL router."""

__author__ = 'orlandopozo@gmail.com (Orlando Pozo)'

from django.conf.urls import defaults


urlpatterns = defaults.patterns(
    'frontend.views',
    # Generic HTTP handler to render skeleton or shell template.
    # AngularJS will handle the rest after the shell template is rendered
    # from the server-side.
    defaults.url(r'^.*$', 'MainHandler'),
)
