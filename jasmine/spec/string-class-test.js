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

  describe("Has vowels", function() {
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

  describe("To upper", function() {
    it("Should return a string in all caps", function() {

    });
  });

  describe("To lower", function() {
    it("Should return a string in all lower case", function() {

    });
  });

  describe("Uc First", function() {
    it("Should do something", function() {

    });
  });

  describe("Is Question", function() {
    it("Should return true if a string is a question", function() {

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