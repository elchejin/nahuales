const should = require('chai').should();
const cycleCount = require('../../lib/cycle-count');

describe('cycle-count', () => {
  describe('.cycleCount', () => {
    it('should return the right day and nahual index', () => {
      const date = new Date('1983-09-16');
      const date2 = new Date('1987-01-20');
      const countInitDay = new Date('1983-09-16');
      const day = cycleCount.cycleCount(countInitDay, date, 13);
      const nahualCount = cycleCount.cycleCount(countInitDay, date, 20);
      const day2 = cycleCount.cycleCount(countInitDay, date2, 13);
      const nahualCount2 = cycleCount.cycleCount(countInitDay, date2, 20);
      day.should.equal(1);
      nahualCount.should.equal(1);
      day2.should.equal(1);
      nahualCount2.should.equal(3);
    });
  });
});
