goog.provide('webproto.ng');
webproto.ng = angular.module('webproto.ng', []).
		run(['$templateCache',
				 function($templateCache) {
  'use strict';

  $templateCache.put('/ng/hello.ng',
    "<i ng-transclude></i>"
  );


  $templateCache.put('/ng/home.ng',
    "<div id=\"home-view\"><p><div layout layout-sm=\"column\"><md-input-container flex class=\"md-default-theme\" autofocus><label for=\"first-name\">Number 1</label><input type=\"number\" ng-model=\"numA\" class=\"ng-pristine ng-untouched ng-valid md-input\" tabindex=\"0\" id=\"first-name\" aria-invalid=\"false\"><div class=\"md-placeholder\">Please input number 1</div></md-input-container><md-input-container flex class=\"md-default-theme\"><label for=\"last-name\">Number 2</label><input type=\"number\" ng-model=\"numB\" class=\"ng-pristine ng-untouched ng-valid md-input\" tabindex=\"0\" id=\"last-name\" aria-invalid=\"false\"><div class=\"md-placeholder\">Please input number 2</div></md-input-container></div><span><strong>Total</strong>: [[homeCtrl.add(numA, numB)]]</span></p><p><div layout layout-sm=\"column\"><md-input-container flex class=\"md-default-theme\" autofocus><label for=\"first-name\">First Name</label><input ng-model=\"homeCtrl.myUser.firstName\" class=\"ng-pristine ng-untouched ng-valid md-input\" tabindex=\"0\" id=\"first-name\" aria-invalid=\"false\"><div class=\"md-placeholder\">Please input your first name</div></md-input-container><md-input-container flex class=\"md-default-theme\"><label for=\"last-name\">Last Name</label><input ng-model=\"homeCtrl.myUser.lastName\" class=\"ng-pristine ng-untouched ng-valid md-input\" tabindex=\"0\" id=\"last-name\" aria-invalid=\"false\"><div class=\"md-placeholder\">Please input your last name</div></md-input-container></div><div><h2 data-ng-class=\"homeCtrl.myColor\">[[homeCtrl.sayHello() | uppercase]]</h2></div></p></div>"
  );


  $templateCache.put('/ng/material.ng',
    "<div id=\"material-view\"><md-content md-scroll-y flex class=\"md-padding ng-scope md-default-theme\"><form name=\"userForm\" class=\"ng-pristine ng-valid ng-valid-md-maxlength\"><div layout layout-sm=\"column\"><md-input-container flex class=\"md-default-theme\" autofocus><label for=\"first-name\">First Name</label><input ng-model=\"user.firstName\" class=\"ng-pristine ng-untouched ng-valid md-input\" tabindex=\"0\" id=\"first-name\" aria-invalid=\"false\"><div class=\"md-placeholder\">Please input your first name</div></md-input-container><md-input-container flex class=\"md-default-theme\"><label for=\"last-name\">Last Name</label><input ng-model=\"theMax\" class=\"ng-pristine ng-untouched ng-valid md-input\" tabindex=\"0\" id=\"last-name\" aria-invalid=\"false\"><div class=\"md-placeholder\">Please input your last name</div></md-input-container></div><md-input-container flex class=\"md-default-theme md-input-has-value\"><label for=\"address\">Address</label><input ng-model=\"user.address\" class=\"ng-pristine ng-untouched ng-valid md-input\" tabindex=\"0\" id=\"address\" aria-invalid=\"false\"><div class=\"md-placeholder\">Please input your address</div></md-input-container><div layout layout-sm=\"column\"><md-input-container flex class=\"md-default-theme md-input-has-value\"><label for=\"city\">City</label><input ng-model=\"user.city\" class=\"ng-pristine ng-untouched ng-valid md-input\" tabindex=\"0\" id=\"city\" aria-invalid=\"false\"><div class=\"md-placeholder\">Please input your city</div></md-input-container><md-input-container flex class=\"md-default-theme md-input-has-value\"><label for=\"state\">State</label><input ng-model=\"user.state\" class=\"ng-pristine ng-untouched ng-valid md-input\" tabindex=\"0\" id=\"state\" aria-invalid=\"false\"><div class=\"md-placeholder\">Please input your state</div></md-input-container><md-input-container flex class=\"md-default-theme md-input-has-value\"><label for=\"postal-code\">Postal Code</label><input ng-model=\"user.postalCode\" class=\"ng-pristine ng-untouched ng-valid md-input\" tabindex=\"0\" id=\"postal-code\" aria-invalid=\"false\"><div class=\"md-placeholder\">Please input your postal code</div></md-input-container></div><md-input-container flex class=\"md-default-theme md-input-has-value\"><label for=\"biography\">Biography</label><textarea ng-model=\"user.biography\" columns=\"1\" md-maxlength=\"150\" class=\"ng-pristine ng-untouched ng-valid md-input ng-valid-md-maxlength\" id=\"biography\" aria-multiline=\"true\" tabindex=\"0\" ng-trim=\"false\" aria-invalid=\"false\"></textarea><div class=\"md-placeholder\">Please input your biography</div><div class=\"md-char-counter\"></div></md-input-container></form></md-content><md-card class=\"md-default-theme\"><img src=\"img/card-bg.jpg\" alt=\"Washed Out\"><md-card-content><h2>Card Title</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></md-card-content></md-card></div>"
  );


  $templateCache.put('/ng/polymer.ng',
    "<div id=\"polymer-view\" class=\"wc-container\" layout vertical center><post-card ng-repeat=\"post in polymerCtrl.posts\"><img src=\"[[post.avatar]]\"><h2>[[post.username]]</h2><p>[[post.text]]</p></post-card></div>"
  );


  $templateCache.put('/ng/proto.ng',
    "<div id=\"proto-view\"><p><label><strong>Hello World: &nbsp;</strong></label><hello-world>[[protoCtrl.getProto()]]</hello-world></p><md-divider class=\"md-default-theme\"></md-divider><p><strong>Persons</strong><ul><li ng-repeat=\"person in protoCtrl.persons\">[[person]]</li></ul></p><md-divider class=\"md-default-theme\"></md-divider><p><div id=\"soy-content\"></div><div id=\"loading-container\"><button class=\"md-raised md-primary md-button md-default-theme\"><span>Load</span><div class=\"md-ripple-container\"></div></button></div></p><script>webproto.main();</script></div>"
  );

}]);