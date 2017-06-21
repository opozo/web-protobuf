/**
 * @fileoverview Manages protocol buffers from client-side.
 */
goog.provide('webproto.Jspb');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.proto2.PbLiteSerializer');

// Generated proto code.
goog.require('tutorial.AddressBook');
goog.require('tutorial.Person');
goog.require('tutorial.Person.PhoneNumber');
goog.require('tutorial.Person.PhoneType');


/**
 * JSPB class to manage protocol buffer operations.
 * @constructor
 */
webproto.Jspb = function() {
  /**
   * Loading container element.
   * @type {Element}
   */
  this.loadingContainerNode;

  this.start();
};


/**
 * Id hooks.
 * @enum {String}
 */
webproto.Jspb.ID = {
  LOADING_CONTAINER: 'loading-container'
};


/**
 * API endpoints.
 * @enum {String}
 */
webproto.Jspb.API = {
  LIST_ADDRESS_BOOK: '/api/address_book/list'
};


/**
 * Labels.
 * @enum {String}
 */
webproto.Jspb.LABEL = {
  LOADING: 'Loading...'
};


/**
 * Initialize event listeners.
 * @protected
 */
webproto.Jspb.prototype.start = function() {
  this.loadingContainerNode = goog.dom.getElement(
      webproto.Jspb.ID.LOADING_CONTAINER);
  var onClickHandler = goog.bind(this.onClick_, this);
  goog.events.listen(this.loadingContainerNode, goog.events.EventType.CLICK,
      onClickHandler);
};


/**
 * JSPB button click listener.
 * @private
 */
webproto.Jspb.prototype.onClick_ = function() {
  goog.dom.setTextContent(this.loadingContainerNode,
      webproto.Jspb.LABEL.LOADING);
  var onCallbackHandler = goog.bind(this.onCallback_, this);
  goog.net.XhrIo.send(webproto.Jspb.API.LIST_ADDRESS_BOOK, onCallbackHandler,
      'GET');
};


/**
 * XHR callback handler.
 * @param {goog.events.Event} ev The XHR completion event.
 * @private
 */
webproto.Jspb.prototype.onCallback_ = function(ev) {
  var xhr = /** @type {!goog.net.XhrIo} */ (ev.target);
  var result = '';
  if (xhr.getStatus() == 200) {
    var protoArr = xhr.getResponseJson();
    var serializer = new goog.proto2.PbLiteSerializer();
    var protoObj =  /** @type {!tutorial.AddressBook} */
        (serializer.deserialize(tutorial.AddressBook.getDescriptor(),
         protoArr));
    try {
      for (var i = 0, person; person = protoObj.getPerson(i); i++) {
        result += person.getName() + ', ';
      }
    } catch (AssertionError) {}
    result = result.substring(0, result.length - 2);
  } else {
    result = 'Error fetching address book';
  }
  goog.dom.setTextContent(this.loadingContainerNode, result);
};
