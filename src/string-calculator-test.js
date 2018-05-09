require('should');
const sc = require('./string-calculator.js');

describe("The string calculator", () => {
  it("Sums numbers separated by comma in a text", () => {
    sc("").should.eql(0);
  });
});