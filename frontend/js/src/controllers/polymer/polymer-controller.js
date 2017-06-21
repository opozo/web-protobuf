/**
 * @fileoverview Polymer controller.
 */

goog.provide('webproto.controller.PolymerCtrl');

goog.require('webproto.service.post.Post');

goog.scope(function() {

/**
 * A controller for polymer module.
 *
 * @param {!webproto.service.addressbook.AddressBook} addressbook
 * @constructor
 * @ngInject
 * @export
 */
webproto.controller.PolymerCtrl = function(post) {
  /**
   * This is a private variable. It should not be used from the scope.
   * @private {string}
   */
  this.polymer_ = 'polymer';

  /**
   * Posts.
   * @type {Array}
   * @expose
   */
  this.posts;

  var callbackHandler = goog.bind(this.onCallback_, this);
  post.list().then(callbackHandler);
};
var PolymerCtrl = webproto.controller.PolymerCtrl;


/**
 * Callback handler.
 * @param {string} result Person result.
 * @private
 */
PolymerCtrl.prototype.onCallback_ = function(posts) {
  this.posts = posts;
};


/**
 * Polymer public method. It should be exported to the scope.
 * @return {string} Polymer string.
 * @export
 */
PolymerCtrl.prototype.getPolymer = function() {
  return this.polymer_;
};

});  // goog.scope
