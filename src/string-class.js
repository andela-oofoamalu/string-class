'use strict';

function MyStringClass (arg) {
  this.string = arg;
}

MyStringClass.prototype = new String;
MyStringClass.prototype.toString = MyStringClass.prototype.valueOf = function() {return this.value};
MyStringClass.prototype.constructor = String;

MyStringClass.prototype.hasVowels = function() {
  var expression = /[aeiou]/g;
  return expression.test(this.string);
};

MyStringClass.prototype.toUpper = function() {
  var upperCaseString = "";

  for (var i = 0; i < this.string.length; i++) {
    var char = this.string.charAt(i);

    if (isNaN(char) && !/[A-Z]/.test(char)) {
      var upperCaseCode = this.string.charCodeAt(i) - 32;
      upperCaseString += String.fromCharCode(upperCaseCode);
    } else {
      upperCaseString += char;
    }
  }
  return upperCaseString;
};

MyStringClass.prototype.toLower = function() {
  var lowerCaseString = "";

  for (var i = 0; i < this.string.length; i++) {
    var char = this.string.charAt(i);

    if (isNaN(char) && /[A-Z]/.test(char)) {
      var lowerCaseCode = this.string.charCodeAt(i) + 32;
      lowerCaseString += String.fromCharCode(lowerCaseCode);
    } else {
      lowerCaseString += char;
    }
  }
  return lowerCaseString;
};

MyStringClass.prototype.ucFirst = function() {
  return null;
};

MyStringClass.prototype.isQuestion = function() {
  var expression = /.\?$/;
  return expression.test(this.string);
};

MyStringClass.prototype.words = function() {
  var expression = /(\w)+./g;
  return this.string.match(expression);
};

MyStringClass.prototype.wordCount = function() {
  var wordArray = this.words();
  return wordArray.length;
};

MyStringClass.prototype.toCurrency = function() {
  return null;
};

MyStringClass.prototype.fromCurrency = function() {
  return 0;
};