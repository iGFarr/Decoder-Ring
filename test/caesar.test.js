const caesarCypher = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    const testInput = "testing caesar cypher encoding";

    it("should return false if there is no shift input", () => {
        const expected = false;
        const actual = caesarCypher(testInput)
        expect(actual).to.equal(expected);
    })
})