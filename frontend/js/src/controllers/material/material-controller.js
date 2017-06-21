/**
 * @fileoverview Material controller.
 */

goog.provide('webproto.controller.MaterialCtrl');

goog.scope(function() {

/**
 * A controller for material module.
 *
 * @constructor
 * @export
 */
webproto.controller.MaterialCtrl = function() {
  /**
   * This is a private variable. It should not be used from the scope.
   * @private {string}
   */
  this.material_ = 'material';
};
var MaterialCtrl = webproto.controller.MaterialCtrl;


/**
 * Material public method. It should be exported to the scope.
 * @return {string} Material string.
 * @export
 */
MaterialCtrl.prototype.getMaterial = function() {
  return this.material_;
};

});  // goog.scope
