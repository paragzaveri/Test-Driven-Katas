const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty srting was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Counts spaces as characters,' () => {
    expect(wrap('          qwertyuiop')).to.equal('          \nqwertyuiop')
  })



  it('Returns a string broken into 4 parts of 20 chars', () => {
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
        20
      ).to.equal(
        'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
      )
    );
  });
});

//counts spaces as characters
//doesn't break up a word
//throws error if there's a word longer than maxlen
