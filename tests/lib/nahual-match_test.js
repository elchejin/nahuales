const should = require('chai').should();
const nahualMatch = require('../../lib/nahual-match');

describe('nahual-match', () => {
  describe('.nahualMatcher', () => {
    it('should return nahualMatcher as an object', () => {
      const date = new Date('1987-01-20');
      const newNahual = nahualMatch.nahualMatcher(date);
      newNahual.should.be.a('object');
    });

    it('should return nahual as a string', () => {
      const date = new Date('1987-01-20');
      const newNahual = nahualMatch.nahualMatcher(date);
      newNahual.nahual.should.be.a('string');
    });

    it('should return an error when no date is sent', () => {
      const newNahual = nahualMatch.nahualMatcher();
      newNahual.should.be.a('error');
    });

    it('should return B\'atz\' for 1983-09-16', () => {
      const date = new Date('1983-09-16');
      const newNahual = nahualMatch.nahualMatcher(date);
      newNahual.nahual.should.be.a('string');
      newNahual.nahual.should.equal('B\'atz\'');
    });

    it('should return Aj for 1987-01-20', () => {
      const date = new Date('1987-01-20');
      const newNahual = nahualMatch.nahualMatcher(date);
      newNahual.nahual.should.be.a('string');
      newNahual.nahual.should.equal('Aj');
    });

    it('should return E for 2017-01-01', () => {
      const date = new Date('2017-01-01');
      const newNahual = nahualMatch.nahualMatcher(date);
      newNahual.nahual.should.be.a('string');
      newNahual.nahual.should.equal('E');
    });
  });
});
