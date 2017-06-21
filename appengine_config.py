# Fix protobuf for GAE and set App Engine config flags.

import os
import sys

import google  # provided by GAE

# add vendorized protobuf to google namespace package
vendor_dir = os.path.join(os.path.dirname(__file__), 'vendor')
google.__path__.append(os.path.join(vendor_dir, 'google'))

# add vendor path
sys.path.insert(0, vendor_dir)

# Setup App Engine config flags
APPLICATION_ID = os.environ.get('APPLICATION_ID', '')

if APPLICATION_ID == 's~web-protobuf': # prod
  handler_config_JQUERY_JS_BUNDLE = '/lib/jquery/dist/jquery.min.js'
  handler_config_ANGULAR_JS_BUNDLE = '/lib/angular/angular.min.js'
  handler_config_ANGULAR_ROUTE_JS_BUNDLE = '/lib/angular-route/angular-route.min.js'
  handler_config_ANGULAR_ANIMATE_JS_BUNDLE = '/lib/angular-animate/angular-animate.min.js'
  handler_config_ANGULAR_ARIA_JS_BUNDLE = '/lib/angular-aria/angular-aria.min.js'
  handler_config_ANGULAR_MATERIAL_JS_BUNDLE = '/lib/angular-material/angular-material.min.js'
  handler_config_ANGULAR_MATERIAL_CSS_BUNDLE = '/lib/angular-material/angular-material.min.css'
  handler_config_WEB_COMPONENTS_JS_BUNDLE = '/lib/webcomponentsjs/webcomponents.min.js'
  handler_config_POST_CARD_HTML_BUNDLE = '/js/min/post-card.min.html'
  handler_config_JS_BUNDLE = '/js/min/main.min.js'
  handler_config_CSS_BUNDLE = '/css/min/main.min.css'
elif APPLICATION_ID == 'dev~web-protobuf': # dev
  handler_config_JQUERY_JS_BUNDLE = '/lib/jquery/dist/jquery.js'
  handler_config_ANGULAR_JS_BUNDLE = '/lib/angular/angular.js'
  handler_config_ANGULAR_ROUTE_JS_BUNDLE = '/lib/angular-route/angular-route.js'
  handler_config_ANGULAR_ANIMATE_JS_BUNDLE = '/lib/angular-animate/angular-animate.js'
  handler_config_ANGULAR_ARIA_JS_BUNDLE = '/lib/angular-aria/angular-aria.js'
  handler_config_ANGULAR_MATERIAL_JS_BUNDLE = '/lib/angular-material/angular-material.js'
  handler_config_ANGULAR_MATERIAL_CSS_BUNDLE = '/lib/angular-material/angular-material.css'
  handler_config_WEB_COMPONENTS_JS_BUNDLE = '/lib/webcomponentsjs/webcomponents.js'
  handler_config_POST_CARD_HTML_BUNDLE = '/components/post-card.html'
  # handler_config_JS_BUNDLE = '/js/main.js'
  handler_config_JS_BUNDLE = 'http://localhost:9810/compile?id=demo&amp;mode=RAW' # Plovr hotswap server
  handler_config_CSS_BUNDLE = '/css/main.css'

