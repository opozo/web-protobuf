<!DOCTYPE html>
<html ng-app="application" lang="en">
  <head>
    <meta charset="utf-8">
    <meta content="{% block meta-description %}{% endblock %}" name="description">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">
    <base href="/">
    <title>{% block title %}{% endblock %}</title>
    {% block head-css %}
    <link rel="stylesheet" href="{{css_bundle}}">
    <link rel="stylesheet"
          href="{{angular_material_css_bundle}}">
    <link rel="stylesheet"
          href="//fonts.googleapis.com/css?family=RobotoDraft:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
    {% endblock %}
    {% block head-js %}
    <script src="{{web_components_js_bundle}}"></script>
    {% endblock %}
    {% block html-imports %}
    <link rel="import" href="{{post_card_html_bundle}}">
    {% endblock %}
  </head>
  <body unresolved>
    {% block header %}
    <div layout="column" role="main" flex>
      <md-toolbar>
        <div class="md-toolbar-tools" ng-click="openMenu()">
          <div layout="row" flex class="fill-height">
            <div class="md-toolbar-item md-breadcrumb gutter gutter-start">
              <a href="/">Home</a>
            </div>
            <div class="md-toolbar-item md-breadcrumb gutter">
              <a href="/proto">Proto</a>
            </div>
            <div class="md-toolbar-item md-breadcrumb gutter">
              <a href="/material">Material</a>
            </div>
            <div class="md-toolbar-item md-breadcrumb gutter">
              <a href="/polymer">Polymer</a>
            </div>
          </div>
        </div>
      </md-toolbar>
    </div>
    {% endblock %}
    {% block main %}
    <md-content md-scroll-y class="md-padding">
      <div ng-view>Loading...</div>
    </md-content>
    {% endblock %}
    {% block body-js %}
    <script src="{{jquery_js_bundle}}"></script>
    <script src="{{angular_js_bundle}}"></script>
    <script src="{{angular_route_js_bundle}}"></script>
    <script src="{{angular_animate_js_bundle}}"></script>
    <script src="{{angular_aria_js_bundle}}"></script>
    <script src="{{angular_material_js_bundle}}"></script>
    <script src="{{js_bundle}}"></script>
    {% endblock %}
  </body>
</html>
