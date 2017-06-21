"""Frontend application views."""

__author__ = 'orlandopozo@gmail.com (Orlando Pozo)'

from django import shortcuts
from django.template import RequestContext

from google.appengine.api import lib_config

from lib.address_book import addressbook_lib


config = lib_config.register(
    'handler_config', {
      'JQUERY_JS_BUNDLE': '/lib/jquery/dist/jquery.min.js',
      'ANGULAR_JS_BUNDLE': '/lib/angular-route/angular.min.js',
      'ANGULAR_ROUTE_JS_BUNDLE': '/lib/angular-route/angular-route.min.js',
      'ANGULAR_ANIMATE_JS_BUNDLE': '/lib/angular-animate/angular-animate.min.js',
      'ANGULAR_ARIA_JS_BUNDLE': '/lib/angular-aria/angular-aria.min.js',
      'ANGULAR_MATERIAL_JS_BUNDLE': '/lib/angular-material/angular-material.min.js',
      'ANGULAR_MATERIAL_CSS_BUNDLE': '/lib/angular-material/angular-material.min.css',
      'WEB_COMPONENTS_JS_BUNDLE': '/lib/webcomponentsjs/webcomponents.min.js',
      'POST_CARD_HTML_BUNDLE': '/js/min/post-card.min.html',
      'JS_BUNDLE': '/js/min/main.min.js',
      'CSS_BUNDLE': '/css/min/main.min.css'
    })

def Render(tpl, ctx, request):
  """Render django template.

  Args:
    tpl: Template name.
    ctx: Template dictionary context.
    request: Request Object.
  Returns:
    HttpResponse object.
  """
  ctx.update({
    'jquery_js_bundle': config.JQUERY_JS_BUNDLE,
    'angular_js_bundle': config.ANGULAR_JS_BUNDLE,
    'angular_route_js_bundle': config.ANGULAR_ROUTE_JS_BUNDLE,
    'angular_animate_js_bundle': config.ANGULAR_ANIMATE_JS_BUNDLE,
    'angular_aria_js_bundle': config.ANGULAR_ARIA_JS_BUNDLE,
    'angular_material_js_bundle': config.ANGULAR_MATERIAL_JS_BUNDLE,
    'angular_material_css_bundle': config.ANGULAR_MATERIAL_CSS_BUNDLE,
    'web_components_js_bundle': config.WEB_COMPONENTS_JS_BUNDLE,
    'post_card_html_bundle': config.POST_CARD_HTML_BUNDLE,
    'js_bundle': config.JS_BUNDLE,
    'css_bundle': config.CSS_BUNDLE
  })
  return shortcuts.render_to_response(tpl, ctx,
      context_instance=RequestContext(request))


def MainHandler(request):
  """Main HTTP handler.

  Args:
    request: Request Object.
  Returns:
    HttpResponse object.
  """
  proto_msg = addressbook_lib.InMemoryList()
  ctx = {
    'persons': proto_msg.person
  }
  return Render('index.html', ctx, request)
