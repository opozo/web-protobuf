// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: addressbook.proto

/**
 * @fileoverview Generated Protocol Buffer code for file addressbook.proto.
 */

goog.provide('tutorial.Person');
goog.provide('tutorial.Person.PhoneType');
goog.provide('tutorial.Person.PhoneNumber');
goog.provide('tutorial.AddressBook');

goog.require('goog.proto2.Message');



/**
 * Message Person.
 * @constructor
 * @extends {goog.proto2.Message}
 */
tutorial.Person = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(tutorial.Person, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!tutorial.Person} The cloned message.
 * @override
 */
tutorial.Person.prototype.clone;


/**
 * Gets the value of the name field.
 * @return {?string} The value.
 */
tutorial.Person.prototype.getName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the name field or the default value if not set.
 * @return {string} The value.
 */
tutorial.Person.prototype.getNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the name field.
 * @param {string} value The value.
 */
tutorial.Person.prototype.setName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the name field has a value.
 */
tutorial.Person.prototype.hasName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the name field.
 */
tutorial.Person.prototype.nameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the name field.
 */
tutorial.Person.prototype.clearName = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the id field.
 * @return {?number} The value.
 */
tutorial.Person.prototype.getId = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the id field or the default value if not set.
 * @return {number} The value.
 */
tutorial.Person.prototype.getIdOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the id field.
 * @param {number} value The value.
 */
tutorial.Person.prototype.setId = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the id field has a value.
 */
tutorial.Person.prototype.hasId = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the id field.
 */
tutorial.Person.prototype.idCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the id field.
 */
tutorial.Person.prototype.clearId = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the email field.
 * @return {?string} The value.
 */
tutorial.Person.prototype.getEmail = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the email field or the default value if not set.
 * @return {string} The value.
 */
tutorial.Person.prototype.getEmailOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the email field.
 * @param {string} value The value.
 */
tutorial.Person.prototype.setEmail = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the email field has a value.
 */
tutorial.Person.prototype.hasEmail = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the email field.
 */
tutorial.Person.prototype.emailCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the email field.
 */
tutorial.Person.prototype.clearEmail = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the phone field at the index given.
 * @param {number} index The index to lookup.
 * @return {tutorial.Person.PhoneNumber} The value.
 */
tutorial.Person.prototype.getPhone = function(index) {
  return /** @type {tutorial.Person.PhoneNumber} */ (this.get$Value(4, index));
};


/**
 * Gets the value of the phone field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!tutorial.Person.PhoneNumber} The value.
 */
tutorial.Person.prototype.getPhoneOrDefault = function(index) {
  return /** @type {!tutorial.Person.PhoneNumber} */ (this.get$ValueOrDefault(4, index));
};


/**
 * Adds a value to the phone field.
 * @param {!tutorial.Person.PhoneNumber} value The value to add.
 */
tutorial.Person.prototype.addPhone = function(value) {
  this.add$Value(4, value);
};


/**
 * Returns the array of values in the phone field.
 * @return {!Array.<!tutorial.Person.PhoneNumber>} The values in the field.
 */
tutorial.Person.prototype.phoneArray = function() {
  return /** @type {!Array.<!tutorial.Person.PhoneNumber>} */ (this.array$Values(4));
};


/**
 * @return {boolean} Whether the phone field has a value.
 */
tutorial.Person.prototype.hasPhone = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the phone field.
 */
tutorial.Person.prototype.phoneCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the phone field.
 */
tutorial.Person.prototype.clearPhone = function() {
  this.clear$Field(4);
};


/**
 * Enumeration PhoneType.
 * @enum {number}
 */
tutorial.Person.PhoneType = {
  MOBILE: 0,
  HOME: 1,
  WORK: 2
};



/**
 * Message PhoneNumber.
 * @constructor
 * @extends {goog.proto2.Message}
 */
tutorial.Person.PhoneNumber = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(tutorial.Person.PhoneNumber, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!tutorial.Person.PhoneNumber} The cloned message.
 * @override
 */
