/**
 * @fileoverview Adress book service.
 */

goog.provide('webproto.service.addressbook.AddressBook');
goog.provide('webproto.service.addressbook.module');

goog.require('webproto.service.proto.Proto');
goog.require('webproto.service.proto.module');

// Generated proto code.
goog.require('tutorial.AddressBook');
goog.require('tutorial.Person');
goog.require('tutorial.Person.PhoneNumber');
goog.require('tutorial.Person.PhoneType');

goog.scope(function() {

/**
 * A service to manage persons.
 *
 * @param {webproto.service.proto.Proto} proto The proto service.
 * @constructor
 * @ngInject
 */
webproto.service.addressbook.AddressBook = function(proto) {
  /** @private {webproto.service.proto.Proto} */
  this.proto_ = proto;
};
var AddressBook = webproto.service.addressbook.AddressBook;


/**
 * API endpoints.
 * @enum {string}
 */
AddressBook.Api = {
  LIST_ADDRESS_BOOK: '/api/address_book/list'
};


/**
 * @return {!angular.$q.Promise} A promise that resolves to a list of persons.
 */
AddressBook.prototype.list = function() {
  var url = AddressBook.Api.LIST_ADDRESS_BOOK;
  var protoStub = tutorial.AddressBook;

  return this.proto_.get(url, protoStub).then(function(response) {
    var protoObj = /** @type {!tutorial.AddressBook} */ (response);
    var persons = [];
    for (var i = 0; i < protoObj.personCount(); i++) {
      persons.push(protoObj.getPerson(i).getName());
    }
    return persons;
  });
};


/**
 * Angular module.
 * @type {!angular.Module}
 */
webproto.service.addressbook.module = angular.module(
    'webproto.service.addressbook', [webproto.service.proto.module.name]);
webproto.service.addressbook.module.service('addressbook', AddressBook);

});  // goog.scope
