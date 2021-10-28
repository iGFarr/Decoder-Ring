const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    const testInput = "Testing Caesar Cypher Encoding";

    it("should return false if there is no shift input", () => {
        const expected = false;
        const actual = caesar(testInput)
        expect(actual).to.equal(expected);
    })

    it("should return false if the shift is less than -25", () => {
        const expected = false;
        const actual = caesar(testInput, -30);
        expect(actual).to.equal(expected);
    })

    it("should return false if the shift is greater than 25", () => {
        const expected = false;
        const actual = caesar(testInput, 30);
        expect(actual).to.equal(expected);
    })

    it("should return false if the shift is equal to 0", () => {
        const expected = false;
        const actual = caesar(testInput, 0);
        expect(actual).to.equal(expected);
    })

    it("should ignore capitalization", () => {
        expected = "whvwlqj fdhvdu fbskhu hqfrglqj";
        actual = caesar(testInput, 3);
        expect(actual).to.equal(expected)
    })

    it("should be able to correctly wrap around the end of the alphabet", () => {
        expected = "chogd"
        actual = caesar("Zelda", 3)
        expect(actual).to.equal(expected);
    })
})