tutorial.Person.PhoneNumber.prototype.clone;


/**
 * Gets the value of the number field.
 * @return {?string} The value.
 */
tutorial.Person.PhoneNumber.prototype.getNumber = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the number field or the default value if not set.
 * @return {string} The value.
 */
tutorial.Person.PhoneNumber.prototype.getNumberOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the number field.
 * @param {string} value The value.
 */
tutorial.Person.PhoneNumber.prototype.setNumber = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the number field has a value.
 */
tutorial.Person.PhoneNumber.prototype.hasNumber = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the number field.
 */
tutorial.Person.PhoneNumber.prototype.numberCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the number field.
 */
tutorial.Person.PhoneNumber.prototype.clearNumber = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the type field.
 * @return {?tutorial.Person.PhoneType} The value.
 */
tutorial.Person.PhoneNumber.prototype.getType = function() {
  return /** @type {?tutorial.Person.PhoneType} */ (this.get$Value(2));
};


/**
 * Gets the value of the type field or the default value if not set.
 * @return {tutorial.Person.PhoneType} The value.
 */
tutorial.Person.PhoneNumber.prototype.getTypeOrDefault = function() {
  return /** @type {tutorial.Person.PhoneType} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the type field.
 * @param {tutorial.Person.PhoneType} value The value.
 */
tutorial.Person.PhoneNumber.prototype.setType = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the type field has a value.
 */
tutorial.Person.PhoneNumber.prototype.hasType = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the type field.
 */
tutorial.Person.PhoneNumber.prototype.typeCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the type field.
 */
tutorial.Person.PhoneNumber.prototype.clearType = function() {
  this.clear$Field(2);
};



/**
 * Message AddressBook.
 * @constructor
 * @extends {goog.proto2.Message}
 */
tutorial.AddressBook = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(tutorial.AddressBook, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!tutorial.AddressBook} The cloned message.
 * @override
 */
tutorial.AddressBook.prototype.clone;


/**
 * Gets the value of the person field at the index given.
 * @param {number} index The index to lookup.
 * @return {tutorial.Person} The value.
 */
tutorial.AddressBook.prototype.getPerson = function(index) {
  return /** @type {tutorial.Person} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the person field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!tutorial.Person} The value.
 */
tutorial.AddressBook.prototype.getPersonOrDefault = function(index) {
  return /** @type {!tutorial.Person} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the person field.
 * @param {!tutorial.Person} value The value to add.
 */
tutorial.AddressBook.prototype.addPerson = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the person field.
 * @return {!Array.<!tutorial.Person>} The values in the field.
 */
tutorial.AddressBook.prototype.personArray = function() {
  return /** @type {!Array.<!tutorial.Person>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the person field has a value.
 */
tutorial.AddressBook.prototype.hasPerson = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the person field.
 */
tutorial.AddressBook.prototype.personCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the person field.
 */
tutorial.AddressBook.prototype.clearPerson = function() {
  this.clear$Field(1);
};



goog.proto2.Message.set$Metadata(tutorial.Person, {
  0: {
    name: 'Person',
    fullName: 'tutorial.Person'
  },
  1: {
    name: 'name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'id',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  3: {
    name: 'email',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  4: {
    name: 'phone',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: tutorial.Person.PhoneNumber
  }
});


goog.proto2.Message.set$Metadata(tutorial.Person.PhoneNumber, {
  0: {
    name: 'PhoneNumber',
    containingType: tutorial.Person,
    fullName: 'tutorial.Person.PhoneNumber'
  },
  1: {
    name: 'number',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'type',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: tutorial.Person.PhoneType.HOME,
    type: tutorial.Person.PhoneType
  }
});


goog.proto2.Message.set$Metadata(tutorial.AddressBook, {
  0: {
    name: 'AddressBook',
    fullName: 'tutorial.AddressBook'
  },
  1: {
    name: 'person',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: tutorial.Person
  }
});
