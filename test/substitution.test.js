const {substitution} = require("../src/substitution");
const expect = require("chai").expect;
let expected;
let actual;
const actualEqualsExpected = expect(actual).to.equal(expected);

describe("substitution", () => {
    
    it("should return false if the given alphabet is not exactly 26 characters long", () => {
        expected = false;
        actual = substitution("testing", "not26characters");
        actualEqualsExpected;
    })

    it("returns false if any character in the alphabet occurs twice", () => {
        expected = false;
        actual = substitution("testing", "abcdefghijklmnopqrstuvwxya");
        actualEqualsExpected;
    })

    it("should correctly translate the phrase based on the given alphabet", () => {
        expected = "n0vn"
        actual = substitution("test", "$abc0123456789defgvn]poiuy");
        actualEqualsExpected;
    })

    it("should maintain spacing", () => {
        expected = "n34v 4v $7vd $ n0vn";
        actual = substitution("this is also a test", "$abc0123456789defgvn]poiuy");
        actualEqualsExpected;
    })

    it("should ignore capitalization", () => {
        expected = "n34v 4v $7vd $ n0vn";
        actual = substitution("This Is Also A Test.", "$abc0123456789defgvn]poiuy");
        actualEqualsExpected;
    })
})