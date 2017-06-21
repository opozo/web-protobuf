/**
 * @fileoverview Hello world directive widget.
 */

goog.provide('webproto.directive.hello.helloDirective');
goog.provide('webproto.directive.hello.module');

goog.scope(function() {

/**
 * Hello world directive widget constructor.
 *
 * Usage:
 *   <hello-world>transcluded data</hello-world>
 *
 * @return {angular.Directive} Directive definition object.
 */
webproto.directive.hello.helloDirective = function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/ng/hello.ng'
  };
};
var hello = webproto.directive.hello;


/**
 * Defines the 'hello' module.
 *
 * @type {!angular.Module}
 */
hello.module = angular.module('webproto.directive.hello', []);
hello.module.directive('helloWorld', hello.helloDirective);

});  // goog.scope
