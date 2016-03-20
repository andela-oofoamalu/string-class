'use strict';

function MyStringClass (arg) {
  this.value = arg;
}

MyStringClass.prototype = new String();
MyStringClass.prototype.toString = MyStringClass.prototype.valueOf = function(){return this.value};
MyStringClass.prototype.constructor = String;

MyStringClass.prototype.hasVowels = function() {
  return false;
};

MyStringClass.prototype.toUpper = function() {
  return null;
};

MyStringClass.prototype.toLower = function() {
  return null;
};

MyStringClass.prototype.ucFirst = function() {
  return null;
};

MyStringClass.prototype.isQuestion = function() {
  return false;
};

MyStringClass.prototype.words = function() {
  return [];
};

MyStringClass.prototype.wordCount = function() {
  return 0;
};

MyStringClass.prototype.toCurrency = function() {
  return null;
};

MyStringClass.prototype.fromCurrency = function() {
  return 0;
};
