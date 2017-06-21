/**
 * @fileoverview A filter that makes a string uppercase.
 */

goog.provide('webproto.filter.uppercase.module');
goog.provide('webproto.filter.uppercase.uppercaseFilter');

goog.scope(function() {

/**
 * Filter to convert input to upper case.
 * @param {string} input The input to the filter.
 * @return {string} The uppercased string.
 */
webproto.filter.uppercase.uppercaseFilter = function(input) {
  return input.toUpperCase();
};
var uppercase = webproto.filter.uppercase;


/**
 * Angular module.
 * @type {!angular.Module}
 */
uppercase.module = angular.module('webproto.filter.uppercase', []);
uppercase.module.filter('uppercase', function() {
  return uppercase.uppercaseFilter;
});

});  // goog.scope
