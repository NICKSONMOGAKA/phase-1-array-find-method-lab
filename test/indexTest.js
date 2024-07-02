const { expect } = require('chai');
const { findMatching, fuzzyMatch, matchName, superbowlWin } = require('../index.js');

describe('index.js', () => {
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah'];

  describe('findMatching()', () => {
    // ... existing tests
  });

  describe('fuzzyMatch()', () => {
    // ... existing tests
  });

  describe('matchName()', () => {
    // ... existing tests
  });

  describe('superbowlWin()', () => {
    it('returns a year the Denver Broncos won the superbowl', () => {
      expect(superbowlWin([1997, 2013, 2015])).to.equal(1997);
    });

    it('returns undefined if the record has no win objects', () => {
      expect(superbowlWin([2013, 2014])).to.be.undefined;
    });
  });
});
