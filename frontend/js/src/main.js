/**
 * @fileoverview Primary module for the webproto app.
 */

goog.provide('webproto.main');
goog.provide('webproto.module');
goog.provide('webproto.routes');

goog.require('goog.dom');
goog.require('goog.soy');

goog.require('webproto.Jspb');
goog.require('webproto.controller.HomeCtrl');
goog.require('webproto.controller.MaterialCtrl');
goog.require('webproto.controller.PolymerCtrl');
goog.require('webproto.controller.ProtoCtrl');
goog.require('webproto.directive.hello.module');
goog.require('webproto.filter.uppercase.module');
goog.require('webproto.service.addressbook.module');
goog.require('webproto.service.post.module');
goog.require('webproto.service.proto.module');
goog.require('webproto.ng');
goog.require('webproto.soy');



/**
 * Setup application routes.
 * @param {!angular.$routeProvider} $routeProvider Route provider.
 * @param {!angular.$locationProvider} $locationProvider Push state provider.
 * @ngInject
 */
webproto.routes = function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.
      when('/', {
        templateUrl: '/ng/home.ng',
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl'
      }).
      when('/proto', {
        templateUrl: '/ng/proto.ng',
        controller: 'ProtoCtrl',
        controllerAs: 'protoCtrl'
      }).
      when('/material', {
        templateUrl: '/ng/material.ng',
        controller: 'MaterialCtrl',
        controllerAs: 'materialCtrl'
      }).
      when('/polymer', {
        templateUrl: '/ng/polymer.ng',
        controller: 'PolymerCtrl',
        controllerAs: 'polymerCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

};


/**
 * Setup template interpolation.
 * @param {!angular.$interpolateProvider} $interpolateProvider Interpolate
 *     provider.
 * @ngInject
 */
webproto.interpolate = function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
};


/**
 * The main module for the webproto app.
 * @type {!angular.Module}
 */
webproto.module = angular.module('application', [
  webproto.ng.name,
  webproto.directive.hello.module.name,
  webproto.filter.uppercase.module.name,
  webproto.service.post.module.name,
  webproto.service.proto.module.name,
  webproto.service.addressbook.module.name,
  'ngRoute',
  'ngMaterial'
]);
webproto.module.config(webproto.routes);
webproto.module.config(webproto.interpolate);
webproto.module.controller('HomeCtrl', webproto.controller.HomeCtrl);
webproto.module.controller('MaterialCtrl', webproto.controller.MaterialCtrl);
webproto.module.controller('PolymerCtrl', webproto.controller.PolymerCtrl);
webproto.module.controller('ProtoCtrl', webproto.controller.ProtoCtrl);


/**
 * Client-side closure entry point.
 */
webproto.main = function() {
  var context = {
    heading: 'Soy!'
  };
  var soyNode = goog.dom.getElement('soy-content');
  goog.soy.renderElement(soyNode, webproto.soy.base, context);
  new webproto.Jspb();
};


/**
 * Exports symbol since obsfucation through ADVANCED_OPTIMIZATIONS is enabled.
 */
goog.exportSymbol('webproto.main', webproto.main);
