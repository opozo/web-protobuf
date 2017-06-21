/**
 * @fileoverview Adress book service.
 */

goog.provide('webproto.service.post.Post');
goog.provide('webproto.service.post.module');

goog.scope(function() {

/**
 * A service to manage posts.
 *
 * @param {!angular.$http} $http The Angular http service.
 * @constructor
 * @ngInject
 */
webproto.service.post.Post = function($http) {
  /** @private {!angular.$http} */
  this.http_ = $http;
};
var Post = webproto.service.post.Post;


/**
 * API endpoints.
 * @enum {string}
 */
Post.Api = {
  LIST_POSTS: '/json/posts.json'
};


/**
 * @return {!angular.$q.Promise} A promise that resolves to a list of posts.
 */
Post.prototype.list = function() {
  var url = Post.Api.LIST_POSTS;

  return this.http_.get(url).then(function(response) {
    return response.data;
  });
};


/**
 * Angular module.
 * @type {!angular.Module}
 */
webproto.service.post.module = angular.module('webproto.service.post', []);
webproto.service.post.module.service('post', Post);

});  // goog.scope
