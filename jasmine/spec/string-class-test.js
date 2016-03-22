'use strict';

describe("MyStringClass test", function() {

  describe("pre-tests", function() {
    it("Should check the existence of defined methods in MyStringClass", function() {
      var myString = new MyStringClass();

      expect(MyStringClass).toBeDefined();
      expect(myString.hasVowels).toBeDefined();
      expect(myString.toUpper).toBeDefined();
      expect(myString.toLower).toBeDefined();
      expect(myString.ucFirst).toBeDefined();
      expect(myString.isQuestion).toBeDefined();
      expect(myString.words).toBeDefined();
      expect(myString.wordCount).toBeDefined();
      expect(myString.toCurrency).toBeDefined();
      expect(myString.fromCurrency).toBeDefined();
    });
  });

  describe("Test method hasvowels", function() {
    var string1, string2;

    beforeEach(function() {
      string1 = new MyStringClass("Hello World");
      string2 = new MyStringClass("jpppp");
    });

    it("Should return true if a vowel exists in the string, or false if otherwise", function() {
      var result1 = string1.hasVowels();
      var result2 = string2.hasVowels();

      expect(result1).toEqual(true);
      expect(result2).toEqual(false);
    });

    it("Should be called without passing an argument", function() {
      spyOn(string1, 'hasVowels');
      string1.hasVowels();

      expect(string1.hasVowels).toHaveBeenCalled();
      expect(string1.hasVowels).toHaveBeenCalledWith();
      expect(string1.hasVowels).not.toHaveBeenCalledWith("Hello World");
    });
  });

  describe("Test method toUpper", function() {
    var string1, string2, string3;

    beforeEach(function() {
      string1 = new MyStringClass("this is in lowercase");
      string2 = new MyStringClass("This is 1 sentence");
      string3 = new MyStringClass("ALL CAPS");
    });

    it("Should return an uppercased string", function() {
      var result1 = string1.toUpper();
      var result2 = string2.toUpper();
      var result3 = string3.toUpper();

      expect(result1).toEqual("THIS IS IN LOWERCASE");
      expect(result2).toEqual("THIS IS 1 SENTENCE");
      expect(result3).toEqual("ALL CAPS");
    });

    it("Should be called without passing an argument", function() {
      spyOn(string1, 'toUpper');
      string1.toUpper();

      expect(string1.toUpper).toHaveBeenCalled();
      expect(string1.toUpper).toHaveBeenCalledWith();
      expect(string1.toUpper).not.toHaveBeenCalledWith("this is in lowercase");
    });
  });

  describe("Test method toLower", function() {
    var string1, string2;

    beforeEach(function() {
      string1 = new MyStringClass("ALL CAPS.");
      string2 = new MyStringClass("H2SO4 is a type of acid");
    });

    it("Should return a lowercased string", function() {
      var result1 = string1.toLower();
      var result2 = string2.toLower();

      expect(result1).toEqual("all caps.");
      expect(result2).toEqual("h2so4 is a type of acid");
    });

    it("Should be called without passing an argument", function() {
      spyOn(string1, 'toLower');
      string1.toLower();

      expect(string1.toLower).toHaveBeenCalled();
      expect(string1.toLower).toHaveBeenCalledWith();
      expect(string1.toLower).not.toHaveBeenCalledWith("ALL CAPS.");
    });
  });

  describe("Uc First", function() {
    it("Should do something", function() {

    });
  });

  describe("Is Question", function() {
    var string1, string2;

    beforeEach(function() {
      string1 = new MyStringClass("Where is my glasses?");
      string2 = new MyStringClass("This is a line");
    });

    it("Should return true if a string is a question", function() {
      var result1 = string1.isQuestion();
      var result2 = string2.isQuestion();

      expect(result1).toEqual(true);
      expect(result2).toEqual(false);
    });

    it("Should be called without passing an argument", function() {
      spyOn(string1, 'isQuestion');
      string1.isQuestion();

      expect(string1.isQuestion).toHaveBeenCalled();
      expect(string1.isQuestion).toHaveBeenCalledWith();
      expect(string1.isQuestion).not.toHaveBeenCalledWith("Where is my glasses?");
    });
  });

  describe("words", function() {
    it("Should return an array containing all the words in the string", function() {

    });
  });

  describe("words count", function() {
    it("Should return the total count of words in the string", function() {

    });
  });

  describe("To currency", function() {
    it("Should do something", function() {

    });
  });

  describe("From currency", function() {
    it("Should do something else", function() {

    });
  });

});