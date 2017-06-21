// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

goog.provide('webproto.soy');

goog.require('soy');
goog.require('soydata');


webproto.soy.base = function(opt_data, opt_ignored) {
  return webproto.soy.header(opt_data);
};


webproto.soy.header = function(opt_data, opt_ignored) {
  return '<h1>' + soy.$$escapeHtml(opt_data.heading) + '</h1>';
};
