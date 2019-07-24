// tests.js

const rgb = require('../color');
const assert = require('assert');

describe(".color", () => {
  describe('#rgb()', () => {
    it('should return a rgb color', () => {
      assert.equal(rgb(100, 100, 100).color, "#646464");
    });
  });
});
describe(".compliment", () => {
  describe('rgb()', () => {
    it('should return a complimentary color of the input', () => {
      assert.equal(rgb(100, 100, 100).compliment, "#9b9b9b");
    });
  });
});
