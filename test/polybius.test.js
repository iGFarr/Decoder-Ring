const {polybius} = require("../src/polybius");
const expect = require("chai").expect;
let expected;
let actual;
const actualEqualsExpected = expect(actual).to.equal(expected);
describe("polybius", () => {

    it("should translate both 'i' and 'j' to '42'", () => {
        expected = "42424242";
        actual = polybius("ijji");
        actualEqualsExpected;
    })

    it("should translate 42 to (i/j)", () => {
        expected = "(i/j)(i/j)";
        actual = polybius("4242");
        actualEqualsExpected;
    })
    
    it("should maintain spacing, but ignores capitalization", () => {
        expected = "25421313 44324234 25432452? 324353511254131345."
        actual = polybius("Will this work? Hopefully.");
        actualEqualsExpected;
    })
})
