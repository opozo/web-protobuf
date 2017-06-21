/**
 * @fileoverview Home controller.
 */

goog.provide('webproto.controller.HomeCtrl');

goog.scope(function() {

/**
 * Main page controller.
 *
 * @constructor
 * @export
 */
webproto.controller.HomeCtrl = function() {
  /**
   * @type {string}
   * @expose
   */
  this.myColor = 'light-blue';

  /**
   * @type {Object}
   * @expose
   */
  this.myUser = {
    /** @expose */
    firstName: 'Orlando',
    /** @expose */
    lastName: 'Pozo'
  };

  /**
   * It should not be visible in the scope of the view.
   * @private {string}
   */
  this.greeting_ = 'Bonjour';
};
var HomeCtrl = webproto.controller.HomeCtrl;


/**
 * Prints the user's full name.
 *
 * @return {string} The name.
 * @export
 */
HomeCtrl.prototype.sayHello = function() {
  return this.greeting_ + ' ' + this.myUser.firstName + ' ' +
      this.myUser.lastName;
};


/**
 * Sums two numbers.
 *
 * @param {number} a First number.
 * @param {number} b Second number.
 * @return {number} The sum of the items in the list.
 * @export
 */
HomeCtrl.prototype.add = function(a, b) {
  if (!a) {
    a = 0;
  }
  if (!b) {
    b = 0;
  }
  var sum = a + b;
  return sum;
};

});  // goog.scope
