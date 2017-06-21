/**
 * @fileoverview Light wrapper around $http service that deserializes protos.
 */

goog.provide('webproto.service.proto.Proto');
goog.provide('webproto.service.proto.module');

goog.require('goog.proto2.PbLiteSerializer');

goog.scope(function() {

/**
 * The proto service.
 *
 * @param {!angular.$http} $http The Angular http service.
 * @constructor
 * @ngInject
 */
webproto.service.proto.Proto = function($http) {
  /** @private {!angular.$http} */
  this.http_ = $http;
};
var Proto = webproto.service.proto.Proto;


/**
 * Gets a pb response from the given url.
 *
 * @param {string} url Url where to send the request.
 * @param {Object} protoSub Protocol buffer stub.
 * @return {!angular.$q.Promise} Angular's promise, that will resolve to pb
 *     response.
 */
Proto.prototype.get = function(url, protoStub) {
  return this.http_.get(url).then(function(response) {
    var protoArr = response.data;
    var serializer = new goog.proto2.PbLiteSerializer();
    var protoObj = serializer.deserialize(protoStub.getDescriptor(), protoArr);
    return protoObj;
  });
};


/**
 * Angular module.
 * @type {!angular.Module}
 */
webproto.service.proto.module = angular.module('webproto.service.proto', []);
webproto.service.proto.module.service('proto', Proto);

});  // goog.scope
