const countVowels = require('../Vowels.js');

describe("count the vowels in a string", function() {

    // Red Phase
    test("should return custom error message when empty string is passed",
 function() {
        expect(countVowels("")).toBe("String is empty!");
    });
 
    // Green Phase
    test("should return count of vowels",
        function() {
               expect(countVowels("Hello")).toBe(2);
           });
    // Refactor 
    test("should return custom error message when number is passed",
        function() {
               expect(countVowels(5)).toBe("Invalid Input!");
           });
 
 });
