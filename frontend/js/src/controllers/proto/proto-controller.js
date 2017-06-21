/**
 * @fileoverview Material controller.
 */

goog.provide('webproto.controller.ProtoCtrl');

goog.require('webproto.service.addressbook.AddressBook');

goog.scope(function() {

/**
 * A controller for proto module.
 *
 * @param {!webproto.service.addressbook.AddressBook} Address book service.
 * @constructor
 * @ngInject
 * @export
 */
webproto.controller.ProtoCtrl = function(addressbook) {
  /**
   * This is a private variable. It should not be used from the scope.
   * @private {string}
   */
  this.proto_ = 'proto';

  /**
   * Persons.
   * @type {Array}
   * @expose
   */
  this.persons;

  var callbackHandler = goog.bind(this.onCallback_, this);
  addressbook.list().then(callbackHandler);
};
var ProtoCtrl = webproto.controller.ProtoCtrl;


/**
 * Callback handler.
 * @param {string} result Person result.
 * @private
 */
ProtoCtrl.prototype.onCallback_ = function(persons) {
  this.persons = persons;
};


/**
 * Proto public method. It should be exported to the scope.
 * @return {string} Proto string.
 * @export
 */
ProtoCtrl.prototype.getProto = function() {
  return this.proto_;
};

});  // goog.scope
